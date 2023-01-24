import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/authContext';
import { DarkModeContextProvider } from './context/darkModeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
