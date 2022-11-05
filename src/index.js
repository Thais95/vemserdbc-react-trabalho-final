import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //comentado para não rendenizar duas vezes
  // <React.StrictMode>
    <AppRoutes />
  // </React.StrictMode>
);