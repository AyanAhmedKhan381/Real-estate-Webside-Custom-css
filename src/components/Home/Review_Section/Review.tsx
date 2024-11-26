import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import Review_Slider from './Review_Slider';
import './style.css/Review.css';

const Review = () => {
  return (
    <div className="review-container">
      <div className="review-wrapper">
        <SectionHeading heading="Our Customer Reviews" subHeading="What our clients say" />
        <div className="review-slider">
          <Review_Slider />
        </div>
      </div>
    </div>
  );
};

export default Review;
