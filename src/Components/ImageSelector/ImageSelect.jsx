import React, { useState } from "react";

const ImageSelect = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSmallImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex flex-col space-x-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[100%]">
          {/* Large image */}
          <div className="w-auto group">
            <img
              src={images[selectedImageIndex]}
              alt="Large Image"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="mt-4 lg:mt-0 grid grid-cols-4 lg:grid-cols-1 gap-x-3 lg:ml-5 gap-y-4 xxl:gap-y-6 2xl:gap-y-2">
          {/* Small images */}
          {images.map((image, index) => (
            index !== selectedImageIndex && (
              <div
                key={index}
                className="w-[80px] h-[94px] group"
                onClick={() => handleSmallImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  className="w-20 h-20 2xl:h-24 cursor-pointer"
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