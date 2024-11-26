import AppartmentTypeCard from '@/components/Helper/AppartmentTypeCard';
import SectionHeading from '@/components/Helper/SectionHeading';
import { appartmentTypeData } from '@/data/data';
import React from 'react';
import './AppartmentType.css';

const AppartmentType = () => {
  return (
    <div className="appartment-type">
      <div className="appartment-type-container">
        <SectionHeading
          heading="Appartment Types"
          subHeading="Prime properties, secure investments."
        />
        <div className="appartment-type-grid">
          {appartmentTypeData.map((item) => (
            <div key={item.id}>
              <AppartmentTypeCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppartmentType;
