import SectionHeading from '@/components/Helper/SectionHeading';
import { properties } from '@/data/data';
import React from 'react';
import PropertiesCard from './PropertiesCard';
import './style.css/Properties.css';

const Properties = () => {
  return (
    <div className="properties-section">
      <div className="properties-container">
        <SectionHeading heading="Discover Our Properties" subHeading="Explore Our Stunning Property Listings!" />
        <div className="properties-grid">
          {properties.map((item) => (
            <div key={item.id}>
              <PropertiesCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
