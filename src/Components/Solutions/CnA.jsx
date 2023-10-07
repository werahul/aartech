import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { download } from "../../assets/images"
import { Accordion, Accordion2, Accordion3 } from "../../Components"
import { CustomerLogos2 } from '../../Components'
import { bestCase, relayPannels, kra, incinerator, wtc, solar } from '../../assets/ProductImages'


import { ImageSelect } from "../ImageSelector";
import { CnA1, CnA2, CnA3, CnA4, CnA5 } from '../../assets/solutionImages'


const CnA = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 



    const [selectedTag, setSelectedTag] = useState("tag1");
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [CnA1, CnA2, CnA3, CnA4, CnA5];





    const tagContents = {
        tag1: "Aartech's control and automation solutions improve power distribution through efficient last-mile connectivity, enhanced reliability, and addressing key factors like deregulation, tariff management, load shedding, and power quality for the public's benefit",

        tag2: 'Control and automation solutions, like those offered by Aartech, play a pivotal role in optimising power transmission infrastructure, ensuring efficiency, reliability, and effective energy management, and addressing crucial factors such as deregulation, tariff, load shedding, and power quality.        ',




    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };
    const handleProClick = (tag) => {
        setSelectedProTag(tag);
    }

    return (
        <div>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20   px-5 pt-20 lg:mt-0 mt-5 ">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">Control & Automation
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-4">SOLUTIONS</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Control & Automation</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">SOLUTIONS</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                            Aartech excels in the control and automation industry, offering a wide range of solutions, from cost-effective options for distribution utilities to advanced, customised solutions using cutting-edge technology. We have the expertise to integrate the right components to create tailored solutions and specialise in solid-state and microprocessor-based control products designed to meet specific needs, departing from traditional approaches using discrete electrical devices.
                        </div>


                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">INDUSTRIES</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Power Distribution
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Power Transmission
                    </button>

                </div>




                { /*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">

                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Power Distribution
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Power Transmission
                    </button>


                </div>

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug">  {selectedTag && tagContents[selectedTag]}</div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PRODUCTS</div>
                <div div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL & RELAY PANELS
                    </button>
                </div>

                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-normal font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CONTROL & RELAY PANELS
                    </button>
                </div>

                <div className="proContainer">

                    <div className={`Pro1 flex lg:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className="lg:w-[70%] w-[100%] h-auto">
                            <img src={relayPannels} alt=""></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4  lg:leading-tight leading-snug">
                            A control & relay panel is a comprehensive unit designed to manage 11KV and 33KV zonal substations. It integrates main and auxiliary relays, annunciation relays, fuses, switches, and more. These panels monitor and control transformers, generators, and circuit breakers, ensuring efficient electrical equipment management. They come in single or multi-circuit configurations based on customer needs.

                        </div>
                    </div>
                </div>





                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>
                <CustomerLogos2 />






            </div>
            <Footer />

        </div>
    )
}

export default CnA