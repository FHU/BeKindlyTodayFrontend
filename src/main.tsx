import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

const inDev = import.meta.env.VITE_ENVIRONMENT;

if (inDev !== 'dev') {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <KindeProvider
        clientId={import.meta.env.VITE_KINDE_FRONTEND_CLIENT_ID}
        domain={import.meta.env.VITE_KINDE_DOMAIN}
        logoutUri={import.meta.env.VITE_KINDE_LOGOUT_URL}
        redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URL}
      >
        <App />
      </KindeProvider>
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
