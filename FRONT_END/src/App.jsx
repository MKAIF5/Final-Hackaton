import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import LoanApplicationPage from './components/LoanApplicationPage';
import LoanConfirmationPage from './components/LoanConfirmationPage';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/loan-application" element={<LoanApplicationPage />} />
        <Route path="/loan-confirmation" element={<LoanConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
