import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import CitySlider from './CitySlider'
import './style.css/CityProperties.css';  // Import the custom CSS file

const CityProperties = () => {
  return (
    <div className="city-properties-container">
      <div className="city-properties-wrapper">
        <SectionHeading heading="Explore City Properties" subHeading="Find, Invest, Live, Grow, Thrive"/>
        <div className="section-heading-container">
          {/* Slider */}
          <CitySlider />
        </div>
      </div>
    </div>
  );
}

export default CityProperties;
