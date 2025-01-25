import React, { useState } from 'react';
import Header from '../components/Header';
import LoanCalculator from '../components/LoanCalculator';

const LandingPage = () => {
  const [category, setCategory] = useState('');
  const categories = [
    { name: 'Wedding Loans', subCategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'], maxLoan: 500000, loanPeriod: 3 },
    { name: 'Home Construction Loans', subCategories: ['Structure', 'Finishing', 'Loan'], maxLoan: 1000000, loanPeriod: 5 },
    { name: 'Business Startup Loans', subCategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'], maxLoan: 1000000, loanPeriod: 5 },
    { name: 'Education Loans', subCategories: ['University Fees', 'Child Fees Loan'], maxLoan: 'Based on requirement', loanPeriod: 4 },
  ];

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to Saylani Microfinance</h1>
        <div className="mt-6 text-center">
          <h2 className="text-xl">Loan Categories</h2>
          <div className="space-x-4 my-5">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setCategory(category.name)}
                className="bg-orange-500 text-white px-4 py-2 rounded-full cursor-pointer"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          {category && <LoanCalculator category={category} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
