import DOMPurify from 'dompurify';

/**
 * Security utilities for ethical hacking best practices
 */

// Input sanitization utility
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') {
    return input;
  }
  
  // Remove potentially dangerous characters and scripts
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: []
  });
};

// HTML sanitization for safe rendering
export const sanitizeHTML = (html) => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    ALLOW_DATA_ATTR: false
  });
};

// XSS protection utility
export const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// Validate URL to prevent open redirect vulnerabilities
export const validateURL = (url) => {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Safe external link handler
export const createSafeExternalLink = (url, text) => {
  if (!validateURL(url)) {
    return text; // Return just text if URL is invalid
  }
  
  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer nofollow'
  };
};

// Content Security Policy helper
export const getCSPNonce = () => {
  // Generate a random nonce for inline styles/scripts if needed
  return btoa(Math.random().toString()).substring(0, 16);
};

// Security headers validation
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
};

export default {
  sanitizeInput,
  sanitizeHTML,
  escapeHtml,
  validateURL,
  createSafeExternalLink,
  getCSPNonce,
  securityHeaders
};