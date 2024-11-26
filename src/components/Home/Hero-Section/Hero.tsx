import SearchBox from '@/components/Helper/SearchBox';
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-subtitle">The Best Way to</h1>
        <h1 className="hero-title">Find Your Dream Home</h1>
        <p className="hero-description">
          We ve more than 845,000 apartments, places & plots.
        </p>
        <div className="hero-search">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
