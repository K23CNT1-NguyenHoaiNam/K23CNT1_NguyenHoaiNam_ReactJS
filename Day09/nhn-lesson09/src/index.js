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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
