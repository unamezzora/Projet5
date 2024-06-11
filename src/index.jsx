import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Banner from './components/Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


