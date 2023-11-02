import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { product1 } from "../../assets/workImages";
import { download } from "../../assets/images";
import { Accordion, Accordion2, Accordion3 } from "..";
import { CustomerLogos2 } from "..";

import { ImageSelect } from "../ImageSelector";
// import { cp1, cp2, cp3, cp4, cp5 } from "../../assets/proImages";
import {
  flywheel1,
  flywheel2,
  flywheel3,
  flywheel4,
  flywheel5,
} from "../../assets/IndImages";
import { indRail, CapS, CapG, hp } from "../../assets/WorkBlackLogos";
import { SolidWasteAuto } from "../AutoScroll";

const Flywheel = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1");
  const images = [flywheel1, flywheel2, flywheel3, flywheel4, flywheel5];

  const tagContents = {
    tag1: "Flywheels provide crucial power reliability for defence and exploration and offer versatile applications in electric vehicles, grid stability, public transport, and uninterrupted power supply, promoting efficiency and emission reduction.",

    tag2: "Flywheels benefit the renewable energy industry by providing grid stability and energy storage. They combat the intermittent nature of solar and wind power, enhance grid performance, facilitate EV charging, and recover energy in various applications.",

    tag3: "Flywheels enhance the Power Transmission sector by ensuring grid stability, aiding electric vehicle charging, enabling energy recovery in transportation, and serving as reliable power backups, resulting in cost and emission reductions.",

    tag4: "Flywheels boost grid stability for renewables in heavy engineering. They enhance efficiency, cut emissions, and improve reliability in EV charging, grid stabilisation, public transport energy recovery, and uninterrupted power supply applications.",

    tag5: "Flywheels in healthcare ensure uninterrupted power supply during critical operations and equipment usage. They offer reliability and stability, making them a valuable solution for various medical applications and patient care.",

    tag6: "Flywheel technology stores kinetic energy and provides power grid stability for IT and telecom. It aids EV charging, grid stabilisation and energy recovery and serves as an uninterruptible power supply across industries.",

    tag7: "Flywheels, such as Inertia Drive, are essential in transportation, offering grid stability, EV fast charging, grid stabilisation, energy recovery, and uninterruptible power supply for industry, leveraging kinetic energy for sustainability.",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
  };

  const partnerImageSources = [indRail, CapS, CapG, hp];
  return (
    <div>
      <Navbar />
      <SlideInBar/>
      <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-20 px-5 lg:mt-0 mt-5 sm:px-10">
        <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">
        Flywheel
        </div>
        <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">
          PRODUCTS
        </div>

        <div className="lg:flex lg:mt-20">
          <ImageSelect images={images} />

          <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Flywheel
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              PRODUCTS
            </div>
            <div className="flex flex-col justify-between  lg:h-[330px]">
              <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                The flywheel is a mechanical energy storage device that stores
                kinetic energy as rotational momentum. Inertia Drive technology
                utilises flywheels to address issues in renewable energy
                integration and grid stability. These flywheels can be grouped
                in clusters, from 65 kW to 500 kW, with scalability options.
                They offer quick installation in various environments and
                deliver rapid power response with a 7.5 kWh energy capacity.
                Notably, these flywheels achieve over 90% round-trip efficiency,
                operate within a wide temperature range, and have a 100% Depth
                of Discharge (DoD) with unlimited cycles.
              </div>
              <div className="flex items-center lg:mt-auto mt-12 cursor-pointer">
                <img src={download} alt="" />
                <div className="text-foot-blue hover:text-box-red lg:text-lg text-base font-bold font-Barlow tracking-wider ml-[10px]">
                  DOWNLOAD BROCHURE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          INDUSTRIES
        </div>
        <div className="lg:flex hidden space-x-3 mt-8">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Defence & Exploration
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Power Transmission and Distribution
          </button>

          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Healthcare
          </button>
        </div>
        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Heavy Engineering Industries
          </button>
          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            IT and Telecom
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Transportation
          </button>
        </div>

        {/*     mobile-------------------------------------------------------------*/}
        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Defence & Exploration
          </button>
          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Renewable Energy
          </button>

          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Power Transmission and Distribution
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Heavy Engineering Industries
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Healthcare
          </button>
          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            IT & Telecom
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Transportation
          </button>
        </div>
        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          FEATURES
        </div>

        <div className="lg:flex  justify-start mt-8 ">
          <div className="text-black lg:text-2xl text-base space-y-1 lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
            <p className="list-dots">Inertia Drive (ID)</p>
            <p className="list-dots">Flywheel Container</p>
            <p className="list-dots">Outstanding Technical Performances</p>
            <p className="list-dots">Industries, Applications & Solutions</p>
            <p className="list-dots">Electric Vehicles (EV) Charging</p>

            {/* <li>Residual Voltage Transfer Mode</li>
            <li>
              Protective Transfer Initiation on Upstream Protective Relay
              Operation
            </li>
            <li>
              Intelligent Automatic Transfer Initiation using under/over
              voltage, frequency, |df/dt| criterion
            </li> */}
          </div>
          <div className="text-black lg:text-2xl space-y-1 text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-80 lg:mt-0 mt-6">
            <p className="list-dots">Power Transmission (Grid Stabilization)</p>
            <p className="list-dots">Public Transport (Energy Recovery)</p>
            <p className="list-dots">
              Process Industries (Uninterruptible Power Supply - UPS)
            </p>
            <p className="list-dots">
              100% Depth of Discharge (DoD) and unlimited cycles
            </p>
            {/* <li>Continuous Breaker Circuit Monitoring</li>
            <li>Smart Breaker Failure Processing</li>
            <li>Integrated System Interlocks</li>
            <li>Advanced Software Tools for Virtual Testing</li>
            <li>
              Transfer Event Upload Replay “What If” Analysis,Oscilography &
              SOE.
            </li>
            <li>Standard communication protocols</li> */}
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          CUSTOMISATION
        </div>
        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug mt-8">
          Aartech specialises in tailoring flywheels for diverse requirements,
          offering custom solutions within the 65 kW to 500 kW range with
          scalability. Their expertise ensures efficient, adaptable energy
          storage systems.
        </div>

        {/* <div className="lg:flex hidden lg:flex-row flex-col gap-x-[28px] gap-y-6 lg:mt-20 mt-10">
          <div className=" w-[100%] h-auto border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4">
            <div className="text-black text-base font-bold font-['Barlow'] tracking-wider">
              MAIN - TIE - MAIN (3 BREAKER SCHEME)
            </div>

            <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">
              Facilities :{" "}
            </div>
            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>sddsd</li>
              <li>dsfsdsf</li>
              <li>fsdfdfds</li>
              <li>sdfsdf</li>
            </div>

            <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">
              Techniques & softwares :{" "}
            </div>
            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>sddsd</li>
              <li>dsfsdsf</li>
              <li>fsdfdfds</li>
              <li>sdfsdf</li>
            </div>

            <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">
              Processes & standardisation :{" "}
            </div>
            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>sddsd</li>
              <li>dsfsdsf</li>
              <li>fsdfdfds</li>
              <li>sdfsdf</li>
            </div>
          </div>

          <div className=" w-[100%] h-auto border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4">
            <div className="text-black text-base font-bold font-['Barlow'] tracking-wider">
              MAIN - TIE (2 BREAKER SCHEMES)
            </div>

            <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">
              Locations :{" "}
            </div>
            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>Mandideep, MP</li>
              <li>Parwanoo, HP</li>
            </div>

            <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">
              Testing facility :{" "}
            </div>
            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>sddsd</li>
              <li>dsfsdsf</li>
              <li>fsdfdfds</li>
              <li>sdfsdf</li>
            </div>

            <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">
              Quality assurance :{" "}
            </div>
            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>sddsd</li>
              <li>dsfsdsf</li>
              <li>fsdfdfds</li>
              <li>sdfsdf</li>
            </div>
          </div>

          <div className=" w-[100%] lg:h-auto h-[550px] border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4">
            <div className="text-black text-base font-bold font-Barlow tracking-wider">
              OTHER CUSTOMISED SCHEMES
            </div>

            <div className="text-black text-xl font-normal font-Barlow ml-3">
              <li>sddsd</li>
              <li>dsfsdsf</li>
              <li>fsdfdfds</li>
              <li>sdfsdf</li>
            </div>
          </div>
        </div>

        <Accordion />
        <Accordion2 />
        <Accordion3 /> */}

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">
          Customers
        </div>

        <CustomerLogos2 />

        {/* <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio ">
          DOWNLOADS
        </div>

        <div className="lg:flex gap-x-5 lg:mt-[46px] mt-6">
          <div className="lg:w-[60%] w-[100%]">
            <div className="w-[280px] text-black lg:text-xl text-lg font-medium  font-Barlow tracking-wider ">
              TECHNICAL PAPERS
            </div>
            <div className=" lg:mt-[27px] ml-3 ">
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-PowerGen-Middle-East-2008.pdf"
                target="_blank"
              >
                {" "}
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium lg:mt-12 mt-5 ">
                  A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems
                  – A Systems Solution Approach”, PowerGen-Middle East, Panama,
                  Bahrain, Feb 2008
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-IEEE-POWERCON-2008.pdf"
                target="_blank"
              >
                {" "}
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems
                  – A Systems Solution Approach”, IEEE POWERCON Conference, New
                  Delhi, India, Oct 2008.
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/BTS-2000-Conference-Paper-NPSC-2008.pdf"
                target="_blank"
              >
                {" "}
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems
                  – A Systems Solution Approach”, National Power Systems
                  Conference, Mumbai, India, Dec 2008.
                </li>
              </a>
            </div>
          </div>

          <div className="">
            <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">
              PRESENTATIONS
            </div>
            <div className="space-y-4  lg:mt-[46px] mt-5 ml-3">
              <a
                href="https://www.figma.com/exit?url=http%3A%2F%2Faartechsolonics.com%2F%2Fwp-content%2Fuploads%2F2019%2F02%2FBTS-2000-2008-PowerGen-Middle-East-Fast-Bus-Transfer-Systems-A-System-Solution-Approach.ppt"
                target="_blank"
              >
                {" "}
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium">
                  BTS 2000-2008 – PowerGen Middle East Fast Bus Transfer Systems
                  – A System Solution Approach.ppt
                </li>
              </a>
            </div>
          </div>

          <div className="">
            <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">
              CASE STUDIES
            </div>
            <div className="  lg:mt-[46px] mt-6 ml-3">
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Auto-Transfer-Requirements-in-Bus-Transfer-Schemes.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Auto Transfer Requirements in Bus Transfer
                  Schemes.pdf
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Automatic-Station-to-Station-Bus-Transfer-to-avoid-AC-Failure.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Automatic Station-to-Station Bus Transfer to
                  avoid AC Failure.pdf
                </li>
              </a>

              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Breaker-Mechanism-Problem.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Breaker Mechanism Problem.pdf
                </li>
              </a>

              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Spin-Down-Characteristics-for-Evaluating-Sequential-Fast-Transfer.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Spin Down Characteristics – for Evaluating
                  Sequential Fast Transfer.pdf
                </li>
              </a>

              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Unit-to-Station-Half-Station-to-Station-Scheme.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Unit-to-Station + Half Station-to-Station
                  Scheme.pdf
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Writeup.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study IEEE WG Report – Oscillographic Report and Analysis
                  – Writeup.pdf
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Oscillographs.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study IEEE WG Report – Oscillographic Report and Analysis
                  – Oscillographs.pdf
                </li>
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Flywheel;
