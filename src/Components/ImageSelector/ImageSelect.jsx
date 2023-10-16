import React, { useState } from "react";
import { df } from "../../assets/subImg";

const ImageSelect = ({ images, bgImg }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSmallImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col space-x-4 ">
      <div className="flex flex-col sm:flex-row ">
        <div className="lg:w-[100%]">
          {/* Large image */}
          <div className="w-auto group relative">
            <img
              src={images[selectedImageIndex]}
              alt="Large Image"
              className="w-[full] h-[auto]"
            />
         
            <img src={bgImg} alt=""  className="absolute bottom-0"/>
          </div>
        </div>
        <div className="mt-4  sm:mt-0 lg:mt-0 grid grid-cols-4 lg:grid-cols-1 sm:grid-cols-2  gap-x-3 sm:ml-5 lg:ml-2 2xl:ml-0 sm:gap-0 gap-y-4  lg:gap-y-3 xxl:gap-y-6 2xl:gap-y-2">
          {/* Small images */}
          {images.map((image, index) => (
            index !== selectedImageIndex && (
              <div
                key={index}
                className="  flex justify-between items-start sm:w-[200px] sm:h-[190px]  lg:w-auto lg:h-auto"
                onClick={() => handleSmallImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  className="aspect-square lg:h-[5.6rem] w-28 lg:w-28 cursor-pointer sm:w-[10.5rem] sm:h-[10.5rem]"
                />
              </div>
            )
          ))}
        </div>
      </div>
      {/* Add more image containers as needed */}
    </div>
  );
};

export default ImageSelect;