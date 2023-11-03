import React, { useState, useEffect } from "react";
import { Navbar, Footer, SlideInBar } from "../index";
import { product1 } from "../../assets/workImages";
import { download } from "../../assets/images";
import { Accordion, Accordion2, Accordion3 } from "../../Components";
import { CustomerLogos2 } from "../../Components";

import { ImageSelect } from "../ImageSelector";
import { bts1, bts2, bts3, bts4 } from "../../assets/proImages";
import {
  adani,
  bhel,
  birla,
  cib,
  dvc,
  indianOil,
  jindal,
  Lt,
  maha,
  npcil,
  ntpc,
} from "../../assets/WorkBlackLogos";
import { CustomWorkPages } from "../AutoScroll";

const BTS2000 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only

  const [selectedTag, setSelectedTag] = useState("tag1");
  const images = [bts1, bts2, bts3, bts4, bts1];

  const tagContents = {
    tag1: "The BTS 2000 Fast Bus Transfer System maintains uninterrupted power in renewable energy setups by swiftly transferring power between sources under safe conditions, ensuring consistent energy generation. This reliability is crucial for optimising energy output and grid stability in renewables.        ",

    tag2: "The BTS 2000 Fast Bus Transfer System is crucial for non-renewable energy. It swiftly switches power between sources, ensuring uninterrupted power generation in applications like conventional power plants, minimising downtime, and maximising efficiency.",

    tag3: "The BTS 2000 Fast Bus Transfer System is vital in Heavy Engineering. It swiftly transfers power between sources, ensuring uninterrupted critical equipment operation, enhancing reliability and process efficiency.",

    tag4: "The BTS 2000 Fast Bus Transfer System is integral for healthcare facilities. It swiftly switches power sources to maintain a continuous supply, ensuring critical medical equipment remains operational. This seamless transition prevents disruptions in patient care and supports the reliability of healthcare services.",
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag); // Set the selected tag
  };

  const partnerImageSources = [
    adani,
    bhel,
    birla,
    cib,
    dvc,
    indianOil,
    jindal,
    Lt,
    maha,
    npcil,
    ntpc,
  ];
  return (
    <div>
      <Navbar />
      <SlideInBar/>
      <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-28 pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
        <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">
          BTS 2000 Fast Bus Transfer System
        </div>
        <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-2 mt-1">
          PRODUCTS
        </div>

        <div className="lg:flex lg:mt-20 ">
          <ImageSelect images={images} />

          <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
            <div className="lg:block hidden text-black text-4xl font-normal font-antonio">
              BTS 2000 Fast Bus Transfer System
            </div>
            <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">
              PRODUCTS
            </div>
            <div className="flex flex-col justify-between  lg:h-[330px]">
              <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                The BTS 2000 Fast Bus Transfer System represents a cutting-edge
                microprocessor-based solution designed specifically for Power
                Generation Utilities and Continuous Process Industries. Its
                primary function involves executing rapid motor bus transfers
                between two distinct power sources while adhering to predefined
                safety parameters. This ensures uninterrupted power supply to
                critical plant motors, effectively preventing any disruption to
                ongoing processes within the facility, even in the event of a
                power source contingency.
              </div>
              <div className="flex items-center lg:mt-auto  mt-8 cursor-pointer">
                <img src={download} alt="" />
                <div className="text-foot-blue hover:text-box-red lg:text-lg text-base font-bold font-Barlow tracking-wider ml-[10px]">
                  DOWNLOAD BROCHURE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-14">
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
            Renewable Energy
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Heavy Engineering Industries
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Healthcare
          </button>
        </div>

        {/*     mobile-------------------------------------------------------------*/}
        <div className="flex lg:hidden space-x-3 mt-3 overflow-auto">
          <button
            className={`tag ${
              selectedTag === "tag1"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag1")}
          >
            Renewable Energy
          </button>

          <button
            className={`tag ${
              selectedTag === "tag2"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag2")}
          >
            Non-Renewable Energy
          </button>
          <button
            className={`tag ${
              selectedTag === "tag3"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag3")}
          >
            Heavy Engineering Industries
          </button>
          <button
            className={`tag ${
              selectedTag === "tag4"
                ? "bg-white text-box-red border-box-red"
                : "text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red"
            } w-auto h-[49px] px-[10px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
            onClick={() => handleTagClick("tag4")}
          >
            Healthcare
          </button>
        </div>
        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-3 lg:leading-tight leading-snug">
          {" "}
          {selectedTag && tagContents[selectedTag]}
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          FEATURES
        </div>
        <div className="lg:flex  justify-between lg:mt-4 mt-2 ">
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug">
            <p className="list-dots">
              Fast Transfer with less than 2 cycles of dead bus time
            </p>
            <p className="list-dots">Simultaneous Fast Transfer</p>
            <p className="list-dots">Sequential Fast Transfer</p>
            <p className="list-dots">
              In Phase Transfer Mode with 2nd Order Prediction of First Phase
              Coincidence{" "}
            </p>
            <p className="list-dots">Residual Voltage Transfer Mode</p>
            <p className="list-dots">
              Protective Transfer Initiation on Upstream Protective Relay{" "}
            </p>
            <p className="list-dots">
              Intelligent Automatic Transfer Initiation using under/over
              voltage, frequency, |df/dt| criterion{" "}
            </p>
          </div>
          <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:ml-16 lg:mt-0 mt-6">
            <p className="list-dots">ANSI C50.41 2012 Compliant</p>
            <p className="list-dots">Comprehensive Online Testing</p>
            <p className="list-dots">Continuous Breaker Circuit Monitoring</p>
            <p className="list-dots">Smart Breaker Failure Processing</p>
            <p className="list-dots">Integrated System Interlocks</p>
            <p className="list-dots">
              Multiple Breaker Configurations in a Single Platform
            </p>
            <p className="list-dots">
              Advanced Software Tools for Virtual Testing
            </p>
            <p className="list-dots">
              Transfer Event Upload Replay “What If” Analysis,Oscilography &
              SOE.
            </p>
            <p className="list-dots">Standard communication protocols</p>
          </div>
        </div>

        <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">
          CUSTOMISATION
        </div>
        <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-tight leading-snug lg:mt-4 mt-2">
          The BTS 2000 Fast Bus Transfer System is highly customisable to meet
          project-specific needs. While some product configurations may resemble
          each other, each system is tailored to match the precise bus transfer
          requirements of the application. To ensure seamless integration,
          switchgear circuits are meticulously designed and adjusted
          accordingly. <br />
          <br />
          Our goal is to provide a solution that perfectly aligns with your
          unique needs. To begin customising your BTS 2000 system, please share
          your specific requirements, including your Single Line Diagram (SLD),
          specifications, and operational philosophy, with us at
          bts@aartechsolonics.com. We are dedicated to offering recommendations
          and assistance to meet your project's demands effectively.
          <br />
          <br />
          Please mail your custom specific requirements along with a copy of
          your Single Line Diagram (SLD), Specifications (if any) and
          Operational Philosophy to{" "}
          <a href="mailto:bts@aartechsolonics.com">
            {" "}
            <span className="text-red-600 hover:underline cursor-pointer">
              bts@aartechsolonics.com
            </span>
          </a>{" "}
          . We would be happy to assist you with our recommendations in the best
          possible manner.
        </div>

        <div className="hidden lg:block lg:mt-20 mt-10">
          <div className=" w-[100%] lg:py-[40px] py-6">
            <div className="text-[#0C013D] text-[18px] mb-[32px] font-bold font-Barlow tracking-wider">
              MAIN - TIE - MAIN (3 BREAKER SCHEME)
            </div>
            <div className="text-black text-[22px]  font-Barlow tracking-wider">
              <p>
                A tiebreaker facilitates the connection of two motor buses in a
                process industry setting, with two separate power sources,
                SOURCES I and II, capable of meeting the load for both Buses I &
                II off the grid. The SOURCE I transformer links to BUS I via the
                I/C-I incoming breaker, while the SOURCE II transformer connects
                to BUS II via the I/C-II incoming breaker. The TIE breaker
                interconnects BUS I and BUS II, enabling various bus transfer
                scenarios based on the chosen power supply to the motor buses.
              </p>
              <li>
                Normally closed TIE breaker: Both BUS I and BUS II are
                transferred between SOURCE I and SOURCE II as a single unit.{" "}
              </li>
              <li className="mb-4">
                Normally open TIE breaker: Each source independently supplies
                power to one motor bus. In case of source failure, the motor bus
                connected to the failed source is transferred to the alternate
                source through the TIE breaker.
              </li>
              <p>
                To ensure uninterrupted industrial processes, automatic
                transfers triggered by various source contingencies and source
                equipment failures are employed. Manual transfers are typically
                performed during planned start-ups and shutdowns.
                Breaker-failure logics are in place to prevent permanent
                paralleling of the motor buses.
              </p>
            </div>
          </div>

          <div className=" w-[100%]  lg:py-[40px] pb-6">
            <div className="text-[#0C013D] text-[18px] mb-[32px] font-bold font-Barlow tracking-wider">
              MAIN - TIE (2 BREAKER SCHEMES)
            </div>

            <div className="text-black text-[22px] font-Barlow tracking-wider">
              <p>
                The 2-breaker scheme ensures a reliable power supply to a motor
                bus from two sources in scenarios like thermal power plants. A
                normal source powers the bus via the Main breaker, while an
                alternate source uses the tie breaker. Unit boards in power
                plants, supplying auxiliaries, can be fed by a Unit Auxiliary
                Transformer (UAT) or a station board.
              </p>

              <p className="mt-4">
                During startup, the station board supplies power until the
                generator synchronises, after which the unit board is connected
                to the UAT in a Station-to-Unit transfer. Unit-to-Station
                transfers occur automatically during various tripping
                conditions, ensuring continuous supply. Manual transfers are
                performed during planned shutdowns. The setup employs
                breaker-failure logic and backup measures like TIE-2 breaker to
                prevent dangerous back-feed conditions if primary breakers fail.
                This scheme ensures uninterrupted power supply and safeguards
                against potential failures in complex power systems.
                interconnects BUS I and BUS II, enabling various bus transfer
                scenarios based on the chosen power supply to the motor buses.
              </p>
            </div>
          </div>

          <div className=" w-[100%]  lg:py-[40px] py-6">
            <div className="text-[#0C013D] mb-[32px] text-[18px] font-bold font-Barlow tracking-wider uppercase">
            Selection Guide
            </div>

            <p className="text-black text-[22px] font-Barlow tracking-wider">
              BTS 2000 is tailored to each project's unique needs. Although some
              configurations may resemble others, it's crucial to design and
              integrate switchgear circuits to match specific bus transfer
              requirements. The product range on the right serves as a general
              reference, with variations per case. For personalised assistance,
              please email your specific requirements, Single Line Diagram
              (SLD), Specifications (if available), and Operational Philosophy
              to bts@aartechsolonics.com. We're here to provide the best
              recommendations.
            </p>
          </div>
        </div>

        <Accordion />
        <Accordion2 />
        <Accordion3 />

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">
          Customers
        </div>
        <CustomWorkPages imageSources={partnerImageSources} />

        <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:-mt-8 mt-8">
        Downloads
        </div>

        <div className="lg:flex gap-x-40 lg:mt-6 mt-2">
          <div className="lg:w-[60%] w-[100%]">
            <div className="w-[280px] text-black lg:text-xl text-lg font-medium  font-Barlow tracking-wider ">
              TECHNICAL PAPERS
            </div>
            <div className=" lg:mt-4 ml-3 ">
              <a
                href="https://drive.google.com/file/d/1yJ7XINNL0zU8-DXGKmbo6kTLmIcfnjEE/view"
                target="_blank"
              >
                {" "}
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium lg:mt-5 mt-5 ">
                  A. Raje, A. A. Raje, A. Chaudhary, “Fast Bus Transfer Systems
                  – A Systems Solution Approach”, PowerGen-Middle East, Panama,
                  Bahrain, Feb 2008
                </li>
              </a>
              <a
                href="https://drive.google.com/file/d/1XDGTGYyyHVedPum-jWBQfWAelNljV7aV/view"
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
                href="https://drive.google.com/file/d/1RcL9xlwddOHINbL94fZg9kEcaSY-9A3c/view"
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

          {/* <div className="">
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
          </div> */}

          <div className="">
            <div className="w-[280px] text-black lg:text-xl text-lg font-medium font-Barlow tracking-wider lg:mt-0 mt-6">
              CASE STUDIES
            </div>
            <div className="  lg:mt-5 mt-6 ml-3">
              <a
                href="https://drive.google.com/file/d/16dfgqSNoeChHQgtYphEma86k0yrAyDo2/view"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Auto Transfer Requirements in Bus Transfer
                  Schemes.pdf
                </li>
              </a>
              <a
                href="https://drive.google.com/file/d/111BSZ9ndEB_a7EnWYpO4uiCG76G_64vo/view"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Automatic Station-to-Station Bus Transfer to
                  avoid AC Failure.pdf
                </li>
              </a>

              <a
                href="https://drive.google.com/file/d/11JlH_foJ--cz8tu2a6GoRr-bDp77vlRb/view"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Breaker Mechanism Problem.pdf
                </li>
              </a>

              <a
                href="https://drive.google.com/file/d/1J10E1YhFKIQbPpiOhl4M1n-nqsKUqxwy/view"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study – Spin Down Characteristics – for Evaluating
                  Sequential Fast Transfer.pdf
                </li>
              </a>

              <a
                href="https://drive.google.com/file/d/1maBsLnaaU3NwZkqpHJ7pkvuj8EviRc05/view"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study - Unit-to-Station + Half Station-to-Station
                  Scheme.pdf
                </li>
              </a>
              <a
                href="https://drive.google.com/file/d/1zcjNIQgCwhKNWfoWe5tSGsLU5fq54kp0/view"
                target="_blank"
              >
                <li className="text-black lg:text-lg text-base lg:font-normal font-medium font-Barlow underline hover:font-medium mt-5">
                  Case Study IEEE WG Report – Oscillographic Report and Analysis
                  – Writeup.pdf
                </li>
              </a>
              <a
                href="https://drive.google.com/file/d/1W6Rlb4mngY-OAX6-Q1rUuInViowo_TqP/view"
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

export default BTS2000;
