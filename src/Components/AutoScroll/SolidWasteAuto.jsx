import React, { useState } from 'react'
import { indRail, CapS, CapG, hp } from '../../assets/WorkBlackLogos'

const SolidWasteAuto = () => {
  const row1 = [ indRail, CapS, CapG, hp];
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className=" lg:h-[200px] h-[140px]  lg:hidden block">
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

export default SolidWasteAuto;

