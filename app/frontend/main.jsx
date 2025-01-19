import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header'

import './components/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>
);
