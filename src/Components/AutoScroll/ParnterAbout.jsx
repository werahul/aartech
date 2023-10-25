import React, { useState } from 'react'
import { partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4 } from '../../assets/images';

const ParnterAbout = () => {
  const row1 = [ partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4];
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className=" lg:h-[200px] h-[140px] lg:py-10 py-5 lg:hidden block">
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

export default ParnterAbout;

