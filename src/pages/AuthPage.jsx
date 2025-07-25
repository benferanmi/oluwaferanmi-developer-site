import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Chrome, Store, Users } from 'lucide-react';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('user'); // 'user' or 'vendor'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  // Handle URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const path = window.location.pathname;
    const fullUrl = window.location.href;

    console.log('Full URL:', fullUrl);
    console.log('Current path:', path);
    console.log('URL params:', urlParams.toString());

    // Handle OAuth success callback with code
    if (path === '/auth/success') {
      const code = urlParams.get('code');
      if (code) {
        console.log('OAuth success with code:', code);
        handleCodeCallback(code);
      } else {
        console.error('No code found in success callback');
        alert('Authentication failed: No authorization code received');
      }
    } else if (path.includes('/auth/error') || urlParams.get('error')) {
      console.log('Error detected in URL');
      const error = urlParams.get('error') || 'Authentication failed';
      alert(`Google authentication failed: ${error}`);
    }
  }, []);

  // Handle code exchange from OAuth callback
  const handleCodeCallback = async (code) => {
    try {
      setLoading(true);
      console.log('Processing OAuth code:', code);

      // Exchange the code for user data
      const response = await fetch('http://localhost:5000/api/auth/google/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      const data = await response.json();
      
      // Log the complete response
      console.log('Complete OAuth Response:', data);
      console.log('Response Success:', data.success);
      console.log('Response Message:', data.message);
      console.log('User Data:', data.user);
      console.log('Tokens:', data.tokens);

      if (data.success) {
        // Extract user information from response
        const userData = {
          ...data.user,
          provider: 'google',
          tokens: data.tokens
        };

        console.log('OAuth authentication successful!', userData);
        setUser(userData);
        
        // Store tokens in memory (removed localStorage as per instructions)
        console.log('User data and tokens stored in memory');
        
        // Clean up URL
        window.history.replaceState({}, document.title, '/');
      } else {
        console.error('OAuth failed:', data.message);
        alert(`Authentication failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Code exchange error:', error);
      alert(`Authentication failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign In for User
  const handleGoogleUserSignIn = () => {
    setLoading(true);
    console.log('Redirecting to Google User OAuth...');
    window.location.href = 'http://localhost:5000/api/auth/google/user';
  };

  // Handle Google Sign In for Vendor
  const handleGoogleVendorSignIn = () => {
    setLoading(true);
    console.log('Redirecting to Google Vendor OAuth...');
    window.location.href = 'http://localhost:5000/api/auth/google/vendor';
  };

  // Handle regular form submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const baseEndpoint = isSignUp ? 'signup' : 'signin';
      const endpoint = `http://localhost:5000/api/auth/${userType}/${baseEndpoint}`;
      
      console.log(`Submitting ${userType} ${baseEndpoint} to:`, endpoint);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, userType })
      });

      const data = await response.json();

      if (data.success) {
        setUser({ ...data.user, userType });
        console.log('Authentication successful:', data.user);
      } else {
        alert(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Auth error:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setFormData({ email: '', password: '', name: '' });
  };

  // If user is authenticated, show dashboard
  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
            user.userType === 'vendor' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-600'
          }`}>
            {user.userType === 'vendor' ? (
              <Store className="w-10 h-10 text-white" />
            ) : (
              <User className="w-10 h-10 text-white" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome {user.userType === 'vendor' ? 'Vendor' : 'User'}!
          </h2>
          <p className="text-gray-600 mb-6">You have successfully signed in</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">Account Details:</h3>
            <p className="text-sm text-gray-600"><strong>Name:</strong> {user.name}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-sm text-gray-600"><strong>Type:</strong> {user.userType}</p>
            {user.provider && (
              <p className="text-sm text-gray-600"><strong>Provider:</strong> {user.provider}</p>
            )}
            {user.id && (
              <p className="text-sm text-gray-600"><strong>ID:</strong> {user.id}</p>
            )}
          </div>

          {/* Debug info - you can remove this later */}
          {user.tokens && (
            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-blue-800 mb-2">Debug Info:</h3>
              <p className="text-xs text-blue-600">Check console for full response data</p>
              <p className="text-xs text-blue-600">Access Token: {user.tokens.accessToken ? 'Present' : 'Missing'}</p>
              <p className="text-xs text-blue-600">Refresh Token: {user.tokens.refreshToken ? 'Present' : 'Missing'}</p>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className={`p-8 text-center text-white ${
          userType === 'vendor' 
            ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
            : 'bg-gradient-to-r from-blue-500 to-indigo-600'
        }`}>
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
            {userType === 'vendor' ? (
              <Store className="w-8 h-8" />
            ) : (
              <User className="w-8 h-8" />
            )}
          </div>
          <h1 className="text-2xl font-bold mb-2">
            {isSignUp ? `Create ${userType === 'vendor' ? 'Vendor' : 'User'} Account` : 'Welcome Back'}
          </h1>
          <p className="text-blue-100">
            {isSignUp 
              ? `Sign up as a ${userType}` 
              : `Sign in to your ${userType} account`
            }
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          {/* User Type Toggle */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setUserType('user')}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition duration-200 ${
                userType === 'user'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              User
            </button>
            <button
              type="button"
              onClick={() => setUserType('vendor')}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition duration-200 ${
                userType === 'vendor'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Store className="w-4 h-4 mr-2" />
              Vendor
            </button>
          </div>

          <div className="space-y-6">
            {/* Name field (only for signup) */}
            {isSignUp && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            )}

            {/* Email field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full font-semibold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                userType === 'vendor'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Please wait...
                </div>
              ) : (
                isSignUp ? `Create ${userType === 'vendor' ? 'Vendor' : 'User'} Account` : 'Sign In'
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign In Buttons */}
          <div className="space-y-3">
            <button
              onClick={userType === 'user' ? handleGoogleUserSignIn : handleGoogleVendorSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Chrome className="w-5 h-5 mr-3 text-gray-700" />
              <span className="text-gray-700 font-medium">
                Continue with Google as {userType === 'vendor' ? 'Vendor' : 'User'}
              </span>
            </button>
          </div>

          {/* Toggle Sign In/Up */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setFormData({ email: '', password: '', name: '' });
                }}
                className={`ml-2 font-semibold ${
                  userType === 'vendor' ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;