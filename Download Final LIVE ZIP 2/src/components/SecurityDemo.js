import React, { useState } from 'react';
import { sanitizeInput, sanitizeHTML, escapeHtml, validateURL } from '../utils/security';

const SecurityDemo = () => {
  const [userInput, setUserInput] = useState('');
  const [sanitizedOutput, setSanitizedOutput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [urlValidation, setUrlValidation] = useState(null);

  const handleInputTest = (input) => {
    setUserInput(input);
    setSanitizedOutput(sanitizeInput(input));
  };

  const handleUrlTest = (url) => {
    setUrlInput(url);
    setUrlValidation(validateURL(url));
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🔒 Security Demonstration - Ethical Hacking Best Practices
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* XSS Protection Demo */}
        <div className="bg-white p-4 rounded border">
          <h3 className="text-lg font-semibold text-red-600 mb-3">
            🛡️ XSS Protection Test
          </h3>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter potentially dangerous input:
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded text-sm"
              rows="3"
              placeholder="Try: <script>alert('XSS')</script>"
              value={userInput}
              onChange={(e) => handleInputTest(e.target.value)}
            />
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <p className="text-sm font-medium text-green-800 mb-1">Sanitized Output:</p>
            <code className="text-xs text-green-700 break-all">{sanitizedOutput || 'No input yet'}</code>
          </div>
        </div>

        {/* URL Validation Demo */}
        <div className="bg-white p-4 rounded border">
          <h3 className="text-lg font-semibold text-blue-600 mb-3">
            🔗 URL Validation Test
          </h3>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter URL to validate:
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded text-sm"
              placeholder="Try: javascript:alert('malicious')"
              value={urlInput}
              onChange={(e) => handleUrlTest(e.target.value)}
            />
          </div>
          <div className={`p-3 rounded border ${urlValidation === null ? 'bg-gray-50 border-gray-200' : 
            urlValidation ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <p className="text-sm font-medium">
              Validation Result: {
                urlValidation === null ? 'No URL entered' :
                urlValidation ? '✅ Valid URL' : '❌ Invalid/Dangerous URL'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Security Features List */}
      <div className="mt-6 bg-white p-4 rounded border">
        <h3 className="text-lg font-semibold text-indigo-600 mb-3">
          🔐 Implemented Security Features
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Content Security Policy (CSP)
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              XSS Protection Headers
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Input Sanitization
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              HTML Purification
            </li>
          </ul>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              URL Validation
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Frame Protection
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              MIME Type Sniffing Protection
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Secure External Links
            </li>
          </ul>
        </div>
      </div>

      {/* Ethical Hacking Tips */}
      <div className="mt-6 bg-yellow-50 p-4 rounded border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
          ⚡ Ethical Hacking Best Practices
        </h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Always sanitize user inputs to prevent XSS attacks</li>
          <li>• Implement proper authentication and authorization</li>
          <li>• Use HTTPS in production environments</li>
          <li>• Regularly audit dependencies for vulnerabilities</li>
          <li>• Validate and escape all dynamic content</li>
          <li>• Implement proper error handling without exposing sensitive information</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityDemo;