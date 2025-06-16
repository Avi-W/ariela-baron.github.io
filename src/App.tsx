import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import DeepDive from './pages/DeepDive';
export function App() {
  return <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deep-dive" element={<DeepDive />} />
        </Routes>
        <Footer />
      </div>
    </Router>;
}