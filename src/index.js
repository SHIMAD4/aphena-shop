import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './Components/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Home />
    <Footer />
  </React.StrictMode>
);