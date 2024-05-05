import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App2 from './App2';
import App3 from './App3';
function App() {
  return (
    
        <Router>
    <Routes>
      <Route path="/" element={<App2 />} />
      <Route path="/app3" element={<App3 />} />
    </Routes>
  </Router>
      
  );
}



export default App;
