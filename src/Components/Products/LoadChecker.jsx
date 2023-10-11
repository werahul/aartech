import React, { useState } from "react";
import { Navbar, Footer, Accordion, Accordion2, Accordion3 } from "../index";

import { solar1, solar2, solar3, solar4, solar5 } from "../../assets/proImages";

import { ImageSelect } from "../ImageSelector";

import { CustomerLogos2 } from "..";
import { download } from "../../assets/images";

const LoadChecker = () => {
  const images = [solar1, solar2, solar3, solar4, solar5];
  const [selectedTag, setSelectedTag] = useState("tag1");
  const [selectedProTag, setSelectedProTag] = useState("PTag1");

  const tagContents = {
    tag1: "Load Checker enhances the Power Distribution Industry by preventing excessive current, ensuring electrical system safety, and promoting load management efficiency through automatic cut-off and self-reset features.",

    tag2: "Load Checker safeguards Hydro Power systems, preventing damage from excessive current. Its automatic cut-off and self-reset features ensure an uninterrupted power supply, enhancing the reliability of hydroelectric plants.",

    tag3: "LoadChecker ensures the safety of Solar Power systems by automatically disconnecting excessive current, protecting against overloads, and aiding in system longevity with its self-reset feature, contributing to reliable and sustainable solar energy solutions.",

    tag4: "LoadChecker enhances Wind Power by ensuring system safety with automatic cut-off for excessive current, optimising load management, and boosting reliability in distributed wind power systems for applications like lighting with modest load needs.",

    tag5: "LoadChecker ensures Biomass Power reliability by automatically cutting off excess current, facilitating efficient load management, enabling off-grid lighting solutions in rural areas, enhancing access to sustainable energy solutions and improving living standards.",

    tag6: "LoadChecker boosts Diesel Power reliability by preventing overload-related system tripping, promoting efficient load management, and ensuring uninterrupted basic facility supply like lighting in backup systems, improving operational and commercial aspects.",

    tag7: "LoadChecker aids the Railway industry by enhancing electrical safety, enabling easy device charging with load control, and offering cost-effective power management solutions at access points, ultimately improving operational efficiency.",

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

      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <div className="lg:hidden text-black text-[28px] font-normal font-antonio">
            Load Checker
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">
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
                LoadChecker is designed to safeguard your electrical systems by automatically cutting off the mains supply if it detects excessive current. Thanks to its patented self-reset feature, it will restore power to your load once it has been disconnected for a brief period, all without any manual intervention. This technology ensures an
                extended lifespan for the product while maintaining your
                electrical safety.
              </div>
              <div className="flex items-center lg:mt-auto mt-12 cursor-pointer">
                <img src={download} alt="" />
                <div className="text-foot-blue hover:text-box-red lg:text-lg text-base font-bold font-Barlow tracking-wider ml-[10px]">DOWNLOAD BROCHURE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          INDUSTRIES
        </div>
        <div className="lg:flex hidden space-x-3 mt-8">
          <button
            className={`tag ${selectedTag === "tag1"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Power Distribution
          </button>
          <button
            className={`tag ${selectedTag === "tag2"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Hydro
          </button>

          <button
            className={`tag ${selectedTag === "tag3"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Solar
          </button>
          <button
            className={`tag ${selectedTag === "tag4"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Wind
          </button>
          <button
            className={`tag ${selectedTag === "tag5"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Biomass
          </button>
          <button
            className={`tag ${selectedTag === "tag6"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Diesel
          </button>
          <button
            className={`tag ${selectedTag === "tag7"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Railways
          </button>
        </div>
        {/* <div className="lg:flex hidden space-x-3 mt-3"> */}
        {/* <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Healthcare
          </button> */}

        {/* <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            IT & Telecom
          </button> */}
        {/* <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
            } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Heavy Engineering Industries
          </button> */}
        {/* </div> */}

        {/*     mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${selectedTag === "tag1"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Power Distribution
          </button>
          <button
            className={`tag ${selectedTag === "tag2"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Hydro
          </button>

          <button
            className={`tag ${selectedTag === "tag3"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Solar
          </button>
          <button
            className={`tag ${selectedTag === "tag4"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Wind
          </button>
          <button
            className={`tag ${selectedTag === "tag5"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Biomass
          </button>
          <button
            className={`tag ${selectedTag === "tag6"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Diesel
          </button>
          <button
            className={`tag ${selectedTag === "tag7"
              ? "bg-white text-box-red border-box-red"
              : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Railways
          </button>
        </div>

        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug ">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>
        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          FEATURES
        </div>
        <div className="lg:flex  justify-start mt-8 ">
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
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
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-80 lg:mt-0 mt-6">
            <p className="list-dots">Minimum investment</p>
            <p className="list-dots">Zero maintenance</p>
            <p className="list-dots">Upkeep cost</p>
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
          BTS 2000 is generally customised to project specific requirements.
          While there may be certain product configurations that are similar if
          not identical between projects, there is always a need to ensure that
          the switchgear circuits are appropriately designed and integrated to
          match the bus transfer requirements. <br />
          <br />
          The product range illustrated to the right are therefore meant to
          serve as a general reference while specifics may vary on a case to
          case basis.
          <br />
          <br />
          Please mail your custom specific requirements along with a copy of
          your Single Line Diagram (SLD), Specifications (if any) and
          Operational Philosophy to bts@aartechsolonics.com . We would be happy
          to assist you with our recommendations in the best possible manner.
        </div>

        <div className="lg:flex hidden lg:flex-row flex-col gap-x-[28px] gap-y-6 lg:mt-20 mt-10">
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
        <Accordion3 />

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">
          Customers
        </div>
        <CustomerLogos2 />

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio ">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoadChecker;
