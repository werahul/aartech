import React, { useState } from "react";
import { Navbar, Footer, Accordion, Accordion2, Accordion3, SlideInBar } from "../index";

import { Load1, Load2, Load3, Load4, Load5 } from "../../assets/IndImages";

import { ImageSelect } from "../ImageSelector";

import { CustomerLogos2 } from "..";
import { download } from "../../assets/images";

const LoadChecker = () => {
  const images = [Load1, Load2, Load3, Load4, Load5];
  const [selectedTag, setSelectedTag] = useState("tag1");
  const [selectedProTag, setSelectedProTag] = useState("PTag1");

  const tagContents = {
    tag1: "Load Checker safeguards the Defence and Exploration sectors by preventing equipment damage due to excessive current, offering automated reset and enhancing energy management, and ensuring reliability and cost-effectiveness for critical applications.",

    tag2: "Load Checker, a crucial tool in renewable energy, blocks excessive current, ensuring uninterrupted power for load management and grid optimisation. It minimises manual intervention, benefiting utilities and consumers across sectors.",

    tag3: "Load Checker improves Non-Renewable Energy sector efficiency by blocking excess current and optimising load management. Its self-reset feature ensures power stability and reduces manual interventions, benefiting consumers and distribution utilities.",

    tag4: "Load Checker is a load-limiting device that improves power distribution by preventing excessive current, promoting fair energy allocation and supporting smart grids. It automates control, reduces manual intervention, and enhances efficiency.",

    tag5: "Load Checker automates load control in heavy engineering, preventing overloads, reducing manual intervention, and enhancing energy efficiency. It's particularly valuable for sectors like railways and distributed generation, optimising power management.",

    tag6: "Load Checker ensures stable power in healthcare settings by preventing excess current, offering a self-reset feature for consistent performance, reducing manual intervention, and enhancing device longevity. Vital for critical load management.",

    tag7: "Load Checker, by Aartech, aids the IT and Telecom industry with efficient power management. It prevents excessive current self-resets and facilitates cost-effective load control, reducing non-technical losses and the need for resource-intensive metering.",

    // tag8: "Best Case streamlines access to high-quality, cost-effective enclosures for Heavy Engineering Industries, ensuring timely availability and customisation options. This support enhances product development, transportation of delicate equipment, and presentations, aligning with industry benchmarks for success.",
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
      <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <div className="lg:hidden text-black text-[28px] font-normal font-antonio">
            Load Checker
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-2 mt-1">
            PRODUCTS
          </div>

          <ImageSelect images={images} />
          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Load Checker
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              PRODUCTS
            </div>
            <div className="flex flex-col justify-between  lg:h-[330px]">
              <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                LoadChecker is designed to safeguard your electrical systems by
                automatically cutting off the mains supply if it detects
                excessive current. Thanks to its patented self-reset feature, it
                will restore power to your load once it has been disconnected
                for a brief period, all without any manual intervention. This
                technology ensures an extended lifespan for the product while
                maintaining your electrical safety.
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
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Defence and Exploration
          </button>
          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Renewable Energy
          </button>

          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Power Transmission and Distribution
          </button>
        </div>
        <div className="lg:flex hidden space-x-3 mt-4">
          {" "}
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Heavy Engineering Industries
          </button>
          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Healthcare
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            IT and Telecom
          </button>
        </div>

        {/*     mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-3 overflow-auto">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Defence and Exploration
          </button>
          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Renewable Energy
          </button>

          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Power Transmission and Distribution
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Heavy Engineering Industries
          </button>
          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Healthcare
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            IT and Telecom
          </button>
        </div>

        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-3 lg:leading-tight leading-snug ">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>
        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          FEATURES
        </div>
        <div className="lg:flex  justify-start lg:mt-4 mt-2 ">
          <div className="text-black lg:text-2xl text-base space-y-1 lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
            <p className="list-dots">Alternative to 100%</p>
            <p className="list-dots">Highly Economic</p>
            <p className="list-dots">Highly Effective</p>

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
          <div className="text-black lg:text-2xl space-y-1 text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-80 lg:mt-0 mt-1">
            <p className="list-dots">Minimum investment</p>
            <p className="list-dots">Zero maintenance</p>
            <p className="list-dots">Zero Upkeep cost</p>
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
        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:mt-4 mt-2">
          Aartech offers adaptable settings and parameters, allowing users to
          fine-tune the Load Checker to specific requirements. This
          customisation ensures optimal electrical safety and extended product
          longevity. If you have any custom specific requirements, mail us with
          details of your system at our email id{" "}
          <a href="mailto:lc@aartechsolonics.com">
            {" "}
            <span className="text-red-600 hover:underline cursor-pointer">
              lc@aartechsolonics.com
            </span>
          </a>{" "}
          .
        </div>

        {/* <div className="lg:flex hidden lg:flex-row flex-col gap-x-[28px] gap-y-6 lg:mt-20 mt-10">
          <div className=" w-[100%] h-auto border border-slate-900 lg:py-[59px] py-6 lg:px-[39px] px-4">
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

          <div className=" w-[100%] h-auto border border-slate-900 lg:py-[59px] py-6 lg:px-[39px] px-4">
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

          <div className=" w-[100%] lg:h-auto h-[550px] border border-slate-900 lg:py-[59px] py-6 lg:px-[39px] px-4">
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
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
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
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium">
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
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
                  Case Study – Auto Transfer Requirements in Bus Transfer
                  Schemes.pdf
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Automatic-Station-to-Station-Bus-Transfer-to-avoid-AC-Failure.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
                  Case Study – Automatic Station-to-Station Bus Transfer to
                  avoid AC Failure.pdf
                </li>
              </a>

              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Breaker-Mechanism-Problem.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
                  Case Study – Breaker Mechanism Problem.pdf
                </li>
              </a>

              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Spin-Down-Characteristics-for-Evaluating-Sequential-Fast-Transfer.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
                  Case Study – Spin Down Characteristics – for Evaluating
                  Sequential Fast Transfer.pdf
                </li>
              </a>

              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-Unit-to-Station-Half-Station-to-Station-Scheme.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
                  Case Study – Unit-to-Station + Half Station-to-Station
                  Scheme.pdf
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Writeup.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
                  Case Study IEEE WG Report – Oscillographic Report and Analysis
                  – Writeup.pdf
                </li>
              </a>
              <a
                href="https://aartechsolonics.com//wp-content/uploads/2019/02/Case-Study-IEEE-WG-Report-Oscillographic-Report-and-Analysis-Oscillographs.pdf"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow hover:underline hover:font-medium mt-5">
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

export default LoadChecker;
