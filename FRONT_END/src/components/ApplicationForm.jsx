import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const ApplicationForm = () => {
  const [loanCategory, setLoanCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (loanCategory && subCategory && deposit && loanPeriod) {
      setApplicationSubmitted(true);
      alert('Loan application submitted successfully!');
    } else {
      alert('Please fill out all the fields correctly.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-blue-600 mb-6">Loan Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Loan Category</label>
          <select
            value={loanCategory}
            onChange={(e) => setLoanCategory(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Category</option>
            <option value="Wedding Loans">Wedding Loans</option>
            <option value="Home Construction Loans">Home Construction Loans</option>
            <option value="Business Startup Loans">Business Startup Loans</option>
            <option value="Education Loans">Education Loans</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Sub Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Sub Category</option>
            {loanCategory === 'Wedding Loans' && (
              <>
                <option value="Valima">Valima</option>
                <option value="Furniture">Furniture</option>
                <option value="Valima Food">Valima Food</option>
                <option value="Jahez">Jahez</option>
              </>
            )}
            {loanCategory === 'Home Construction Loans' && (
              <>
                <option value="Structure">Structure</option>
                <option value="Finishing">Finishing</option>
                <option value="Loan">Loan</option>
              </>
            )}
            {loanCategory === 'Business Startup Loans' && (
              <>
                <option value="Buy Stall">Buy Stall</option>
                <option value="Advance Rent for Shop">Advance Rent for Shop</option>
                <option value="Shop Assets">Shop Assets</option>
                <option value="Shop Machinery">Shop Machinery</option>
              </>
            )}
            {loanCategory === 'Education Loans' && (
              <>
                <option value="University Fees">University Fees</option>
                <option value="Child Fees Loan">Child Fees Loan</option>
              </>
            )}
          </select>
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Initial Deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <select
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Loan Period</option>
            <option value="3 years">3 Years</option>
            <option value="4 years">4 Years</option>
            <option value="5 years">5 Years</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-500 transition"
        >
          Submit Application
        </button>
      </form>

      {applicationSubmitted && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Loan Application Details</h2>
          <QRCode value={`Loan Application - ${loanCategory} - ${subCategory}`} size={256} />
          <p className="mt-4 text-lg">Your application is being processed. Please take a screenshot of the QR code.</p>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;