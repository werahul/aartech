import React, { useState } from 'react'
import { Cimg1, Cimg2, Cimg3, Cimg4 , Cimg5, Cimg6, Cimg7, Cimg8, Cimg9, Cimg10, Cimg11 } from '../assets/CLogoBlack';

// ... (import statements)

const CustomerLogos2 = () => {
  const row1 = [ Cimg1, Cimg2, Cimg3, Cimg4, Cimg5, Cimg6, Cimg7, Cimg8, Cimg9, Cimg10, Cimg11];
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className=" lg:h-[200px] h-[140px]   lg:py-10 py-5 lg:mb-0  ">
        <div className="marquee">
          <div className="marqueeGroup">
            {row1.map((el, i) => (
              <div key={i} className="imageGroup">
                <img src={el} className={`image ${index === 1 ? "lg:w-full lg:h-auto w-auto h-[200px] " : "lg:w-auto h-auto "   }`} alt={`customer-${i}`} />
              </div>
            ))}
          </div>
          <div className="marqueeGroup">
            {row1.map((el, i) => (
              <div key={i} className="imageGroup">
                <img src={el} className={`image ${index === 1 ? "lg:w-full lg:h-auto h-[100px] " : "lg:w-auto h-auto "}`} alt={`customer-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerLogos2;

