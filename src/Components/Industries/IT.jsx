import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { it } from "../../assets/subImg";
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

import { CustomerLogos2 } from "../../Components";
import { ImageSelect } from "../ImageSelector";
import {
  Load,
  Ups,
  flywheel,
  fuel1,
  it1,
  it2,
  it3,
  it4,
  it5,
} from "../../assets/IndImages";

const IT = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
  const [selectedProTag, setSelectedProTag] = useState("PTag1");
  const images = [it1, it2, it3, it4, it5];

  const tagContents = {
    tag1: "Control and Automation stand as pivotal solutions for the IT and Telecom sectors. Aartech offers various technologies, ranging from cost-effective utility and solutions to high-quality, custom solutions for discerning clients. Leveraging advanced concepts and technology expertise, Aartech excels in creating bespoke solutions tailored to precise requirements. Their focus on solid-state and microprocessor-based control products ensures substantial value addition, setting them apart from conventional integration approaches. These innovations significantly enhance efficiency and reliability in the IT and Telecom domain",

    tag2: "Reliable Engine Starting/Pulse Power solutions offer critical support in the IT and Telecom sectors. Battery failures often hinder engine starts, stemming from issues like low State-Of-Charge, ageing batteries, or cold temperatures. Traditional solutions recommend proper maintenance and periodic checks, but real-world demands necessitate short bursts of power with variable duty cycles. This is where pulse power sources shine, efficiently managing load fluctuations that grid or standalone sources struggle with. Whether operating independently or alongside a base-level power source, pulse power solutions ensure uninterrupted performance, a vital aspect for dependable IT and Telecom systems",

    tag3: "The Power Backup Unit (PBU) solution plays a crucial role in IT and Telecom by ensuring uninterrupted power supply to critical infrastructure. In this sector, downtime can result in significant data loss, communication disruptions, and revenue losses. PBUs provide a seamless transition to backup power sources during electrical outages, protecting servers, data centres, and communication networks. They enhance reliability and reduce the risk of service interruptions, enabling IT and Telecom operations to function smoothly, maintain connectivity, and meet customer demands even during power fluctuations or failures.",

    tag4: "Customised Plastic Cases from Aartech Solonics are indispensable in the IT and Telecom industry. They transcend basic enclosures, reflecting your brand and product image. These bespoke solutions facilitate entrepreneurs, innovators, and professionals in showcasing their offerings effectively, whether for prototypes or presentations. Aarchtech's dedication to quality, affordability, and accessibility aligns with diverse enclosure requirements, playing a pivotal role in bolstering success within the dynamic IT and Telecom sector.",

    tag5: "Aartech Solonics offers Solar Design, Engineering, and Consultancy services as a sustainable energy solution for IT and Telecom industries. Their commitment to engineering excellence shows their passion for harnessing solar power for a greener future. Aarchtech’s experienced team tailors solar solutions to meet IT and Telecom clients' unique needs, including intricate solar panel layouts and energy generation optimisation. Their comprehensive services cover everything from feasibility studies and system design to installation and ongoing maintenance, providing end-to-end support for clients looking to reduce utility bills and enhance efficiency in these industries.",

    tag6: "In the IT and Telecom industry, Uninterrupted Power Supply (UPS) Solutions are paramount for maintaining superior power quality and ensuring continuous operation of critical systems. Traditional UPS models often incur high costs due to efficiency loss, frequent battery replacements, and limited protection. Aartech's partnership with S&C USA introduces the PureWave UPS, offering a groundbreaking solution. This advanced Smart Grid UPS safeguards power-sensitive equipment from disturbances, supporting the entire load with clean power for up to 60 seconds, effectively eliminating 99% of power quality issues. With reduced loads supported for up to 180 seconds, it guarantees uninterrupted operations in the IT and Telecom sectors, enhancing reliability and performance.",

    tag7: "In the IT and Telecom industry, Energy Storage solutions leverage micro energy sources through energy harvesting technologies. These technologies capture and store energy from these sources and make it available on demand. This approach finds applications in the Marine, Defense, Space, Remote Sensing, and Telecom sectors, ensuring uninterrupted power for communication devices and remote sensing equipment. It also addresses challenges like charging cell phones when utility outlets are inaccessible and offers efficient energy utilisation in the Real Estate and Lighting industries, reducing the need for traditional power sources and cabling.",

    tag8: "Load Limiting solutions significantly benefit the IT and Telecom industry by enabling fair and practical energy distribution. They align with the growing demand for energy optimisation, particularly in data centres and telecom facilities, ensuring that resources are allocated efficiently. Load Limiting solutions prevent power misuse, promoting a pay-as-you-use culture. This enhances energy distribution and minimises non-technical losses, ultimately resulting in cost savings and sustainable energy practices in the IT and Telecom sectors, which heavily rely on reliable and efficiently managed power resources.",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleProClick = (tag) => {
    setSelectedProTag(tag);
  };
  return (
    <div>
      <Navbar />
      <SlideInBar/>
      <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10 ">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <div className="lg:hidden text-black text-[28px] font-normal font-antonio">
            IT and Telecom
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">
            INDUSTRIES
          </div>

          <ImageSelect images={images} bgImg={it} />

          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              IT and Telecom
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              INDUSTRIES
            </div>
            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
              Information technology and telecommunications have brought forth a
              transformative paradigm in our society. Yet, their immediate
              influence on energy matters may not be readily evident. Here, you
              can explore innovative solutions tailored for the Information
              Technology and Telecom sector within this context.
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
            CONTROL & AUTOMATION
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Pulse power
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Power Backup Unit
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Customised Plastic Case
          </button>
        </div>
        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Solar Design & Engineering
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Uninterrupted Power Supply
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Energy Storage
          </button>
          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Load Limiting
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
            CONTROL & AUTOMATION
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Pulse Power
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Power Backup Unit
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Customised Plastic Case
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Solar Design & Engineering
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Uninterrupted Power Supply
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Energy Storage
          </button>
          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Load Limiting
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
            CONTROL & RELAY PANELS
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag2")}
          >
            Kranking Ultracapacitors
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag3")}
          >
            Fuel Cell
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag4")}
          >
            Best Case
          </button>
        </div>

        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedProTag === "PTag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag5")}
          >
            Solar Design & Services
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            AC & DC UPS
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
          >
            FLY WHEEL
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag8")}
          >
            Load Checker
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
            CONTROL & RELAY PANELS
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag2")}
          >
            Kranking Ultracapacitors
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag3")}
          >
            Fuel Cell
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag4")}
          >
            Best Case
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag5")}
          >
            Solar Design & Services
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            AC & DC UPS
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
          >
            Fly Wheel
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag8")}
          >
            Load Checker
          </button>
        </div>

        <div className="proContainer">
          <div
            className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag1" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={relayPannels}
                alt=""
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
              Control & Relay Panels (CRP) from Aartech, tailored for 11KV and
              33KV substations, play a crucial role in the IT and Telecom
              sector. These panels, equipped with outdoor switchgear, integrate
              relays, fuses, switches, and comprehensive wiring to monitor and
              control transformers, generators, and circuit breakers.
              Customisable for single or multi-circuit applications, they offer
              versatile solutions for precise customer requirements, ensuring
              the reliable operation of critical systems in IT and Telecom
              environments.
            </div>
          </div>

          <div
            className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag2" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={kra} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              KranKing® Ultracapacitors are vital for healthcare, ensuring
              reliable engine starts for critical equipment. They reduce the
              strain on lead-acid batteries during starts, prolonging battery
              life and decreasing their size. Unlike traditional batteries with
              around 1000 cycles, KranKing® Ultracapacitors excel with over
              300,000 cycles, even in extreme temperatures. This exceptional
              durability enhances the overall reliability of engine-cranking
              systems in healthcare settings, guaranteeing prompt response and
              operation when needed most.
            </div>
          </div>

          <div
            className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag3" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={fuel1} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Fuel cells are becoming integral in the IT and Telecom Industry.
              Their high efficiency, extended endurance, compact size, and
              eco-friendly operation make them the preferred power source. In IT
              and telecom, Solid Oxide Fuel Cells (SOFC) offer reliable and
              silent energy solutions. They power communication, surveillance,
              and unmanned systems, both on the move and stationary, ensuring
              continuous operation with reduced environmental impact.
            </div>
          </div>

          <div
            className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag4" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={bestCase} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Best Case streamlines the procurement process for IT and Telecom
              professionals by providing timely access to quality enclosures at
              affordable prices. Entrepreneurs, innovators, and product
              designers can avoid expensive, low-quantity purchases by utilising
              BestCase's readily available and cost-effective options. Whether
              for prototypes or showcasing products, BestCase ensures your
              enclosures meet high standards, offering convenience and
              reliability for business success in the IT and Telecom sector.
            </div>
          </div>

          <div
            className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag5" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={solar} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Aarchtech's Solar Design and Services for IT and Telecom include
              permit and sales proposal design, NEM application filling,
              commercial and industrial projects, and more. Their expertise lies
              in crafting customised solar solutions, from panel layouts to
              energy optimisation, with comprehensive support encompassing
              feasibility studies, system design, installation, and maintenance.
              They aim to reduce utility bills and enhance efficiency for
              residential and industrial IT and Telecom clients.
            </div>
          </div>

          <div
            className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag6" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={Ups} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              DC UPS Systems from J. Schneider play a pivotal role in the IT and
              Telecom industry by ensuring uninterrupted power to vital controls
              and processes. They protect against voltage interruptions and
              fluctuations, securing the integrity of critical systems and data.
              With features like microcontroller-supported charging and
              discharging, adjustable backup times, and load-shedding
              capabilities, these systems offer robust technology tailored to
              the specific needs of IT and Telecom, guaranteeing smooth and
              uninterrupted operations in this sector.
            </div>
          </div>
          <div
            className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag7" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={flywheel} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In the IT and Telecom industry, flywheels play a crucial role by
              providing energy storage solutions for various applications. They
              help ensure uninterrupted power supply, reducing productivity loss
              during power fluctuations or genset failures. Moreover, flywheels
              are employed in electric vehicle charging stations, stabilising
              the grid and supporting fast charging without costly
              infrastructure upgrades. These devices also aid in energy recovery
              in public transport systems, optimising energy usage and creating
              new revenue streams for operators.
            </div>
          </div>
          <div
            className={`Pro8 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag8" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={Load} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In the IT and Telecom industry, the Load Checker is a vital asset.
              It safeguards equipment by blocking the mains supply when
              excessive current is drawn, preventing damage due to overload. Its
              patented self-reset feature automatically restores power after a
              brief load disconnection, requiring no manual intervention. Load
              Checker employs soft blocking technology for a prolonged lifespan.
              It allows for temporary overloads during activities like motor
              starting, ensuring continuous operation without harm.
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

export default IT;
