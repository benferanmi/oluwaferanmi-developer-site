import  { useState } from 'react';
import { AlertCircle, CreditCard, Loader2, CheckCircle, XCircle } from 'lucide-react';

const FlutterwaveCardTester = () => {
  const [amount, setAmount] = useState('1000');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Your authentication token - replace with actual token
  const [authToken, setAuthToken] = useState('');
  const BASE_URL = 'http://localhost:5000/api/v1';

  const handleFundWallet = async () => {
    if (!authToken) {
      setError('Please provide authentication token');
      return;
    }

    if (!amount || parseFloat(amount) < 100) {
      setError('Minimum amount is ₦100');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${BASE_URL}/wallet/fund`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          method: 'card',
          provider: 'flutterwave',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Payment initialization failed');
      }

      setResult(data.data);

      // Open payment URL in new window
      if (data.data?.paymentDetails?.paymentUrl) {
        window.open(data.data.paymentDetails.paymentUrl, '_blank');
      }

    } catch (err) {
      setError(err.message || 'An error occurred');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  const testCards = [
    {
      number: '5531 8866 5214 2950',
      cvv: '564',
      expiry: '09/32',
      pin: '3310',
      type: 'Mastercard (Successful)',
    },
    {
      number: '4187 4274 1556 4246',
      cvv: '828',
      expiry: '09/32',
      pin: '3310',
      type: 'Visa (Successful)',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Flutterwave Card Payment Tester
            </h1>
          </div>
          <p className="text-gray-600">
            Test card payments in Flutterwave sandbox environment
          </p>
        </div>

        {/* Test Cards Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-3">Test Card Details</h3>
          {testCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded p-3 mb-2 text-sm">
              <div className="font-medium text-gray-700 mb-1">{card.type}</div>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <div>Card: <span className="font-mono">{card.number}</span></div>
                <div>CVV: <span className="font-mono">{card.cvv}</span></div>
                <div>Expiry: <span className="font-mono">{card.expiry}</span></div>
                <div>PIN: <span className="font-mono">{card.pin}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Initialize Payment
          </h2>

          <div className="space-y-4">
            {/* Auth Token */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Authentication Token *
              </label>
              <textarea
                value={authToken}
                onChange={(e) => setAuthToken(e.target.value)}
                placeholder="Paste your Bearer token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm resize-none"
              />
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-gray-500">
                  Login to your app to get your JWT token
                </p>
                {authToken && (
                  <button
                    onClick={() => setAuthToken('')}
                    className="text-xs text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (NGN)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="100"
                step="100"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum amount: ₦100
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleFundWallet}
              disabled={loading || !authToken}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Initialize Card Payment
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Success Result */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-900 text-lg">
                  Payment Initialized Successfully
                </h3>
                <p className="text-green-700 text-sm">
                  A payment window should have opened. Complete the payment with test card details above.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase">Reference</div>
                  <div className="font-mono text-sm font-semibold text-gray-900">
                    {result.reference}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Provider</div>
                  <div className="font-semibold text-gray-900">
                    {result.provider}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase">Amount</div>
                  <div className="font-semibold text-gray-900">
                    ₦{result.amount?.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Service Charge</div>
                  <div className="font-semibold text-gray-900">
                    ₦{result.serviceCharge?.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500 uppercase">Amount You'll Receive</div>
                <div className="text-lg font-bold text-green-600">
                  ₦{result.amountYouWillReceive?.toLocaleString()}
                </div>
              </div>

              {result.paymentDetails?.paymentUrl && (
                <a
                  href={result.paymentDetails.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Open Payment Page
                </a>
              )}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-900">
              <p className="font-semibold mb-2">Testing Instructions:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Make sure you're logged in and have a valid auth token</li>
                <li>Enter an amount (minimum ₦100)</li>
                <li>Click "Initialize Card Payment"</li>
                <li>A Flutterwave payment page will open in a new window</li>
                <li>Use the test card details provided above</li>
                <li>The webhook should be triggered after successful payment</li>
                <li>Check your server logs for webhook events</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterwaveCardTester;