import React, { useState } from 'react';

const LoanCalculator = ({ category }) => {
  const [deposit, setDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [loanBreakdown, setLoanBreakdown] = useState(null);

  const calculateLoan = () => {
    const maxLoan = category === 'Wedding Loans' ? 500000 :
                    category === 'Home Construction Loans' ? 1000000 :
                    category === 'Business Startup Loans' ? 1000000 :
                    category === 'Education Loans' ? 1000000 : 0;

    const loanAmount = maxLoan - deposit;
    const monthlyInstallment = loanAmount / (loanPeriod * 12);
    setLoanBreakdown({ loanAmount, monthlyInstallment });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-xl font-bold">Calculate Your Loan</h3>
      <div className="mt-4">
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="Initial Deposit"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
          placeholder="Loan Period (in years)"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button
        onClick={calculateLoan}
        className="mt-4 bg-blue-600 text-white p-2 rounded cursor-pointer"
      >
        Calculate Loan
      </button>

      {loanBreakdown && (
        <div className="mt-6">
          <h4 className="font-semibold">Loan Breakdown:</h4>
          <p>Loan Amount: PKR {loanBreakdown.loanAmount}</p>
          <p>Monthly Installment: PKR {loanBreakdown.monthlyInstallment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;