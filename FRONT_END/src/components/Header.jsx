import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-500 p-4 text-white">
      <nav className="flex justify-between items-center">
        <Link
        to="/"
        className="text-2xl font-bold">Saylani Microfinance</Link>
        <div className='bg-orange-400 p-3 rounded-3xl w-24 text-center'>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
