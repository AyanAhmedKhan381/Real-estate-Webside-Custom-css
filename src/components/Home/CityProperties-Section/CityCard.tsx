import Image from "next/image";
import './style.css/CityCard.css'


interface Props {
  city: {
    id: number;
    image: string;
    cityName: string;
    numberOfProperties: number;
  };
}

const CityCard = ({ city }: Props) => {
  return (
    <div className="city-card">
      <Image
        src={city.image}
        alt={city.cityName}
        width={700}
        height={700}
        className="city-card-image"
      />
      <div className="city-card-overlay"></div>
      <div className="city-card-content">
        <h1 className="city-card-title">{city.cityName}</h1>
        <p className="city-card-properties">{city.numberOfProperties} Properties</p>
      </div>
    </div>
  );
};

export default CityCard;
