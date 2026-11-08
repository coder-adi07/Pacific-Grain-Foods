import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Capabilities from './pages/Capabilities';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routes matching original site paths */}
            <Route path="/AboutUs" element={<Navigate to="/about" replace />} />
            <Route path="/AboutUs/WhatWeDo" element={<Navigate to="/capabilities" replace />} />
            <Route path="/AboutUs/Certifications" element={<Navigate to="/about" replace />} />
            <Route path="/AboutUs/ContactUs" element={<Navigate to="/contact" replace />} />
            <Route path="/Locations" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

