import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { transport } from "../../assets/subImg";
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
  flywheel,
  fuel1,
  tran1,
  tran2,
  tran3,
  tran4,
  tran5,
} from "../../assets/IndImages";

const Transport = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
  const [selectedProTag, setSelectedProTag] = useState("PTag1");
  const images = [tran1, tran2, tran3, tran4, tran5];

  const tagContents = {
    tag1: "Control and automation play a pivotal role in revolutionising the Transportation sector. Aartech offers a diverse range of technologies, catering to both utility companies with cost-effective solutions and demanding customers with high-quality offerings. Their innovative approach ensures customer satisfaction, utilising advanced technologies to meet precise requirements. Aartech excels in seamlessly integrating various components to craft customised solutions, enhancing efficiency. Their solid-state and microprocessor-based control products go a step further, addressing unique needs and differentiating themselves from traditional solutions, resulting in substantial value addition in Transportation.",

    tag2: "Reliable Engine Starting/Pulse Power solutions are pivotal in enhancing Transportation systems. Engine starting failures, often attributed to discharged or ageing batteries, are a common challenge, particularly in cold conditions. While traditional approaches focus on battery maintenance, sizing, and replacements, real-world scenarios demand adaptable solutions. Specific applications require short bursts of power with variable duty cycles, where a grid source excels in handling load fluctuations compared to standalone systems. In such cases, pulse power sources/sinks become essential, either operating independently or complementing base-level power sources, ensuring reliable engine starts and consistent performance in the Transportation sector.        ",

    tag3: "The Power Backup Unit (PBU) solution significantly enhances transportation systems by ensuring an uninterrupted power supply, vital for various critical functions. This solution is crucial in transportation in supporting essential systems such as traffic lights, signalling systems, and communication networks. During power outages or emergencies, the PBU seamlessly takes over, maintaining the safe and efficient transportation infrastructure operation. This reliability minimises disruptions, traffic congestion, and safety risks, improving transportation systems' efficiency and safety. The Power Backup Unit helps maintain the continuity and reliability of transportation services, ensuring passenger safety and system integrity.",

    tag4: "Customised Plastic Cases from Aartech Solonics offer the transportation industry a tailored solution for showcasing and protecting their products. These cases not only safeguard valuable equipment but also enhance a company's image. Aartech Solonics' commitment to quality, affordability, and timely access supports transportation professionals, ensuring their offerings are presented impressively. Whether for prototypes or displays, these cases contribute to business success by providing a cost-effective means to protect and showcase products, helping entrepreneurs and innovators thrive in the competitive transportation sector.",

    tag5: "In the transportation industry, a comprehensive Solid Waste Treatment is invaluable. It addresses the responsible handling of various waste types generated during transportation operations, including solid, hazardous, and organic waste. This system not only reduces the industry's environmental footprint but also promotes sustainability by prioritising practices such as recycling and resource recovery. By incorporating regulations, infrastructure, and technology, it ensures efficient, eco-friendly waste disposal, minimises landfill usage, and contributes to a cleaner, more sustainable transportation sector that aligns with modern environmental standards and regulations.",

    tag6: "In the Transportation industry, Energy Storage solutions are becoming crucial for enhancing efficiency and sustainability. By harnessing energy from sources like solar, wind, and hydropower using technologies such as PV panels, micro wind turbines, and micro hydro turbines, energy can be stored for on-demand use. This stored energy powers portable devices like cell phones, radios, and instruments. In applications like Marine, Defense, and Remote Sensing, these technologies enable continuous operation and communication, even in remote or mobile scenarios. Additionally, Energy Storage can aid in charging electric vehicles, reducing reliance on traditional power sources.",

    tag7: "In the Transportation industry, Uninterrupted Power Supply (UPS) Solutions play a pivotal role in ensuring the reliability and safety of critical operations. They provide superior power quality, addressing the demands of a sector characterised by interdependence and criticality. UPS solutions not only mitigate the total cost of ownership (TCO) concerns associated with conventional systems but also offer full facility protection. This technology is invaluable in applications like traffic control systems, ensuring uninterrupted communication and efficient operation. As transportation systems evolve, controlling energy consumption and enhancing efficiency is essential, and UPS solutions provide a dependable foundation for these advancements.",
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
      <SlideInBar/>
      <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 sm:px-10">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <div className="lg:hidden text-black text-[28px] font-normal font-antonio">
            Transportation
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">
            INDUSTRIES
          </div>

          <ImageSelect images={images} bgImg={transport} />

          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Transportation
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              INDUSTRIES
            </div>
            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
              Transportation is a leading consumer of non-renewable energy,
              necessitating immediate and critical solutions. Here, you can
              explore innovative solutions tailored to the Automotive and
              Railway sectors to address these pressing energy needs.
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
            Customised PlASTIC Case
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
            Solid Waste Treatment
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Energy Storage
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
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
            Customised PlASTIC Case
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Solid Waste Treatment
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Energy Storage
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
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
            CONTROL RELAY PANELS
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
            Solid Waste Treatment Products
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            Flywheel
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
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
            CONTROL  RELAY PANELS
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
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            Flywheel
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
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
              <img
                src={relayPannels}
                alt=""
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
              Aartech's Control relay Panels (CRP) are integral to enhancing
              Transportation systems. Specifically designed for 11KV and 33KV
              substations, these panels incorporate outdoor switchgear, relays,
              fuses, switches, and wiring. They offer comprehensive monitoring
              and control capabilities for transformers, generators, and circuit
              breakers. With indoor control panels catering to outdoor VCBs,
              they provide flexibility through customisation for single or
              multi-circuit applications, addressing diverse customer
              requirements in the Transportation sector.
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
              KranKing® Ultracapacitors revolutionise Transportation by
              optimising engine starting. Specifically designed for
              engine-cranking tasks, they reduce the load on lead-acid batteries
              during starts, enabling smaller battery sizes and prolonged
              battery life. Notably, KranKing® devices outperform traditional
              batteries, enduring over 300,000 cycles, even in extreme
              temperatures (-45°C to 55°C). This exceptional durability
              significantly enhances the reliability of engine-cranking systems,
              ensuring dependable starts in Transportation applications.
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
              Fuel cells are revolutionising the transportation industry with
              their exceptional attributes. These power sources, like Solid
              Oxide Fuel Cells (SOFC), offer higher efficiency, longer
              endurance, and silent operation. In the transportation sector,
              they provide a green energy solution for communication,
              surveillance, and unmanned systems. Their compact, lightweight,
              and eco-friendly nature makes them an ideal choice, offering
              improved performance, reduced emissions, and extended operational
              range compared to traditional internal combustion engine options.
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
              Best Case simplifies the transportation challenges in the industry
              by offering a wide range of quality enclosures online, 24/7.
              Entrepreneurs, innovators, and product designers can access
              affordable enclosures, eliminating the need for expensive and
              impractical prototyping options. It ensures that products meet
              high-quality standards for presentations, demonstrations, or
              long-distance transport, making it an integral part of achieving
              the best-case scenario in transportation logistics.
            </div>
          </div>

          <div
            className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag5" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[150%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={SWT} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The Waste To Compost (WTC) machine is an automated composting
              solution for transportation, converting organic waste into compost
              in 24 hours, following the 3R Principle for waste reduction. It
              operates quietly and is eco-friendly. Plastic shredders reduce
              plastic waste volume, with customizable and energy-efficient
              options for waste management and biofuel production. Incinerators
              like the A-INC-50 model efficiently dispose of general waste in
              transportation hubs, promoting a cleaner environment.
            </div>
          </div>

          <div
            className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag6" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={flywheel} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In the Transportation industry, flywheels play a vital role by
              storing and managing energy. They benefit Electric Vehicles (EVs)
              and EV charging by enabling fast-charging capabilities, reducing
              range anxiety and grid strain. Flywheels stabilise power grids by
              providing synthetic inertia, addressing over-voltage issues caused
              by renewable energy sources. Additionally, in public transport,
              flywheels recover and store energy from braking, reducing energy
              waste and supporting railway operations.
            </div>
          </div>

          <div
            className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag7" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={Ups} alt="" className="sm:w-[100%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In the Transportation Industry, DC UPS Systems are indispensable
              for ensuring uninterrupted power to vital controls and processes.
              They offer a robust and adaptable technology that safeguards
              critical operations during voltage interruptions or fluctuations.
              These systems, equipped with microcontroller-supported features
              and adjustable backup times, help maintain the reliability of
              transportation infrastructure, from signalling systems to data
              communication, enhancing safety and efficiency throughout the
              sector.
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

export default Transport;
