import React from 'react';
import ImageCarousel from './ImageCarousel';
import { aboutPic1, aboutPic2, aboutPic3 } from '../assets/images'

const CarouselAbout = () => {
  const images = [
    aboutPic1,
    aboutPic2, aboutPic3 
  ];

  return (
    <div className="  ">
      <div className="  ">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
};

export default CarouselAbout;
