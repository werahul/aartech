import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { product1 } from "../../assets/workImages";
import { download } from "../../assets/images";
import { Accordion, Accordion2, Accordion3 } from "..";
import { CustomerLogos2 } from "..";

import { ImageSelect } from "../ImageSelector";
import { cp1, cp2, cp3, cp4, cp5 } from "../../assets/proImages";
import {
    ac1, blank
} from "../../assets/IndImages";
import { indRail, CapS, CapG, hp } from "../../assets/WorkBlackLogos";
import { SolidWasteAuto } from "../AutoScroll";

const AcAndDc = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only

    const [selectedTag, setSelectedTag] = useState("tag1");
    const images = [ac1, blank, blank, blank, blank];

    const tagContents = {
        tag1: "TDC UPS systems are vital in Defense and Exploration, providing uninterrupted power, preventing disruptions during voltage fluctuations, and ensuring secure operations with customisable features, bolstering mission reliability and success. ",

        tag2: "DC UPS systems in heavy engineering ensure uninterrupted power, safeguard against voltage issues, and allow customisation for safety-critical applications in Germany, featuring robust technology and a broad power range.        ",

        tag3: "DC UPS systems ensure uninterrupted power for healthcare, with features like microcontroller support and adjustable backup time, guaranteeing reliable operation in critical medical settings, produced in Germany for enhanced safety.",

        tag4: "J. Schneider's DC UPS systems guarantee continuous power for IT and Telecom, featuring microcontroller-assisted charging, load shedding, adjustable backup time, robustness, customisation, and safety applications support, ensuring reliable power supply.        ",

        tag5: "DC UPS systems provide secure control and uninterrupted processes. Features like microcontroller support, adjustable backup time, and cascade power supply enhance reliability and safety, making them ideal for transportation applications.        ",

        tag6: "DC UPS systems in waste management guarantee continuous power, safeguarding control processes amid voltage disruptions. Their versatility, with microcontroller support, adjustable backup times, and cascading power supply, ensures robust, reliable operations.",

    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };

    const partnerImageSources = [indRail, CapS, CapG, hp];
    return (
        <div>
            <Navbar />
            <SlideInBar/>
            <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20  pt-10 px-5 lg:mt-0 mt-5 sm:px-10">
                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">
                    AC and DC UPS
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">
                    PRODUCTS
                </div>

                <div className="lg:flex lg:mt-20">
                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
                            AC and DC UPS
                        </div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
                            PRODUCTS
                        </div>
                        <div className="flex flex-col justify-between  lg:h-[330px]">
                            <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                                J. Schneider offers DC UPS systems with microcontroller-supported charging and discharging, load shedding, and customizable backup times, ensuring control and process protection. These systems, with a 0.2 to 600 A range, are compatible with 12/24/48 V DC voltages and are ideal for safety-critical applications, with German development and production. They offer robust technology, cascading capabilities, and customizability for complete systems, making them a reliable choice for power stability in critical applications.
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
                        className={`tag ${selectedTag === "tag1"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag1")}
                    >
                        Defence & Exploration
                    </button>

                    <button
                        className={`tag ${selectedTag === "tag2"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag2")}
                    >
                        Heavy Engineering Industries
                    </button>
                    <button
                        className={`tag ${selectedTag === "tag3"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag3")}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === "tag4"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag4")}
                    >
                        IT & Telecom
                    </button>

                    <button
                        className={`tag ${selectedTag === "tag5"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag5")}
                    >
                        Transportation
                    </button>
                </div>
                <div className="lg:flex hidden space-x-3 mt-3">
                    <button
                        className={`tag ${selectedTag === "tag6"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag6")}
                    >
                        Waste Management
                    </button>

                </div>

                {/*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedTag === "tag1"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag1")}
                    >
                        Defence & Exploration
                    </button>

                    <button
                        className={`tag ${selectedTag === "tag2"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag2")}
                    >
                        Heavy Engineering Industries
                    </button>
                    <button
                        className={`tag ${selectedTag === "tag3"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag3")}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === "tag4"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag4")}
                    >
                        IT & Telecom
                    </button>

                    <button
                        className={`tag ${selectedTag === "tag5"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag5")}
                    >
                        Transportation
                    </button>

                    <button
                        className={`tag ${selectedTag === "tag6"
                            ? "bg-white text-box-red border-box-red"
                            : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick("tag6")}
                    >
                        Waste Management
                    </button>

                </div>
                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug">
                    
                    {selectedTag && tagContents[selectedTag]}
                </div>

                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
                    FEATURES
                </div>

                <div className="lg:flex  justify-start mt-8 ">
                    <div className="text-black lg:text-2xl text-base space-y-1 lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
                        <p className="list-dots">Robust technology </p>
                        <p className="list-dots">The large product range in the power range 0.2 - 600 A</p>
                        <p className="list-dots">Voltages from 12/24/48 V DC</p>
                        <p className="list-dots">Development and production exclusively in Germany</p>
                        <p className="list-dots"> Development of customised complete systems</p>
                        <p className="list-dots"> Many programmable features</p>
                        <p className="list-dots"> Production for safety applications</p>

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
                  
                </div>

                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
                    CUSTOMISATION
                </div>
                <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug mt-8">
                Aarchtech excels in tailoring J. Schneider's DC UPS systems to diverse requirements, offering customisation for complete systems. With programmable features, compatibility with various voltages, and German engineering, they ensure reliability for critical applications, guaranteeing power stability.
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
                <CustomerLogos2/>

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

export default AcAndDc;