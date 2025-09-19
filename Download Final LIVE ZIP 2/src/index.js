import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Security: Use createRoot instead of deprecated ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);