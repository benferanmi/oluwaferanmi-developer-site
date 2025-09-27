import { useState } from 'react';
import { CreditCard, Shield, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const SubscriptionUpgrade = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [selectedPlan] = useState('689518ec6dc50b29ea1a4eb9');

    const baseUrl = 'http://localhost:5000/api';


    const handleUpgrade = async () => {
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Get the Bearer token from localStorage or wherever you store it
            const token = localStorage.getItem('authToken'); // Adjust this based on your auth storage

            if (!token) {
                setError('Authentication token not found. Please login again.');
                setLoading(false);
                return;
            }

            const response = await fetch(`${baseUrl}/subscription/upgrade`, {
                method: 'POST',
                mode: 'cors', // Explicitly set CORS mode
                credentials: 'include', // Include credentials if needed
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    planId: selectedPlan,
                    billingCycle: billingCycle,
                    // Add callback URL for successful payments
                })
            });

            if (!response.ok) {
                if (response.status === 0) {
                    throw new Error('CORS error: Backend server may not be configured to accept requests from this origin');
                }
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP ${response.status}: Failed to initiate upgrade`);
            }

            const data = await response.json();

            // Handle different response formats from your backend
            const authUrl = data.authorizationUrl || data.authorization_url || data.data?.authorizationUrl || data.data?.authorization_url;

            if (authUrl) {
                // Store the reference for later use
                if (data.data?.reference) {
                    localStorage.setItem('paymentReference', data.data.reference);
                }

                // Redirect to Paystack checkout
                window.location.href = authUrl;
            } else {
                setSuccess('Upgrade initiated successfully!');
            }

        } catch (err) {
            console.error('Upgrade error:', err);

            // Handle specific CORS error
            if (err.message.includes('CORS') || err.message.includes('Failed to fetch')) {
                setError('CORS Error: Your backend needs to be configured to accept requests from this origin');
            } else {
                setError(err.message || 'An error occurred during upgrade');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white text-center">
                    <CreditCard className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h1 className="text-2xl font-bold mb-2">Upgrade Your Plan</h1>
                    <p className="text-blue-100">Unlock premium features and enhanced capabilities</p>
                </div>

                {/* Content */}
                <div className="px-6 py-8">
                    {/* Billing Cycle Selection */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Billing Cycle:</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`p-4 border-2 rounded-lg text-center transition-all ${billingCycle === 'monthly'
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="font-semibold">Monthly</div>
                                <div className="text-sm text-gray-500">₦5,000/month</div>
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`p-4 border-2 rounded-lg text-center transition-all ${billingCycle === 'yearly'
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="font-semibold">Yearly</div>
                                <div className="text-sm text-gray-500">₦50,000/year</div>
                                <div className="text-xs text-green-600 font-medium">Save 17%</div>
                            </button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">What you&aps;ll get:</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span>Unlimited access to premium features</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span>Priority customer support</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span>Advanced analytics and insights</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span>No ads and enhanced performance</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Messages */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                            <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="text-red-700 text-sm">{error}</span>
                        </div>
                    )}

                    {success && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-green-700 text-sm">{success}</span>
                        </div>
                    )}

                    {/* Upgrade Button */}
                    <button
                        onClick={handleUpgrade}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <>
                                <Shield className="w-5 h-5" />
                                <span>Upgrade Now with Paystack</span>
                            </>
                        )}
                    </button>

                    {/* Debug Info */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                        <p><strong>Debug Info:</strong></p>
                        <p>API Endpoint: {baseUrl}/subscription/upgrade</p>
                        <p>Plan ID: {selectedPlan}</p>
                        <p>Billing Cycle: {billingCycle}</p>
                        <p>Auth Token: {localStorage.getItem('authToken') ? 'Present' : 'Missing'}</p>
                        <p>Payment Reference: {localStorage.getItem('paymentReference') || 'None'}</p>
                    </div>

                    {/* Security Note */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500 flex items-center justify-center">
                            <Shield className="w-4 h-4 mr-1" />
                            Secured by Paystack encryption
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionUpgrade;