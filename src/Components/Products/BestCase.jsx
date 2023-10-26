import React, { useState } from "react";
import { Navbar, Footer, Accordion, Accordion2, Accordion3 } from "../index";
import { best1, best2, best3, best4, best5 } from "../../assets/proImages";
import { BTS1 } from "../../assets/pdf";
import { ImageSelect } from "../ImageSelector";
import { CustomerLogos2 } from "..";
import { download } from "../../assets/images"


import { tif, cCi, thermax, electro, dataTrack, threePin, rtk, hal, varuna, aemed } from '../../assets/WorkBlackLogos'
import { CustomWorkPages } from '../AutoScroll'



const BestCase = () => {
  const images = [best1, best2, best3, best4, best5];
  const [selectedTag, setSelectedTag] = useState("tag1");
  const [selectedProTag, setSelectedProTag] = useState("PTag1");

  const tagContents = {
    tag1: "Best Case provides timely access to quality enclosures for the Defense and Exploration sectors, ensuring the protection and reliability of equipment needed in critical missions. Their online platform offers customisable solutions and a commitment to continual improvement, supporting the specific requirements and challenges faced in these industries.",

    tag2: "Best Case facilitates the Renewable Energy sector by providing cost-effective, high-quality enclosures for sensitive equipment and prototypes, ensuring the seamless development and deployment of renewable energy technologies.",

    tag3: "BestCase facilitates the non-renewable energy sector by providing readily available, high-quality enclosures for critical equipment, ensuring reliability and efficiency in energy production and distribution.",

    tag4: "BestCase provides healthcare professionals with timely access to high-quality, affordable, and readily available enclosures for medical equipment, ensuring they can showcase their innovations and products effectively, meeting the stringent requirements of the healthcare industry.",

    tag5: "Best Case ensures IT and Telecom professionals have access to high-quality, affordable, and readily available enclosures for their equipment, enabling them to meet demanding production and demonstration needs with confidence.",

    tag6: "Best Case ensures seamless access to high-quality and affordable enclosures for power transmission and distribution projects, guaranteeing the reliability and safety of vital equipment while meeting budgetary constraints.",

    tag7: "BestCase ensures secure transportation of delicate equipment and prototypes by providing high-quality, customisable enclosures that protect your products during transit, guaranteeing they arrive in optimal condition for demonstrations and trials.",

    tag8: "Best Case streamlines access to high-quality, cost-effective enclosures for Heavy Engineering Industries, ensuring timely availability and customisation options. This support enhances product development, transportation of delicate equipment, and presentations, aligning with industry benchmarks for success.",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
    // Set the selected tag
  };

  const handleProClick = (tag) => {
    setSelectedProTag(tag);
  };

  const partnerImageSources = [
    tif, cCi, thermax, electro, dataTrack, threePin, rtk, hal, varuna, aemed
  ];
  return (
    <div>
      <Navbar />

      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <div className="flex lg:flex-row flex-col lg:mt-20">
          <div className="lg:hidden text-black text-[28px] font-normal font-antonio">
            Best Case
          </div>
          <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">
            PRODUCTS
          </div>

          <ImageSelect images={images} />
          <div className="lg:w-[55%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Best Case
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              PRODUCTS
            </div>
            <div className="flex flex-col justify-between  lg:h-[330px]">
              <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">The Entrepreneurs, innovators, and product professionals often struggle to access affordable, high-quality enclosures for their prototypes and products. Traditional options are costly and inflexible, while local alternatives may lack quality. BestCase offers a solution by providing convenient online access to a range of enclosures, ensuring your products meet the highest standards. Our commitment to quality, affordability, and availability means you can rely on us for your enclosure needs, whether standard or custom. We're here to support your business success 24/7.                         </div>
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
            Defence & Exploration
          </button>
          <button
            className={`tag ${selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Renewable Energy
          </button>

          <button
            className={`tag ${selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Healthcare
          </button>
          <button
            className={`tag ${selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            IT & Telecom
          </button>
        </div>
        <div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Power Transmission and Distribution
          </button>

          <button
            className={`tag ${selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            Transportation
          </button>
          <button
            className={`tag ${selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px]   py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            Heavy Engineering Industries
          </button>
        </div>

        {/*     mobile-------------------------------------------------------------*/}

        <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
          <button
            className={`tag ${selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap uppercase border  text-base font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Defence & Exploration
          </button>
          <button
            className={`tag ${selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap uppercase border  text-base font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Renewable Energy
          </button>

          <button
            className={`tag ${selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap uppercase border  text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Non-Renewable Energy
          </button>

          <button
            className={`tag ${selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap uppercase  border  text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Healthcare
          </button>
          <button
            className={`tag ${selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap uppercase  border  text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            IT & Telecom
          </button>
          <button
            className={`tag ${selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap uppercase  border  text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            POWER TRANSMISSION AND DISTRIBUTION
          </button>
          <button
            className={`tag ${selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap uppercase  border  text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            TRANSPORTATION
          </button>
          <button
            className={`tag ${selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400"
              } w-auto h-[49px] px-[20px] py-[9px] whitespace-nowrap uppercase  border  text-lg font-normal font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
          >
            HEAVY ENGINEERING INDUSTRIES
          </button>
        </div>

        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug ">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>
        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          FEATURES
        </div>
        <div className="lg:flex  justify-between mt-8 ">
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
            <p className="list-dots">High Continuous Current- up to 5000A</p>
            <p className="list-dots">
              Electronically Triggered – Permits breakers to work up to their
              ratings.
            </p>
            <p className="list-dots">
              Redundant Sensing – Provides backup sensing
            </p>
            <p className="list-dots">
              Low Fault En className="list-dots"ergy Let-through – Reduce Damage
            </p>
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
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-16 lg:mt-0 mt-6">
            <p className="list-dots">
              Very High Interrupt Ratings – Upto 120kA rms symmetrical
            </p>
            <p className="list-dots">
              Wide Environmental Range – Indoor/Outdoor Applications
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
        <CustomWorkPages imageSources={partnerImageSources} />

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio ">
          DOWNLOADS
        </div>

        <div className="lg:flex gap-x-5 lg:mt-[46px] mt-6">
          <div className="lg:w-[60%] w-[100%]">
            <div className="w-[280px] text-black lg:text-xl text-lg font-medium  font-Barlow tracking-wider ">
              TECHNICAL PAPERS
            </div>
            <div className=" lg:mt-[27px] ml-3 ">
              
            <a href={BTS1} target="_blank">
              
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BestCase;
