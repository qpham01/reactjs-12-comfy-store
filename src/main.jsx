import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store.js';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position='top-center' />
    </Provider>
  </StrictMode>
);
