import React, { useState } from "react";

const ImageSelect = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSmallImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col space-x-4">
      <div className="flex flex-col sm:flex-row ">
        <div className="lg:w-[100%]">
          {/* Large image */}
          <div className="w-auto group ">
            <img
              src={images[selectedImageIndex]}
              alt="Large Image"
              className="w-[full] h-[auto]"
            />
          </div>
        </div>
        <div className="mt-4  sm:-mt-2 lg:mt-0 grid grid-cols-4 lg:grid-cols-1 sm:grid-cols-2  gap-x-3 sm:ml-5 lg:ml-2 sm:gap-0 gap-y-4  lg:gap-y-3 xxl:gap-y-6 2xl:gap-y-2">
          {/* Small images */}
          {images.map((image, index) => (
            index !== selectedImageIndex && (
              <div
                key={index}
                className="lg:w-[80px] sm:w-[200px] sm:h-[190px] lg:h-[90px] group flex justify-center items-center"
                onClick={() => handleSmallImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  className="lg:w-20 sm:w-[10.5rem] lg:h-[5.7rem] sm:h-[10.5rem] 2xl:h-24 cursor-pointer"
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