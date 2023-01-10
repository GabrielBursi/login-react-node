import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ValidateContextProvider from './context/ValidateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ValidateContextProvider>
      <App />
    </ValidateContextProvider>
  </React.StrictMode>
);
