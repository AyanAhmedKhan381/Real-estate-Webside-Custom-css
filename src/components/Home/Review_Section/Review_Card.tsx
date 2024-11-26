import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import './style.css/Review_Card.css';

interface Props {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
}

const Review_Card = ({ review }: Props) => {
  return (
    <div className="review-card">
      <FaQuoteRight className="quote-icon" />

      <div className="stars-container">
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
      </div>
      
      <p className="review-text">{review.review}</p>
      <div className="divider"></div>

      <div className="user-info">
        <Image
          src={review.userImage}
          alt={review.name}
          width={40}
          height={40}
          className="user-image"
        />
        <div>
          <h1 className="user-name">{review.name}</h1>
          <p className="user-profession">{review.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default Review_Card;
