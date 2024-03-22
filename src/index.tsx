import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ModalProvider from './components/context/ModalContext';
import SidebarProvider from './components/context/SidebarContext';
import SelectPublicProvider from './components/context/SelecPublicContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <SidebarProvider>
        <SelectPublicProvider>
          <App />
        </SelectPublicProvider>
      </SidebarProvider>
    </ModalProvider>
  </React.StrictMode>
);

reportWebVitals();