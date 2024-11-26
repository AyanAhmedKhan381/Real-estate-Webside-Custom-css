import SectionHeading from '@/components/Helper/SectionHeading';
import { properties } from '@/data/data';
import React from 'react';
import PropertiesCard from '../../../components/Home/Discover-Properties-Section/PropertiesCard';
import './property.css';

const Properties = () => {
  return (
    <div className="properties-section">
      <div className="properties-container">
        <h1 className='heading'>Discover Our Properties</h1>
        <p className='para'>Explore Our Stunning Property Listings!</p>
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

