import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../index";
import { waste } from "../../assets/subImg";
import {
  bestCase,
  relayPannels,
  kra,
  incinerator,
  wtc,
  bts,
  clip,
  solar,
} from "../../assets/ProductImages";

import { CustomerLogos2 } from "..";
import { ImageSelect } from "../ImageSelector";
import {
  SWT,
  Ups,
  waste1,
  waste2,
  waste3,
  waste4,
  waste5,
} from "../../assets/IndImages";

const WasteMang = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
  const [selectedProTag, setSelectedProTag] = useState("PTag1");
  const images = [waste1, waste2, waste3, waste4, waste5];

  const tagContents = {
    tag1: "The Waste Management Industry encompasses various solutions, including an Organic Waste Compost Machine, Plastic Shredder, and Incinerator. The Organic Waste Compost Machine efficiently converts organic waste into compost in a day, mitigating food waste issues and reducing emissions. The Plastic Shredder tackles plastic waste reduction, making it crucial for environmental concerns. Additionally, the Incinerator is ideal for general waste disposal, offering clean and hygienic disposal options. For specific menstrual waste, Sanitary Pad Incinerators provide safe and eco-friendly disposal in various settings, from schools to public places",

    tag2: "Uninterrupted Power Supply (UPS) Solutions, such as the PureWave UPS System from S&C, play a vital role in the field of Waste Management. These solutions ensure continuous, high-quality power supply to critical systems that manage waste processing and disposal. In waste management facilities, where the smooth operation of equipment and processes is essential for public health and environmental safety, any power disruption can lead to significant issues. UPS systems offer protection against power disturbances, safeguarding the uninterrupted operation of waste handling equipment, data management systems, and facility controls, ultimately contributing to the efficiency and reliability of waste management processes.",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
    // Set the selected tag
  };

  const handleProClick = (tag) => {
    setSelectedProTag(tag);
  };
  return (
    <div>
      <Navbar />

      <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <div className="lg:hidden text-black text-[28px] font-normal font-antonio">
            Waste Management
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">
            INDUSTRIES
          </div>

          <ImageSelect images={images} bgImg={waste} />

          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Waste Management
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              INDUSTRIES
            </div>
            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
              The Waste Management Industry encompasses businesses and services
              focused on collecting, processing, recycling, and disposing of
              various types of waste to minimize environmental impact and
              promote responsible waste handling.
            </div>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          SOLUTIONS
        </div>
        <div className="lg:flex hidden space-x-3 mt-8">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Solid Waste Treatment
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Uninterrupted Power Supply
          </button>
        </div>

        {/*     mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Solid Waste Treatment
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Uninterrupted Power Supply
          </button>
        </div>

        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug ">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          PRODUCTS
        </div>

        <div className="lg:flex hidden space-x-3 mt-8">
          <button
            className={`tag ${
              selectedProTag === "PTag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag1")}
          >
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag2")}
          >
            AC & DC UPS
          </button>
        </div>

        {/*Product mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${
              selectedProTag === "PTag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag1")}
          >
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag2")}
          >
            AC & DC UPS
          </button>
        </div>

        <div className="proContainer">
          <div
            className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag1" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={SWT} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
              The WTC machine is a game-changer in waste management, quickly
              turning organic materials into compost in 24-36 hours with
              automatic and safe operation. It decreases waste volume by 10-15%,
              bolstering sustainability. Plastic shredders are vital for
              efficient plastic waste reduction and are energy-efficient and
              customizable. A-INC-50 incinerators effectively handle general
              waste, minimizing environmental impact and ensuring hygiene at
              800°C.
            </div>
          </div>

          <div
            className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag2" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={Ups} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In Waste Management, DC UPS Systems from J. Schneider play a vital
              role in ensuring uninterrupted controls and processes. These
              systems offer robust technology, with a wide product range and
              adjustable backup times. Their microcontroller-supported charging
              and discharging, along with customisable features, provide
              reliable power solutions, safeguarding waste management operations
              from voltage interruptions and fluctuations, contributing to more
              efficient and secure waste processing.
            </div>
          </div>
        </div>

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">
          Customers
        </div>

        <CustomerLogos2 />
      </div>

      <Footer />
    </div>
  );
};

export default WasteMang;
