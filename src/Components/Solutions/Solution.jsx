import React, { useState } from "react";
import { ImageSelect } from "../ImageSelector";
import { rImage1, rImage2 } from "../../assets/workImages";
import { Cimg1, Cimg2, Cimg3, Cimg4 } from '../../assets/CLogoBlack'
import { Navbar, Footer } from "../index"

const Solution = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div className="">

      <Navbar />

      <div className="lg:pt-44 pt-24 px-5 lg:px-20 pb-10 lg:pb-20">
        <div className="flex">
          <div className="w-auto lg:w-[45%] hidden lg:block">
            <ImageSelect />
          </div>
          <div className="w-auto lg:w-[55%]">
            <div>
              <h1 className="font-antonio text-[28px] lg:text-[36px]">
                Reactive Power Compensation
              </h1>
              <p className="font-Barlow text-[20px] text-[#0C013D] font-bold">
                SOLUTION
              </p>
              <div className="block mt-4 lg:hidden">
                <ImageSelect />
              </div>
            </div>
            <div>
              <p className="lg:pt-[42px] pt-8 text-base lg:font-normal font-medium  xxl:text-[24px] font-Barlow">
                Modern power quality norms place a premium in the tariff structure
                towards out-of-limit reactive power. These limits are getting
                tighter by the day in the increased deregulated environment and
                competitive pressures amongst various agencies as evidenced by
                newer grid interconnection codes and penalty provisions. Further,
                corrections for power quality issues such as voltage sags, surges,
                flicker as well as grid stability support are demanded from
                installations that need to connect with the grid.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pt-20 pt-10">
          <h2 className="font-Barlow pb-5 text-[#0C013D] text-[18px] font-bold">
            INDUSTRIES
          </h2>
          <div className="">
            <div className="space-x-2">
              <button
                className={`font-Barlow border text-[18px] border-[#777777] px-8 py-2 ${activeButton === 1
                  ? "text-[#B80001]  border-[#B80001]"
                  : "text-[#777777]"
                  }`}
                onClick={() => handleButtonClick(1)}
              >
                Railways
              </button>
              <button
                className={`font-Barlow  border  text-[18px] border-[#777777] px-8 py-2 ${activeButton === 2
                  ? "text-[#B80001] border-[#B80001]"
                  : "text-[#777777]"
                  }`}
                onClick={() => handleButtonClick(2)}
              >
                Wind Power
              </button>
            </div>
            {activeButton === 1 && (
              <div className="mt-2 font-Barlow text-base lg:font-normal font-medium xxl:text-[20px]">
                Railways traction substations take utility feed and are required
                to draw power under tightly regulated conditions. The fluctuating
                reactive power requirement of a moving train requires precise and
                fast compensation to avoid breaching the imposed limits.
              </div>
            )}
            {activeButton === 2 && (
              <div className="mt-2 font-Barlow text-[20px] xxl:text-[20px]">
                This is Wind Power content.
              </div>
            )}
          </div>
          <div className="lg:py-20 py-10">
            <h2 className="font-Barlow pb-5 text-[#0C013D] text-[18px] font-bold">
              PRODUCTS
            </h2>
            <div className="">
              <div className="space-x-2">
                <button
                  className={`font-Barlow border text-[18px] text-[#B80001]  border-[#B80001] px-8 py-2
                  `}
                  onClick={() => handleButtonClick(1)}
                >
                  PUREWAVE DSTATCOM
                </button>
              </div>

              <div className="mt-5 font-Barlow text-base lg:font-normal font-medium xxl:text-[20px] lg:space-x-8 flex-col lg:flex-row flex">
                <img
                  src={rImage1}
                  alt=""
                  className="w-full h-full lg:w-56 lg:h-56"
                />
                <p className="mt-5 lg:mt-0">
                  PureWave DSTATCOM is well suited to a major goal of the Smart
                  Grid: Integration of renewable energy sources, such as wind,
                  concentrated solar, and tidal power generation. It allows these
                  renewable energy sources to meet utility interconnection
                  requirements, as well as the power factor, voltage output, and
                  low-voltage ride-through requirements of various worldwide grid
                  codes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="mb-4 font-antonio text-[28px] lg:text-[36px]">
            CUSTOMERS
          </h2>
          <div className="flex items-center space-x-5 lg:space-x-10 mt-4 lg:mt-9">
            <img src={Cimg1} alt="" className="w-20 h-8 lg:w-auto lg:h-auto" />
            <img src={Cimg2} alt="" className="w-24 h-6 lg:w-auto lg:h-auto" />
            <img src={Cimg3} alt="" className="w-10 h-12 lg:w-auto lg:h-auto" />
            <img src={Cimg4} alt="" className="w-24 h-10 lg:w-auto lg:h-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solution;
