import SectionHeading from '@/components/Helper/SectionHeading';
import { buildings } from '@/data/data';
import React from 'react';
import BuildingFeatureCard from './BuildingFeatureCard';
import './style.css/Building_Feature.css'; 

const Building_Feature = () => {
  return (
    <div className="building-feature-section">
      <div className="building-feature-container">
        <SectionHeading 
          heading="Explore Building Features" 
          subHeading="Modern, Spacious, Affordable, Secure, Elegant" 
        />
        
        <div className="building-feature-grid">
          {buildings.map((building) => (
            <div key={building.id}>
              <BuildingFeatureCard building={building} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Building_Feature;
