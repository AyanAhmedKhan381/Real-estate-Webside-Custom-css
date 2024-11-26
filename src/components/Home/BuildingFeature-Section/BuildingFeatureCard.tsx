"use client";
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import './style.css/Building_Feature-Card.css';

interface Props {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const BuildingFeatureCard = ({ building }: Props) => {
  return (
    <Tilt className="tilt-card">
      <div className="tilt-card-icon">
        <Image 
          src={building.image} 
          alt={building.title} 
          width={40} 
          height={40} 
        />
      </div>

      <div className="tilt-card-content">
        <p className="tilt-card-id">0{building.id}</p>
        <p className="tilt-card-title">{building.title}</p>
        <p className="tilt-card-description">{building.description}</p>
      </div>
    </Tilt>
  );
};

export default BuildingFeatureCard;
