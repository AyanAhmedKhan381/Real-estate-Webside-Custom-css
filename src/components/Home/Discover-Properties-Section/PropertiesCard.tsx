import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import "./style.css/PropertiesCard.css";

interface Props {
  data: {
    id: number;
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
}

const PropertiesCard = ({ data }: Props) => {
  return (
    <div className="properties-card">
      <div className="image-container">
        <Image
          src={data.imageUrl}
          alt={data.propertyName}
          width={300}
          height={300}
          className="property-image"
        />
        <h1 className="price-badge">${data.price} / mo</h1>
        <div className="featured-badge">
          <MdElectricBolt />
          <span>Featured</span>
        </div>
      </div>
      <div className="property-details">
        <h1 className="property-name">{data.propertyName}</h1>
        <p className="property-location">{data.location}</p>
        <div className="property-icons">
          <div className="icon-group">
            <FaBed className="icon" />
            <p>{data.bedrooms} Beds</p>
          </div>
          <div className="icon-group">
            <FaBath className="icon" />
            <p>{data.bathrooms} Bath</p>
          </div>
          <div className="icon-group">
            <FaSquare className="icon" />
            <p>{data.size} Sqrt</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="property-footer">
          <h1>For Rent</h1>
          <div className="action-icons">
            <BiLinkExternal />
            <BsPlusSquare />
            <BsHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
