import React, { useState } from 'react'
import { Navbar, Footer } from "../index"
import { industry1 } from '../../assets/workImages'
import { Cimg1, Cimg2, Cimg3, Cimg4 } from '../../assets/CLogoBlack'

import { CustomerLogos2 } from '../../Components'



const WindPower = () => {
    const [selectedTag, setSelectedTag] = useState("tag1"); // State to track the selected tag
    const tagContents = {
        tag1: 'Content for tag1 goes here.',
        tag2: 'For building wind farm infrastructure, Aartech offers a range of Unitized Substations as per customer specific requirements to take care of key logistical challenges in remote locations. Aartech utilizes its experience, networking and knowledge in the electrical infrastructure space, and works with its customers to understand their requirements, suggest value added features and facilities and provide turnkey end-to-end solutions for unitized power management in coordination with in-house resources as well as strategic business partners around the world.',
        tag3: 'Content for tag3 goes here.',
        tag4: 'Content for tag4 goes here.',
        tag5: 'Content for tag5 goes here.',
        tag6: 'Content for tag6 goes here.',
        tag7: 'Content for tag7 goes here.',
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag); // Set the selected tag
    };
    return (
        <div>
            <Navbar />

            <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20  pt-20 px-5 lg:py-0  lg:mt-0 mt-5 ">

                <div className="flex lg:flex-row flex-col lg:mt-20">
                    <div className="lg:hidden text-black text-[28px] font-normal font-antonio">Wind Power</div>
                    <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-widest mb-4">INDUSTRIES</div>

                    <div className="lg:flex ">
                        <div className="w-full">
                            <img src={industry1} alt="" />
                        </div>
                        <div className="flex lg:flex-col flex-row gap-x-4  gap-y-[15px] lg:ml-[15px] lg:mt-0 mt-4">
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                            <div className="lg:w-[89px] lg:h-[89px] w-[76px] h-[70px] bg-gray-400"></div>
                        </div>
                    </div>
                    <div className="lg:w-[55%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Wind Power</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">INDUSTRIES</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">Wind power usage has seen unprecedented growth in the last few decades. Commercial deployment of wind power technologies has been backed up by strong fiscal measures for promoting renewable energy; just as turbine ratings are increasing on a year-on-year basis and the competitive continues to get intense.<br /><br />With the growing penetration of wind power generation, issues such as grid interconnection, scheduling, protection and contingency support are getting increasingly recognized and addressed.
                        </div>
                    </div>
                </div>

                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">SERVICES</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[360px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        UNITIZED POWER MANAGEMENT
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[310px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        FAULT CURRENT LIMITING
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[274px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        ENERGY HARVESTING
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[210px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        PULSE POWER
                    </button>


                </div>
                < div className="lg:flex hidden space-x-3 mt-3">


                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[213px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        LOAD LIMITING
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[306px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[370px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        UNITISED POWER MANAGEMENT
                    </button>

                </div>

                { /*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-8 overflow-auto">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        UNITIZED POWER MANAGEMENT
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[310px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        FAULT CURRENT LIMITING
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[274px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        ENERGY HARVESTING
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[210px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        PULSE POWER
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[213px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        LOAD LIMITING
                    </button>



                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[306px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        CONTROL & AUTOMATION
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400'
                            } w-[370px] h-[49px] px-[39px] py-[9px] whitespace-nowrap border  text-lg font-normal font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
                    >
                        UNITISED POWER MANAGEMENT
                    </button>

                </div>

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-8 lg:leading-tight leading-snug ">  {selectedTag && tagContents[selectedTag]}</div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">SOLUTIONS</div>
                <div className="mt-6">
                    <button className="lg:w-[389px] w-[300px] h-[49px] lg:px-[39px] lg:py-[9px] border border-box-red  text-box-red lg:text-lg text-base font-normal font-Barlow tracking-wider">REACTIVE POWER COMPENSATION
                    </button>
                </div>
                <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-5 lg:leading-tight leading-snug">Wind power generation is susceptible to fluctuations in the reactive power outlay based on wind speed variations. While these can be compensated broadly at an individual wind turbine level, there can be substantial difference in the reactive power needs at the Point of Common Coupling (PCC) due to the combined effects of all wind turbines, transformers, transmission lines etc. It is necessary to confirm to the grid codes for interconnection of the wind farms to the utility transmission lines at the PCC. International grid codes, for instance, require a Fault Ride Through / Low-Voltage Ride Through facility that maintains the windfarm support to the grid during faults by having provision for substantial short-time reactive power available to maintain wind generation.</div>

                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PRODUCTS</div>
                <div className="mt-6">
                    <button className="lg:w-[280px] w-[209px] h-[49px] lg:px-[39px] px-[15px] lg:py-[9px] border border-box-red  text-box-red lg:text-lg text-base font-normal font-Barlow tracking-wider whitespace-nowrap">PUREWAVE DSTATCOM
                    </button>
                </div>
                <div className="flex lg:flex-row flex-col justify-start items-start mt-8 ">
                    <div className="lg:w-[70%] w-[100%] h-[200px] bg-stone-300" ></div>
                    <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:ml-5 lg:mt-0 mt-4 lg:leading-tight leading-snug">PureWave DSTATCOM is well suited to a major goal of the Smart Grid: Integration of renewable energy sources, such as wind, concentrated solar, and tidal power generation. It allows these renewable energy sources to meet utility interconnection requirements, as well as the power factor, voltage output, and low-voltage ride-through requirements of various worldwide grid codes.</div>
                </div>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:mt-20 mt-10">Customers</div>
                
                <CustomerLogos2/>

            </div>

            <Footer />


        </div >
    )
}

export default WindPower