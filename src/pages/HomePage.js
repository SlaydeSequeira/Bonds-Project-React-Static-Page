// src/pages/HomePage.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '.././App.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <h2>Welcome to Test-BOND!</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <h2>Trusted by 38,000+ investors in India</h2>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="d-flex justify-content-center align-items-center vh-100">
            <h2>Bonds worth ₹600+ crores sold with 0 defaults</h2>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
