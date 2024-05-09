import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpModal from './components/SignUpModal';
import OurValues from './components/OurValues';
import './App.css'; /* Importing the global CSS file */


function App() {
  return (
    <Router>
      <Navbar />
      <SignUpModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-values" element={<OurValues />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

