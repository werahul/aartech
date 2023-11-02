import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { product1 } from "../../assets/workImages";
import { download } from "../../assets/images";
import { Accordion, Accordion2, Accordion3 } from "../../Components";
import { CustomerLogos2 } from "../../Components";

import { ImageSelect } from "../ImageSelector";
import { clip1, clip2, clip3, clip4, clip5 } from "../../assets/proImages";
import {
  camal,
  ube,
  holcim,
  regent,
  oxy,
  bp,
  viet,
  nghi,
  totalE,
  petronas,
  ptt,
  Ambatovy,
} from "../../assets/WorkBlackLogos";
import { CustomWorkPages } from "../AutoScroll";

const ClipF = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1");
  const images = [clip1, clip2, clip3, clip4, clip5];

  const tagContents = {
    tag1: "CLiP® Fault Current Limiters boost electrical safety in Defense and Exploration with up to 38kV and 5000A current limitations, averting overcurrent issues. Their flexibility and rapid operation suit various applications, safeguarding vital equipment and ensuring reliable power in demanding settings.   ",

    tag2: "CLiP® Fault Current Limiters ensure grid stability and protect sensitive equipment in renewable energy systems (2.8kV to 38kV). Their compact design integrates seamlessly, reducing overcurrent risks and enhancing system reliability, making them essential for efficient and sustainable power generation.  ",

    tag3: "CLiP® Fault Current Limiters enhance Non-Renewable Energy stability, offering current limitations for 2.8-38kV systems with up to 5000A continuous current ratings. Their versatile design allows indoor/outdoor installation, delivering cost-effective overcurrent protection for transformers and system upgrades.",

    tag4: "CLiP® Fault Current Limiters enhance grid stability in Power Transmission and Distribution by limiting currents in 2.8-38kV systems with up to 5000A ratings. Their versatile design supports indoor/outdoor installation, providing reliable overcurrent protection for transformers ultimately improving network stability.        ",

    tag5: "CLiP® Fault Current Limiters are vital in Heavy Engineering, limiting currents in 2.8-38kV systems up to 5000A, with versatile indoor/outdoor installation, ensuring robust operations for critical equipment like transformers and generators in demanding heavy engineering applications.",

    tag6: "CLiP® Fault Current Limiters enhance healthcare electrical safety by limiting currents in 2.8-38kV systems, ensuring uninterrupted service for critical medical equipment and preventing electrical hazards.",

    tag7: "CLiP® Fault Current Limiters are valuable for IT and Telecom applications, providing current limitations for 2.8-38kV systems and ensuring electrical system safety. Their versatile design allows indoor/outdoor installation, safeguarding critical IT infrastructure, preventing downtime, and enhancing the reliability of telecom networks.         ",

    tag8: "CLiP® Fault Current Limiters enhance electrical safety in Transportation, limiting currents for 2.8-38kV systems, ensuring system reliability in vehicles and transportation infrastructure. Their compact design seamlessly integrates, preventing electrical disruptions and enhancing network safety.        ",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
  };
  const partnerImageSources = [
    camal,
    ube,
    holcim,
    regent,
    oxy,
    bp,
    viet,
    nghi,
    totalE,
    petronas,
    ptt,
    Ambatovy,
  ];
  return (
    <div>
      <Navbar />
      <SlideInBar/>
      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-28 pt-10 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">
          CLIP Fault Current Limiters
        </div>
        <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">
          PRODUCTS
        </div>

        <div className="lg:flex lg:mt-20">
          <ImageSelect images={images} />

          <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              CLIP Fault Current Limiters
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              PRODUCTS
            </div>
            <div className="flex flex-col justify-between  lg:h-[330px]">
              <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                CLiP® (Current Limiting Protectors) offer current limitations
                for 2.8-38kV systems with up to 5000A continuous current
                ratings. Their compact, sealed design allows for indoor or
                outdoor installation, pole or structure mounting, or enclosure
                placement. CLiP combines high continuous current ratings,
                current limitation, and ultra-fast operation in one
                cost-effective package, making it ideal for various overcurrent
                protection needs like system upgrades, reactor bypass,
                transformer protection, cogeneration, lower breaker ratings, and
                close bus ties.{" "}
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
              Low Fault Energy Let-through – Reduce Damage{" "}
            </p>
            <p className="list-dots">Also available with Communicable Relays</p>
          </div>

          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-16 lg:mt-0 mt-6">
            <p className="list-dots">
              Very High Interrupt Ratings – Upto 120kA rms symmetrical{" "}
            </p>
            <p className="list-dots">
              Wide Environmental Range – Indoor/Outdoor Applications{" "}
            </p>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          CUSTOMISATION
        </div>
        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug mt-8">
          Aartech provides tailored solutions for the CLiP®, accommodating
          different requirements by adjusting its settings and configurations.
          Whether it's for system upgrades, transformer protection, or close bus
          ties, CLiP® can be customised to meet specific overcurrent protection
          needs. If you have any custom-specific requirements, please mail us
          with details of your system at our email id{" "}
          <a href="mailto:clip@aartechsolonics.com">
            {" "}
            <span className="text-red-600 hover:underline cursor-pointer">
              clip@aartechsolonics.com
            </span>
          </a>
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
              href="https://drive.google.com/file/d/1EA42h3vhBPeM0C68mZxbZ4e0dh1hsL7l/view"
              className="underline hover:font-medium"
            >
              CLiP-15kV-1200A-Pole-Mounted
            </a>
          </p>
          <p className="list-dots">
            <a
              href="https://drive.google.com/file/d/1GkTYofAEpWisi5G-qlO7BK049mrMkicg/view"
              className="underline  hover:font-medium"
            >
              CLiP-15kV-3000A-Channel-Mounted
            </a>
          </p>
          <p className="list-dots">
            <a
              href="https://drive.google.com/file/d/1o4ptLDXev5PS69IbG5ZeqwRvRj0Z6hik/view"
              className="underline  hover:font-medium"
            >
              CLiP-15kV-3000A-with-Padmount-Enclosure
            </a>
          </p>
          <p className="list-dots">
            <a
              href="https://drive.google.com/file/d/1NvshCnxMzBkwLe4j4NFeH10ukBZ-itH4/view"
              className="underline  hover:font-medium"
            >
              IEEE_Fault-Current-Limiters_Utility-Perspective_2006
            </a>
          </p>
          <p className="list-dots">
            <a
              href="https://drive.google.com/file/d/1YlCAsJ69cTdK__Er2KDJU3PC8HqEQmWR/view"
              className="underline  hover:font-medium"
            >
              SPE-2009-Integration-of-Fault-Current-Limiters-at-a-Cement (2)
            </a>
          </p>
          <p className="list-dots">
            <a
              href="https://drive.google.com/file/d/1BRtVQMg8Xd1GVLeoAZUNABgvds-F3TJN/view"
              className="underline  hover:font-medium"
            >
              SPE-2009-Integration-of-Fault-Current-Limiters-at-a-Cement-Plant
              (1)
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClipF;
