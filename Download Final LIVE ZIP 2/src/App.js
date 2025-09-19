import React from 'react';
import SecurityDemo from './components/SecurityDemo';
import { sanitizeHTML } from './utils/security';

export default function App() {
  const welcomeMessage = 'जय शिवराय! Welcome to Shivtej Pratishthaan';
  const secureMessage = sanitizeHTML(welcomeMessage);
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with original welcome message */}
      <div className='text-center p-10 text-3xl text-orange-600 font-bold bg-white shadow-sm'>
        {secureMessage}
      </div>
      
      {/* Security subtitle */}
      <div className="text-center py-4">
        <h1 className="text-xl text-gray-700 font-semibold">
          🔐 Ethical Hacking & Web Security Implementation
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto px-4">
          This application demonstrates security best practices and ethical hacking techniques 
          to protect against common web vulnerabilities like XSS, CSRF, and injection attacks.
        </p>
      </div>
      
      {/* Security Demo Component */}
      <div className="container mx-auto px-4 pb-10">
        <SecurityDemo />
      </div>
    </div>
  );
}