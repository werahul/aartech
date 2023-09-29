import React, { useState } from "react";
import { rImage1, rImage2 } from "../../assets/workImages";

const ImageSelect = () => {
  const [largeImage, setLargeImage] = useState(
    rImage1
  ); // Initial large image

  const handleSmallImageClick = (newImage) => {
    setLargeImage(newImage);
  };
  return (
    <div className="flex flex-col lg:w-[110%] space-x-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          {/* Large image */}
          <div className="w-auto group">
            <img src={largeImage} alt="Large Image" className="w-full h-auto" />
          </div>
        </div>
        <div className=" mt-4 lg:mt-0 lg:w-1/3 grid grid-cols-4 lg:grid-cols-1 gap-x-3 lg:ml-5 gap-y-4 xxl:gap-y-6 2xl:gap-y-2">
          {/* Small images */}
          <div
            className="w-[80px] group"
            onClick={() =>
              handleSmallImageClick(rImage2)
            }
          >
            <img
              src={rImage2}
              alt="Small Image 1"
              className="w-20 h-20 2xl:h-24 cursor-pointer "
            />
          </div>
          <div
            className="w-[80px] group"
            onClick={() =>
              handleSmallImageClick(rImage1)
            }
          >
            <img
              src={rImage1}
              alt="Small Image 2"
              className="w-20 h-20 2xl:h-24 cursor-pointer "
            />
          </div>
          <div
            className="w-[80px] group"
            onClick={() =>
              handleSmallImageClick(rImage2)
            }
          >
            <img
              src={rImage2}
              alt="Small Image 3"
              className="w-20 h-20 2xl:h-24 cursor-pointer"
            />
          </div>
          <div
            className="w-[80px] group"
            onClick={() =>
              handleSmallImageClick(rImage1)
            }
          >
            <img
              src={rImage1}
              alt="Small Image 4"
              className="w-20 h-20 2xl:h-24 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Add more image containers as needed */}
    </div>
  );
};

export default ImageSelect;
