// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="logo">
        <h1>DEVEVOLUTION</h1>
        <div className="sub-text">
          <span>EST. 2025</span>
          <span>TRANSFORMING IDEAS INTO REALITY</span>
        </div>
      </div>
      <a
        className="btn btn-primary d-inline-flex flex-row align-items-center mb-4"
        href="#contact"
      >
        Get your website today
        <em className="ml-2" data-feather="arrow-right"></em>
      </a>
    </section>
  );
};

export default Hero;
