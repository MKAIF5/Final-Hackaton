import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleApplyForLoan = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Check if user is logged in
    if (!user) {
      navigate('/signup'); // If not logged in, redirect to Sign Up
    } else {
      navigate('/loan-application'); // If logged in, redirect to loan application page
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Saylani Microfinance</h1>
      <p className="text-lg text-center mb-4">Apply for a loan under various categories.</p>
      <button
        onClick={handleApplyForLoan}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition"
      >
        Apply for Loan
      </button>
    </div>
  );
};

export default LandingPage;