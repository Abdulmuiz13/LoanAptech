import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // <-- This import is crucial
import App from './App.jsx'; // (or whatever your extension is)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);