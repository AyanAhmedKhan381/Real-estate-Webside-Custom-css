import Image from "next/image";
import './style.css/AppartmentTypeCard.css';

interface Props {
  data: {
    id: number;
    icon: string;
    type: string;
    number: number;
  };
}

const AppartmentTypeCard = ({ data }: Props) => {
  return (
    <div className="appartment-card">
      <Image 
        src={data.icon} 
        alt={data.type} 
        width={100} 
        height={100} 
      />
      <h1 className="appartment-card-title">{data.type}</h1>
      <p className="appartment-card-info">{data.number} apartments available</p>
    </div>
  );
};

export default AppartmentTypeCard;
