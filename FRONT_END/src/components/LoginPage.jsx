import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login (use real API calls for authentication)
    if (email === 'test@example.com' && password === 'password') {
      navigate('/');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">Login to Your Account</h1>
        <div className="mt-8 max-w-sm mx-auto">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;