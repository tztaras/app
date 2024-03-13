import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Header from './Header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Header/>
  </React.StrictMode>
);

