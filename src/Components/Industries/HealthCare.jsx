import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
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
  SWT,
  Ups,
  flywheel,
  fuel1,
  health1,
  health2,
  health3,
  health4,
  health5,
} from "../../assets/IndImages";
import { health } from "../../assets/subImg";

const HealthCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
  const [selectedProTag, setSelectedProTag] = useState("PTag1");
  const images = [health1, health2, health3, health4, health5];

  const tagContents = {
    tag1: "Control and automation technologies play a pivotal role in healthcare solutions. Aartech leverages a wide range of technologies to provide tailored solutions, ensuring high-quality and efficient outcomes. Their expertise in technology allows them to harmonise components effectively, delivering customised solutions that enhance healthcare operations. Their solid-state and microprocessor-based control products set them apart by addressing specific needs and adding significant value compared to conventional approaches with discrete electrical devices.",

    tag2: "Process continuity is a critical solution for healthcare, where electrical outages can lead to immediate and lasting disruptions in patient care and operational efficiency. These incidents are etched in the memory of healthcare professionals who witness their impact firsthand. As healthcare focuses on revenue, efficiency, productivity, and system improvements, Aartech collaborates closely with consultants, equipment manufacturers, contractors, and end users to provide holistic solutions. Our approach ensures uninterrupted processes, safeguarding patient well-being and aligning with the industry's ever-increasing performance and reliability standards.",

    tag3: "Solutions like Reliable Engine Starting/Pulse Power are critical for healthcare facilities. In healthcare, reliable power is paramount, especially when engines must start without fail. Battery failures can be life-threatening due to various factors like discharge, ageing, and cold conditions. While traditional approaches emphasise proper maintenance and sizing, healthcare often demands short bursts of power for critical applications. In these scenarios, a pulse power source/sink, either standalone or working with a base-level power source, ensures uninterrupted power for vital medical equipment. This technology safeguards healthcare operations by handling load fluctuations, ensuring patient care is never compromised.",

    tag4: "A Power Backup Unit Solution plays a crucial role in Heavy Healthcare settings by ensuring uninterrupted power supply to critical medical equipment and facilities. Power outages can have severe consequences in the healthcare sector, where patient lives and well-being are at stake. These backup units are designed to instantly kick in during power failures, preventing disruptions to life-saving equipment like ventilators, monitors, and surgical instruments. They provide a seamless transition to backup power, safeguarding critical healthcare operations. Additionally, they reduce downtime, maintenance costs, and the risk of data loss, contributing to enhanced patient care, safety, and overall hospital efficiency.",

    tag5: "In the healthcare industry, Customised Plastic Cases play a pivotal role by safeguarding and enhancing the image of medical equipment and devices. Aarchtech Solonics offers timely, cost-effective, and tailored solutions, enabling healthcare professionals to showcase their innovative products and prototypes effectively. These cases ensure that delicate and specialised medical equipment is transported securely for demonstrations or fieldwork, aligning with the industry's stringent quality standards and budget constraints, ultimately supporting the success of healthcare businesses.",

    tag6: "In the healthcare industry, a robust Solid Waste Treatment is crucial for safeguarding public health and the environment. By efficiently collecting, transporting, processing, and disposing of various waste types, including hazardous medical waste, this system ensures the reduction of environmental harm. It minimises landfill usage, contributes to sustainability through recycling, and abides by stringent regulations. Advanced technology and infrastructure in healthcare waste management not only protect healthcare workers and patients from contamination but also promote eco-friendly waste disposal practices, enhancing overall healthcare service quality",

    tag7: "Plastic Shredders play a vital role in the Healthcare industry by efficiently reducing the volume of plastic waste, such as containers, blister packs, and medical packaging. These modern, energy-efficient and durable machines offer customisable shred sizes, making them versatile for various applications. Whether in waste management or biofuel production, these shredders effectively process medical plastic waste, contributing to eco-friendly recycling practices and reducing the environmental impact of healthcare facilities.",

    tag8: "Solar Design, Engineering, and Consultancy services from Aartech Solonics offer a sustainable energy solution for the healthcare sector. By harnessing solar power, they contribute to greener and more environmentally friendly healthcare facilities. Their tailored solar solutions, from intricate panel layouts to energy optimisation, ensure that healthcare facilities can generate energy efficiently, reducing utility bills and operational costs. Aartech's comprehensive services cover everything from feasibility studies to system design, installation, and maintenance, making them a valuable partner for healthcare providers looking to enhance energy sustainability and reduce their environmental footprint.",
    tag9: "In the Healthcare industry, where patient care is paramount, the Uninterrupted Power Supply (UPS) Solution plays a critical role. It ensures that sensitive medical equipment and life-saving devices remain operational even during power disturbances. By offering high power quality and continuous support, the UPS system guarantees that critical operations in hospitals, diagnostic centres, and research facilities are not disrupted. Additionally, it aligns with environmental and financial goals by enhancing energy efficiency, reducing maintenance costs, and promoting eco-friendly practices. This robust and reliable power protection solution is a lifeline in healthcare, contributing to the well-being and safety of patients.",
    tag10:
      "In the Healthcare industry, energy storage solutions, such as those harnessed from solar, wind, and hydropower, play a critical role. These technologies enable healthcare facilities to ensure uninterrupted power for essential medical devices, backup lighting, and climate control systems. In remote or disaster-prone areas, where grid power may be unreliable, energy storage ensures that life-saving equipment and facilities remain operational. It's a reliable source of energy to support patient care and preserve vital medicines in temperature-controlled environments.",
    tag11:
      "Load Limiting Solutions are a boon for the Healthcare Industry. In this critical sector, ensuring stable and efficient power distribution is essential. Load limiting technology helps manage energy distribution fairly, ensuring that essential services like lighting, ventilation, and critical equipment receive priority. By automating load control, healthcare facilities can efficiently allocate power resources, prevent overloads, and maintain uninterrupted operations. This not only improves energy utilisation but also enhances the reliability and sustainability of healthcare services, ultimately benefiting patient care and medical processes.",
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
            Healthcare
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">
            INDUSTRIES
          </div>

          <ImageSelect images={images} bgImg={health} />

          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Healthcare
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              INDUSTRIES
            </div>
            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
              The healthcare sector places paramount importance on performance
              and reliability, as it directly impacts the preservation of life.
              Energy management within this domain is mission-critical. Advanced
              technologies emphasising energy efficiency are gaining prominence.
              Given the life-saving nature of healthcare, performance standards
              are becoming increasingly stringent, necessitating the
              incorporation of cutting-edge technology to deliver
              state-of-the-art solutions.
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
            Process Continuity
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Pulse power
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Power Backup Unit
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
            Customised Plastic Case
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Solid Waste Treatment
          </button>
          <button
            className={`tag ${
              selectedTag === "tag11"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag11")}
          >
            Load Limiting
          </button>
        </div>
        <div div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Plastic Shredder
          </button>

          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Solar Design & Engineering
          </button>
          <button
            className={`tag ${
              selectedTag === "tag9"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag9")}
          >
            Uninterrupted Power Supply
          </button>
          <button
            className={`tag ${
              selectedTag === "tag10"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag10")}
          >
            Energy Storage
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
            Process Continuity
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-[200px] h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Pulse Power
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Power Backup Unit
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Customised Plastic Case
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Solid Waste Treatment
          </button>

          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Plastic Shredder
          </button>

          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Solar Design & Engineering
          </button>
          <button
            className={`tag ${
              selectedTag === "tag9"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag9")}
          >
            Uninterrupted Power Supply
          </button>
          <button
            className={`tag ${
              selectedTag === "tag10"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag10")}
          >
            Energy Storage
          </button>
          <button
            className={`tag ${
              selectedTag === "tag11"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag11")}
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
            BTS 2000
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag3")}
          >
            Kranking Ultracapacitors
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag4")}
          >
            FUEL CELL
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag5")}
          >
            Best Case
          </button>
        </div>

        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
          >
            Solar Design & Services
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag8")}
          >
            AC & DC UPS
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag9"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag9")}
          >
            Flywheel
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag10"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag10")}
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
            BTS 2000
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag3")}
          >
            Kranking Ultracapacitors
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag4")}
          >
            FUEL CELL
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag5")}
          >
            Best Case
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag6")}
          >
            Solid Waste Treatment Products
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag7")}
          >
            Solar Design & Services
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag8")}
          >
            AC & DC UPS
          </button>

          <button
            className={`tag ${
              selectedProTag === "PTag9"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag9")}
          >
            Flywheel
          </button>
          <button
            className={`tag ${
              selectedProTag === "PTag10"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleProClick("PTag10")}
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
            <div className=" sm:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
              <img
                src={relayPannels}
                alt=""
                className="sm:w-[100%] w-[100%]"
              ></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
              Aartech's Control & Relay Panels (CRP) play a vital role in
              healthcare infrastructure. Designed for substations, they
              incorporate essential components for monitoring and controlling
              electrical systems, ensuring reliability and safety. These panels
              are adaptable for various circuit configurations, meeting the
              unique needs of healthcare facilities.
            </div>
          </div>

          <div
            className={`Pro2 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag2" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={bts} alt="" className="sm:w-[130%] w-[100%]"></img>
            </div>
            <div className="  text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The BTS 2000 Fast Bus Transfer System ensures an uninterrupted
              power supply in healthcare settings. By swiftly transferring power
              between independent sources while adhering to safety parameters,
              it prevents disruptions to critical medical equipment, maintaining
              continuous patient care even in the event of a power source
              contingency.
            </div>
          </div>

          <div
            className={`Pro3 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag3" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={kra} alt="" className="sm:w-[120%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
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
            className={`Pro4 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag4" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={fuel1} alt="" className="sm:w-[120%] w-[100%]"></img>
            </div>
            <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow  sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Fuel cells play a vital role in healthcare by providing a reliable
              and environmentally friendly power source. Their high efficiency,
              long endurance, and silent operation make them ideal for various
              healthcare applications. Fuel cell technology can power medical
              devices, equipment, and communication systems, ensuring
              uninterrupted and clean energy supply contributing to the
              efficiency and effectiveness of healthcare operations in both
              mobile and stationary settings.
            </div>
          </div>

          <div
            className={`Pro5 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag5" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={bestCase} alt="" className="sm:w-[120%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              BestCase addresses the challenges in healthcare by providing
              timely access to quality enclosures for various medical products
              and equipment. It offers cost-effective solutions, eliminating the
              need for expensive and often subpar alternatives. BestCase ensures
              availability, allowing professionals to showcase their offerings
              effectively, whether for prototypes, demonstrations, or important
              meetings, contributing to their best-case scenarios in healthcare
              settings.
            </div>
          </div>

          <div
            className={`Pro6 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag6" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={SWT} alt="" className="sm:w-[120%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              The Waste To Compost (WTC) machine is a healthcare facility
              solution that converts organic waste into compost within 24 hours
              onsite, following the 3R Principle (reduce, recycle, reuse). It's
              eco-friendly, quiet, and odor-free, improving waste management in
              healthcare environments. Plastic Shredders reduce plastic waste
              volume, with custom shred sizes for versatility. Incinerators,
              like the A-INC-50 model, safely dispose of general waste and
              hazardous materials, reducing contamination and environmental
              harm, making them crucial in healthcare waste management.
            </div>
          </div>

          <div
            className={`Pro7 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag7" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[120%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={solar} alt="" className="sm:w-[120%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Aartech's Solar Design and Services for healthcare encompass a
              wide range of offerings, from permit design and sales proposals to
              utility-scale solutions and EV chargers. Their expert team ensures
              tailored solar panel layouts and optimised energy generation.
              Compliant with industry standards and regulations, Aarchtech
              provides end-to-end support, covering feasibility studies, system
              design, and comprehensive installation and maintenance services,
              fostering a greener and more sustainable energy future for
              healthcare facilities.
            </div>
          </div>

          <div
            className={`Pro8 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag8" ? "" : "hidden"
            }`}
          >
            <div className=" sm:w-[130%] w-[100%] h-auto sm:p-2 p-0 ">
              <img src={Ups} alt="" className="sm:w-[130%] w-[100%]"></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In Healthcare, DC UPS Systems are crucial for ensuring
              uninterrupted power to vital controls and processes. These systems
              provide a backup in cases of voltage interruptions or
              fluctuations, preventing disruptions in critical medical equipment
              and patient care. With microcontroller-supported charging and
              discharging, adjustable backup times, and safety features, they
              offer robust technology tailored to healthcare's specific needs.
              Whether powering life-saving devices or safeguarding sensitive
              data, DC UPS Systems contribute to the secure operation of
              healthcare facilities.
            </div>
          </div>

          <div
            className={`Pro9 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag9" ? "" : "hidden"
            }`}
          >
            <div className="lg:w-[90%] w-[100%] h-auto sm:p-2 p-0">
              <img src={flywheel} alt=""></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              In the healthcare industry, Flywheels play a critical role in
              ensuring uninterrupted power supply for medical facilities and
              equipment. These energy storage solutions act as Uninterruptible
              Power Supplies (UPS), safeguarding against power fluctuations and
              preventing downtime. By stabilising power systems, reducing
              emissions from diesel gensets, and minimising fuel consumption,
              Flywheels help maintain the continuity of life-saving healthcare
              services and reduce operational costs.
            </div>
          </div>
          <div
            className={`Pro10 flex sm:flex-row flex-col justify-start items-start mt-8 ${
              selectedProTag === "PTag10" ? "" : "hidden"
            }`}
          >
            <div className="lg:w-[90%] w-[100%] h-auto sm:p-2 p-0">
              <img src={Load} alt=""></img>
            </div>
            <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4 lg:leading-tight leading-snug">
              Load Checker is a critical tool in the healthcare industry. It
              safeguards electrical loads by preventing excessive current draw
              and promoting equipment and patient safety. The self-reset feature
              ensures an uninterrupted power supply after a disconnect. Load
              Checker's soft blocking technology extends its lifespan. It
              permits temporary overloads, like those during motor startup,
              ensuring uninterrupted medical equipment operation, which is vital
              for patient care and safety in healthcare facilities.
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

export default HealthCare;
