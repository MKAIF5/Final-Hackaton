import React, { useState } from 'react';

const LoanConfirmationPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {showPopup && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Loan Application Confirmed!</h2>
          <p>Your loan application has been successfully submitted.</p>
          <p>Our team will review your application and get back to you shortly.</p>
          <button
            onClick={handleClosePopup}
            className="bg-green-600 text-white p-3 mt-4 w-full rounded-lg hover:bg-green-500 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default LoanConfirmationPage;