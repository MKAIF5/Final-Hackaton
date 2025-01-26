import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      navigate('/loan-application'); // After successful login, redirect to loan application page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;