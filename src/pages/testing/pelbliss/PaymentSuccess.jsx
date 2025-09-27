// PaymentSuccess.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const reference = searchParams.get('reference');

    useEffect(() => {
        if (reference) {
            // Verify payment on your backend
            verifyPayment(reference);
        }
    }, [reference]);

    const verifyPayment = async (ref) => {
        try {
            const response = await fetch(`http://localhost:5000/api/subscription/verify/${ref}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.ok) {
                // Payment verified successfully
                Navigate("/")
                // Redirect to dashboard or show success message
            }
        } catch (error) {
            console.error('Payment verification failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                <p>Your subscription has been upgraded successfully.</p>
            </div>
        </div>
    );
};

export default PaymentSuccess;