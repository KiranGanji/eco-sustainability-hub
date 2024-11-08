import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { GreenModeProvider } from './context/GreenModeContext';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <GreenModeProvider>
        <App />
      </GreenModeProvider>
    </HelmetProvider>
  </StrictMode>
);