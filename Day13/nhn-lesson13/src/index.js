import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NhnApp from './NhnApp';
import reportWebVitals from './reportWebVitals';

const nhnroot = ReactDOM.createRoot(document.getElementById('nhnroot'));
nhnroot.render(
  <React.StrictMode>
    <NhnApp />
  </React.StrictMode>
);
reportWebVitals();
