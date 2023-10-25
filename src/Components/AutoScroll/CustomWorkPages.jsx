import React, { useState } from 'react';

const CustomWorkPages = ({ imageSources }) => {
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className="lg:h-[200px] h-[140px] lg:py-10 py-0 lg:mb-4">
        <div className="marquee">
          <div className="marqueeGroup">
            {imageSources.map((src, i) => (
              <div key={i} className="imageGroup">
                <img
                  src={src}
                  className={`image ${
                    index === 1 ? 'lg:w-full lg:h-auto w-auto h-[200px]' : 'lg:w-auto h-auto'
                  }`}
                  alt={`customer-${i}`}
                />
              </div>
            ))}
          </div>
          <div className="marqueeGroup">
            {imageSources.map((src, i) => (
              <div key={i} className="imageGroup">
                <img
                  src={src}
                  className={`image ${
                    index === 1 ? 'lg:w-full lg:h-auto h-[100px]' : 'lg:w-auto h-auto'
                  }`}
                  alt={`customer-${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomWorkPages;
