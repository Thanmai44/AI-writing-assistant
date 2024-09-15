import React from 'react';
import ReactDOM from 'react-dom/client';
import ai from './images/ai.png';

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm10u9jrd04qr711xmkgf389t"
      config={{
        loginMethods: ['email', 'passkey','google','github','linkedin'],
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
          logo: ai,
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);
