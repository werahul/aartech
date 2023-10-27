import React, { useState } from 'react'
import { rnM1, rnM2, rnM3, rnM4 } from '../../assets/rndImages';

const RndAuto = () => {
  const row1 = [rnM1, rnM2, rnM3, rnM4 ];
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className=" lg:h-[200px] h-[140px]  lg:hidden block py-5">
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

export default RndAuto;

