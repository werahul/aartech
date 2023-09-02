import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="">
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <div className="mt-2">
        <ul className="flex justify-center w-[324px] h-[324px]">
          {images.map((_, index) => (
            <li className="mr-2" key={index}>
              <button
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-box-red border-[1px] border-box-red' : 'bg-gray-100 border-[1px] border-black'
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageCarousel;
