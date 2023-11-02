import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { product1 } from "../../assets/workImages";
import { download } from "../../assets/images";
// import { Accordion, Accordion2, Accordion3 } from "../../Components"
import { CustomerLogos2 } from "../../Components";

import { ImageSelect } from "../ImageSelector";
import { cp1, cp2, cp3, cp4, cp5 } from "../../assets/proImages";
import {
  pspcl,
  pstcl,
  hvpn,
  CapW,
  d,
  cptcl,
  madhyaVidhut,
  rajsthanVidhut,
  purvanchanlVidhut,
  UpPower,
  tamilNaduVidhut,
} from "../../assets/WorkBlackLogos";
import { CustomWorkPages } from "../AutoScroll";

const ControlRelay = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1");
  const images = [cp1, cp2, cp3, cp4, cp5];

  const tagContents = {
    tag1: "Control Relay Panels are indispensable in Defence and exploration by ensuring seamless control of 11KV and 33KV electrical equipment via outdoor switchgear. These panels, equipped with relays, fuses, and switches, provide robust monitoring and control capabilities, enhancing the reliability and efficiency of critical systems in defence applications and exploration ventures.     ",

    tag2: "Control Relay Panels are crucial in Renewable Energy, efficiently overseeing 11KV and 33KV equipment via outdoor switchgear. Equipped with relays, fuses, and switches, they ensure reliable operation and grid integration of transformers and generators, optimising renewable energy systems.    ",

    tag3: "Control Relay Panels are vital for Non-Renewable Energy, offering precise control of 11KV and 33KV equipment via outdoor switchgear. Equipped with relays, fuses, and switches, they optimise the management of transformers, generators, and circuit breakers, enhancing system reliability and stability",

    tag4: "Control Relay Panels play a crucial role in Power Transmission and Distribution by efficiently managing 11KV and 33KV equipment through outdoor switchgear. They ensure seamless operation of transformers, generators, and circuit breakers, enhancing the reliability of electrical supply systems.   ",

    tag5: "Control Relay Panels bolster Heavy Engineering by managing 11KV and 33KV equipment through outdoor switchgear, including relays, fuses, switches, and more. These panels oversee and regulate machinery like transformers, generators, and circuit breakers, ensuring efficient operations and safety in heavy engineering applications.",

    tag6: "Control Relay Panels contribute to Healthcare by ensuring reliable monitoring and control of critical electrical equipment such as transformers, generators, and circuit breakers within healthcare facilities. These self-contained units, designed for 11KV and 33KV equipment, enhance the safety and efficiency of power distribution, supporting uninterrupted operations in healthcare settings.",

    tag7: "Control Relay Panels play a vital role in IT and Telecom sectors by efficiently monitoring and controlling electrical equipment, including transformers, generators, and circuit breakers. These self-contained units, designed for 11KV and 33KV systems, enhance the reliability of power supply, ensuring uninterrupted operations critical for IT and Telecom infrastructure.        ",

    tag8: "Control Relay Panels are instrumental in Transportation as they effectively monitor and control critical electrical equipment such as transformers, generators, and circuit breakers, ensuring the reliability of power supply for various transportation systems and infrastructure contributing to safe and efficient operations.        ",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
  };

  const partnerImageSources = [
    pspcl,
    pstcl,
    hvpn,
    CapW,
    d,
    cptcl,
    madhyaVidhut,
    rajsthanVidhut,
    purvanchanlVidhut,
    UpPower,
    tamilNaduVidhut,
  ];
  return (
    <div>
      <Navbar />
      <SlideInBar/>
      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-28 pt-10 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">
          Control Relay Panels
        </div>
        <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">
          PRODUCTS
        </div>

        <div className="lg:flex lg:mt-20">
          <ImageSelect images={images} />

          <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              Control Relay Panels
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              PRODUCTS
            </div>
            <div className="flex flex-col justify-between  lg:h-[330px]">
              <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                A Control Relay Panel is a self-contained unit designed for
                controlling associated 11KV and 33KV line or transformer
                equipment via outdoor switchgear at zonal substations. These
                panels encompass main and auxiliary relays, annunciation relays,
                fuses, switches, wiring, terminal blocks, and more, providing a
                comprehensive solution. They are employed for monitoring and
                controlling electrical equipment like transformers, generators,
                and circuit breakers.{" "}
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
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Power Transmission and Distribution
          </button>
        </div>
        <div div className="lg:flex hidden space-x-3 mt-3">
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
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
            Healthcare
          </button>

          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            IT & Telecom
          </button>

          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
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
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Power Transmission and Distribution
          </button>
          <button
            className={`tag ${
              selectedTag === "tag5"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag5")}
          >
            Heavy Engineering Industries
          </button>

          <button
            className={`tag ${
              selectedTag === "tag6"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag6")}
          >
            Healthcare
          </button>
          <button
            className={`tag ${
              selectedTag === "tag7"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag7")}
          >
            IT & Telecom
          </button>

          <button
            className={`tag ${
              selectedTag === "tag8"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag8")}
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
        {/* <div className="flex items-center justify-between mt-8">
                <div class="text-black text-2xl font-medium font-Barlow ">KranKingTM for Your IC Engine Cranking Needs:</div>
                <div class="text-black text-2xl font-medium font-Barlow">KranKingTM Ultracapacitor Technology and Performance:</div>
                        </div>*/}

        <div className="lg:flex  justify-between mt-8 ">
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
            <p className="list-dots">
              Complete protection of transformer or feede{" "}
            </p>
            <p className="list-dots">Alarm & Annunciation features</p>
            <p className="list-dots">Simplex Construction</p>
            <p className="list-dots">
              Multiple Construction Choice (front door or rear door type){" "}
            </p>
            <p className="list-dots">Also available with Communicable Relays</p>
          </div>

          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-16 lg:mt-0 mt-6">
            <p className="list-dots">
              Multiple scheme configurations in a Single panel
            </p>
            <p className="list-dots">Compact</p>
            <p className="list-dots">CPRI tested</p>
            <p className="list-dots">
              Vendor Approved from government Utilities like MPEB – Jabalpur,
              Bhopal & Indore
            </p>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          CUSTOMISATION
        </div>
        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug mt-8">
          Aartech excels in customising Control Relay Panels to cater to
          diverse needs by seamlessly integrating specific components, ensuring
          optimal functionality for monitoring and controlling various
          electrical equipment at 11KV and 33KV levels. If you have any
          custom-specific requirements, please mail us with details of your
          system to our email id
          <a href="mailto:crp@aartechsolonics.com">
            {" "}
            <span className="text-red-600 hover:underline cursor-pointer">
              crp@aartechsolonics.com
            </span>
          </a>{" "}
          .
        </div>

        {/* <div className="lg:flex hidden lg:flex-row flex-col gap-x-[28px] gap-y-6 lg:mt-20 mt-10">

                    <div className=" w-[100%] h-auto border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4" >

                        <div className="text-black text-base font-bold font-['Barlow'] tracking-wider">MAIN - TIE - MAIN (3 BREAKER SCHEME)</div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Facilities : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Techniques & softwares : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Processes & standardisation : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>


                    </div>

                    <div className=" w-[100%] h-auto border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4" >

                        <div className="text-black text-base font-bold font-['Barlow'] tracking-wider">MAIN - TIE (2 BREAKER SCHEMES)</div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Locations : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>Mandideep, MP</li>
                            <li>Parwanoo, HP</li>


                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Testing facility : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>

                        <div className="text-black text-xl font-normal font-Barlow lg:mt-[44px] mt-6">Quality assurance : </div>
                        <div className="text-black text-xl font-normal font-Barlow ml-3">
                            <li>sddsd</li>
                            <li>dsfsdsf</li>
                            <li>fsdfdfds</li>
                            <li>sdfsdf</li>

                        </div>


                    </div>

                    <div className=" w-[100%] lg:h-auto h-[550px] border border-slate-900 lg:py-[40px] py-6 lg:px-[39px] px-4" >

                        <div className="text-black text-base font-bold font-Barlow tracking-wider">OTHER CUSTOMISED SCHEMES</div>


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
        <CustomWorkPages imageSources={partnerImageSources} />

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio">
          DOWNLOADS
        </div>

        <div className="lg:mt-[46px] font-Barlow text-[18px] space-y-3 mt-6">
          <p className="list-dots ">
            <a
              href="https://drive.google.com/file/d/1dAg9DOVY5fXUHN_tfKFF5YTxpdPcgD3E/view"
              className="underline hover:font-medium"
            >
              CR-panels-Literature
            </a>
          </p>
          <p className="list-dots">
            <a
              href="https://drive.google.com/file/d/1hbsiMwUI0pvItZcTY2rblfDv9j4GjUSp/view"
              className="underline  hover:font-medium"
            >
              SPA-Literature
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ControlRelay;
