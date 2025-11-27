import React, { useState } from 'react';
import { Send, Copy, Check, AlertCircle, Info, RefreshCw } from 'lucide-react';

const SaveHavenWebhookTester = () => {
  const [webhookUrl, setWebhookUrl] = useState('http://localhost:3000/api/webhooks/savehaven');
  const [virtualAccount, setVirtualAccount] = useState('');
  const [withdrawalRef, setWithdrawalRef] = useState('');
  const [scenario, setScenario] = useState('inwards-success');
  const [customizing, setCustomizing] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Customizable fields
  const [customFields, setCustomFields] = useState({
    amount: 50000,
    fees: 50,
    vat: 4,
    stampDuty: 0,
    narration: 'Test Transaction',
    debitAccountName: 'TEST SENDER',
    debitAccountNumber: '1234567890',
    creditAccountName: 'TEST RECEIVER',
  });

  const scenarios = [
    { value: 'inwards-success', label: '✅ Inwards Success (Wallet Funding)', type: 'Inwards', status: 'Completed' },
    { value: 'inwards-failed', label: '❌ Inwards Failed', type: 'Inwards', status: 'Failed' },
    { value: 'inwards-reversed', label: '🔄 Inwards Reversed', type: 'Inwards', status: 'Completed', reversed: true },
    { value: 'outwards-success', label: '✅ Outwards Success (Withdrawal)', type: 'Outwards', status: 'Completed' },
    { value: 'outwards-failed', label: '❌ Outwards Failed', type: 'Outwards', status: 'Failed' },
    { value: 'outwards-reversed', label: '🔄 Outwards Reversed', type: 'Outwards', status: 'Completed', reversed: true },
  ];

  const edgeCases = [
    { value: 'duplicate', label: '🔁 Duplicate Transaction (Same Provider ID)' },
    { value: 'invalid-account', label: '⚠️ Invalid Virtual Account' },
    { value: 'missing-ref', label: '⚠️ Missing Withdrawal Reference' },
    { value: 'large-amount', label: '💰 Large Amount (₦10,000,000)' },
    { value: 'minimal-amount', label: '💵 Minimal Amount (₦100)' },
    { value: 'high-fees', label: '💸 High Fees Scenario' },
  ];

  const generatePayload = (scenarioValue, edgeCase = null) => {
    const selectedScenario = scenarios.find(s => s.value === scenarioValue);
    const timestamp = new Date().toISOString();
    const txnId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    let amount = customFields.amount;
    let fees = customFields.fees;
    let vat = customFields.vat;
    let stampDuty = customFields.stampDuty;
    let creditAccountNumber = virtualAccount;
    let narration = customFields.narration;
    let withdrawalReference = withdrawalRef;

    // Apply edge case modifications
    if (edgeCase === 'duplicate') {
      // Use a fixed transaction ID for duplicate testing
      return generatePayload(scenarioValue, null);
    } else if (edgeCase === 'invalid-account') {
      creditAccountNumber = '9999999999'; // Non-existent account
    } else if (edgeCase === 'missing-ref') {
      withdrawalReference = ''; // Missing reference
      narration = 'Withdrawal'; // Generic narration without reference
    } else if (edgeCase === 'large-amount') {
      amount = 10000000; // 10 million kobo = ₦100,000
      fees = 1000;
      vat = 75;
      stampDuty = 50;
    } else if (edgeCase === 'minimal-amount') {
      amount = 100; // ₦1
      fees = 10;
      vat = 1;
      stampDuty = 0;
    } else if (edgeCase === 'high-fees') {
      fees = 500;
      vat = 38;
      stampDuty = 50;
    }

    const netAmount = amount - fees - vat - stampDuty;

    // Build narration based on transfer type
    if (selectedScenario.type === 'Outwards' && withdrawalReference) {
      narration = `Withdrawal - ${withdrawalReference}`;
    } else if (selectedScenario.type === 'Inwards') {
      narration = customFields.narration || 'Wallet Funding';
    }

    return {
      type: "virtualAccount.transfer",
      data: {
        _id: txnId,
        client: "sandbox_client_id",
        account: "1234567890",
        type: selectedScenario.type,
        sessionId: `SESS_${Date.now()}`,
        nameEnquiryReference: `NEQ_${Date.now()}`,
        paymentReference: `PAY_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        mandateReference: null,
        isReversed: selectedScenario.reversed || false,
        reversalReference: selectedScenario.reversed ? `REV_${Date.now()}` : null,
        provider: "SafeHaven",
        providerChannel: "NIP",
        providerChannelCode: "03",
        destinationInstitutionCode: "000",
        creditAccountName: customFields.creditAccountName,
        creditAccountNumber: creditAccountNumber,
        creditBankVerificationNumber: null,
        creditKYCLevel: "3",
        debitAccountName: customFields.debitAccountName,
        debitAccountNumber: customFields.debitAccountNumber,
        debitBankVerificationNumber: null,
        debitKYCLevel: "3",
        transactionLocation: "NG",
        narration: narration,
        amount: amount,
        fees: fees,
        vat: vat,
        stampDuty: stampDuty,
        responseCode: selectedScenario.status === 'Completed' ? "00" : "99",
        responseMessage: selectedScenario.status === 'Completed' ? "Successful" : "Transaction Failed",
        status: selectedScenario.status,
        isDeleted: false,
        createdAt: timestamp,
        updatedAt: timestamp,
        approvedAt: selectedScenario.status === 'Completed' ? timestamp : undefined,
        declinedAt: selectedScenario.status === 'Failed' ? timestamp : undefined,
      }
    };
  };

  const sendWebhook = async (payload) => {
    if (!virtualAccount.trim()) {
      setResponse({
        error: true,
        message: 'Virtual Account Number is required. Please enter a valid account number from your database.'
      });
      return;
    }

    const selectedScenario = scenarios.find(s => s.value === scenario);
    if (selectedScenario.type === 'Outwards' && !withdrawalRef.trim()) {
      setResponse({
        error: true,
        message: 'Withdrawal Reference is required for Outwards transactions. Please enter a valid reference (e.g., WTH_1234567890).'
      });
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      setResponse({
        status: res.status,
        statusText: res.statusText,
        data: data,
        payload: payload,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      setResponse({
        error: true,
        message: error.message,
        payload: payload,
      });
    } finally {
      setLoading(false);
    }
  };

  const copyPayload = (payload) => {
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getExpectedDbChanges = () => {
    const selectedScenario = scenarios.find(s => s.value === scenario);
    const netAmount = customFields.amount - customFields.fees - customFields.vat - customFields.stampDuty;

    if (selectedScenario.type === 'Inwards') {
      return {
        deposit: {
          created: true,
          provider: 'saveHaven',
          amount: netAmount,
          status: selectedScenario.reversed ? 'failed' : (selectedScenario.status === 'Completed' ? 'success' : 'failed'),
        },
        transaction: {
          created: true,
          type: 'wallet_funding',
          direction: 'CREDIT',
          amount: netAmount,
          status: selectedScenario.reversed ? 'reversed' : (selectedScenario.status === 'Completed' ? 'success' : 'failed'),
          balanceBefore: 'current_balance',
          balanceAfter: selectedScenario.status === 'Completed' && !selectedScenario.reversed ? 'current_balance + amount' : 'current_balance',
        },
        wallet: {
          updated: selectedScenario.status === 'Completed' && !selectedScenario.reversed,
          balanceChange: selectedScenario.status === 'Completed' && !selectedScenario.reversed ? `+₦${(netAmount / 100).toFixed(2)}` : '₦0.00',
        },
        notification: {
          sent: true,
          type: selectedScenario.reversed ? 'payment_reversed' : (selectedScenario.status === 'Completed' ? 'payment_success' : 'payment_failed'),
        }
      };
    } else {
      // Outwards (Withdrawal)
      return {
        transaction: {
          found: withdrawalRef ? true : false,
          updated: true,
          status: selectedScenario.reversed ? 'reversed' : (selectedScenario.status === 'Completed' ? 'success' : 'failed'),
        },
        wallet: {
          updated: selectedScenario.status === 'Failed' || selectedScenario.reversed,
          balanceChange: selectedScenario.status === 'Failed' || selectedScenario.reversed ? `+₦${(customFields.amount / 100).toFixed(2)} (refunded)` : '₦0.00',
        },
        notification: {
          sent: true,
          type: selectedScenario.status === 'Completed' && !selectedScenario.reversed ? 'withdrawal_completed' : (selectedScenario.reversed ? 'withdrawal_reversed' : 'withdrawal_failed'),
        }
      };
    }
  };

  const currentPayload = generatePayload(scenario);
  const expectedChanges = getExpectedDbChanges();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">SaveHaven Webhook Tester</h1>
              <p className="text-purple-200">Test all webhook scenarios with full customization</p>
            </div>
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Send className="w-8 h-8 text-purple-300" />
            </div>
          </div>

          {/* Configuration Section */}
          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* Webhook URL */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Webhook Endpoint URL *
              </label>
              <input
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="http://localhost:3000/api/webhooks/savehaven"
              />
            </div>

            {/* Required Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Virtual Account Number * <span className="text-red-400">(Required)</span>
                </label>
                <input
                  type="text"
                  value={virtualAccount}
                  onChange={(e) => setVirtualAccount(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 9012345678"
                />
                <p className="text-xs text-purple-300 mt-1">Use an account number from your database</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Withdrawal Reference * <span className="text-yellow-400">(Required for Outwards)</span>
                </label>
                <input
                  type="text"
                  value={withdrawalRef}
                  onChange={(e) => setWithdrawalRef(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., WTH_1234567890"
                />
                <p className="text-xs text-purple-300 mt-1">Existing transaction reference for withdrawal tests</p>
              </div>
            </div>

            {/* Scenario Selection */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Test Scenario
              </label>
              <select
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {scenarios.map(s => (
                  <option key={s.value} value={s.value} className="bg-slate-800">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Customization Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setCustomizing(!customizing)}
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${customizing ? 'rotate-180' : ''} transition-transform`} />
              {customizing ? 'Hide' : 'Show'} Advanced Customization
            </button>
          </div>

          {/* Advanced Customization */}
          {customizing && (
            <div className="bg-white/5 rounded-lg p-6 mb-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Customize Fields</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-purple-200 mb-1">Amount (kobo)</label>
                  <input
                    type="number"
                    value={customFields.amount}
                    onChange={(e) => setCustomFields({...customFields, amount: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                  <p className="text-xs text-purple-300 mt-1">₦{(customFields.amount / 100).toFixed(2)}</p>
                </div>
                <div>
                  <label className="block text-sm text-purple-200 mb-1">Fees (kobo)</label>
                  <input
                    type="number"
                    value={customFields.fees}
                    onChange={(e) => setCustomFields({...customFields, fees: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-purple-200 mb-1">VAT (kobo)</label>
                  <input
                    type="number"
                    value={customFields.vat}
                    onChange={(e) => setCustomFields({...customFields, vat: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-purple-200 mb-1">Stamp Duty (kobo)</label>
                  <input
                    type="number"
                    value={customFields.stampDuty}
                    onChange={(e) => setCustomFields({...customFields, stampDuty: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-purple-200 mb-1">Debit Account Name</label>
                  <input
                    type="text"
                    value={customFields.debitAccountName}
                    onChange={(e) => setCustomFields({...customFields, debitAccountName: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-purple-200 mb-1">Credit Account Name</label>
                  <input
                    type="text"
                    value={customFields.creditAccountName}
                    onChange={(e) => setCustomFields({...customFields, creditAccountName: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-purple-200 mb-1">Debit Account Number</label>
                  <input
                    type="text"
                    value={customFields.debitAccountNumber}
                    onChange={(e) => setCustomFields({...customFields, debitAccountNumber: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-purple-200 mb-1">Narration (Inwards only)</label>
                  <input
                    type="text"
                    value={customFields.narration}
                    onChange={(e) => setCustomFields({...customFields, narration: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white"
                  />
                </div>
              </div>
              
              {/* Net Amount Display */}
              <div className="mt-4 p-4 bg-purple-500/20 rounded-lg">
                <p className="text-sm text-purple-200">
                  <strong>Net Amount:</strong> ₦{((customFields.amount - customFields.fees - customFields.vat - customFields.stampDuty) / 100).toFixed(2)}
                  <span className="text-xs ml-2">(Amount - Fees - VAT - Stamp Duty)</span>
                </p>
              </div>
            </div>
          )}

          {/* Edge Cases Quick Actions */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-purple-200 mb-3">Quick Edge Case Tests</h3>
            <div className="flex flex-wrap gap-2">
              {edgeCases.map(edge => (
                <button
                  key={edge.value}
                  onClick={() => sendWebhook(generatePayload(scenario, edge.value))}
                  disabled={loading || !virtualAccount.trim()}
                  className="px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50 text-orange-200 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {edge.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => sendWebhook(currentPayload)}
              disabled={loading || !virtualAccount.trim()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Webhook
                </>
              )}
            </button>
            <button
              onClick={() => copyPayload(currentPayload)}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy Payload'}
            </button>
          </div>
        </div>

        {/* Expected Database Changes */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Expected Database Changes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(expectedChanges).map(([model, changes]) => (
              <div key={model} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-semibold text-purple-300 capitalize mb-2">{model}</h3>
                <div className="space-y-1">
                  {Object.entries(changes).map(([key, value]) => (
                    <p key={key} className="text-sm text-white">
                      <span className="text-purple-200">{key}:</span>{' '}
                      <span className={typeof value === 'boolean' ? (value ? 'text-green-400' : 'text-red-400') : 'text-white'}>
                        {typeof value === 'boolean' ? (value ? '✓' : '✗') : value}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payload Preview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Payload Preview</h2>
          <pre className="bg-slate-900/50 p-4 rounded-lg overflow-x-auto text-sm text-green-300 border border-white/10">
            {JSON.stringify(currentPayload, null, 2)}
          </pre>
        </div>

        {/* Response Section */}
        {response && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
            <div className="flex items-center gap-2 mb-4">
              {response.error ? (
                <AlertCircle className="w-6 h-6 text-red-400" />
              ) : (
                <Check className="w-6 h-6 text-green-400" />
              )}
              <h2 className="text-xl font-bold text-white">
                {response.error ? 'Error' : 'Response'}
              </h2>
              {!response.error && (
                <span className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${
                  response.status === 200 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {response.status} {response.statusText}
                </span>
              )}
            </div>
            
            {response.error ? (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300">{response.message}</p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-sm text-purple-200 mb-2">Timestamp: {response.timestamp}</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-green-300">
                    {JSON.stringify(response.data, null, 2)}
                  </pre>
                </div>
              </>
            )}
          </div>
        )}

        {/* Documentation */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 mt-6">
          <h2 className="text-xl font-bold text-white mb-4">Testing Guide</h2>
          <div className="space-y-4 text-purple-200">
            <div>
              <h3 className="font-semibold text-white mb-2">📋 Before Testing:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Enter a valid Virtual Account Number from your database</li>
                <li>For Outwards tests, enter an existing Withdrawal Reference (e.g., WTH_1234567890)</li>
                <li>Ensure your webhook endpoint is accessible</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">🎯 Transaction Types:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>wallet_funding:</strong> Inwards transfers (deposits)</li>
                <li><strong>bank_transfer:</strong> Outwards transfers (bank withdrawals)</li>
                <li><strong>withdrawal:</strong> Wallet-to-wallet transfers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">✅ What to Verify:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Deposit record created with correct status</li>
                <li>Transaction record created with balanceBefore/balanceAfter</li>
                <li>Wallet balance updated correctly (only for successful Inwards)</li>
                <li>NO Payment or Ledger records created</li>
                <li>Notifications sent to user</li>
                <li>Idempotency: Duplicate webhooks don't double-process</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">⚠️ Edge Cases:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Duplicate:</strong> Same providerTransactionId sent twice</li>
                <li><strong>Invalid Account:</strong> Non-existent virtual account number</li>
                <li><strong>Missing Reference:</strong> Outwards without withdrawal reference</li>
                <li><strong>Large/Minimal Amounts:</strong> Test fee calculations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveHavenWebhookTester;