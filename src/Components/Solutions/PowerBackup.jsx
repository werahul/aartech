import React, { useState, useEffect } from 'react'
import { Navbar, Footer, SlideInBar } from "../index"
import { CustomerLogos2 } from '../../Components'
import { bestCase, relayPannels, kra, incinerator, wtc, solar, bts, ac, fuel } from '../../assets/ProductImages'


import { ImageSelect } from "../ImageSelector";
import { blank } from '../../assets/solutionImages'


const PowerBackup = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 



    const [selectedTag, setSelectedTag] = useState("tag1");
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [blank, blank, blank, blank, blank];





    const tagContents = {
        tag1: "Power Backup Units are crucial in defence and exploration, ensuring uninterrupted power supply in remote outposts and missions. They combine generators, storage, and renewables for reliability, enhancing equipment operation and safety.",

        tag2: "The Power Backup Unit ensures uninterrupted power supply in remote areas, enhancing safety and effectiveness for mission-critical operations. It combines generators, energy storage, and renewable energy integration, crucial for non-renewable energy scenarios.",

        tag3: "In healthcare, the Power Backup Unit ensures uninterrupted power for vital medical equipment, enhancing patient safety and enabling continuous operation during emergencies, critical for patient care and life-saving procedures. ",

        tag4: "The Power Backup Unit ensures uninterrupted power for mission-critical IT and Telecom systems, improving operational efficiency and safety in remote and challenging environments through backup generators, energy storage, and renewable energy integration.  ",

        tag5: "The Power Backup Unit guarantees uninterrupted power supply for critical operations, combining generators, energy storage, and renewables for reliability in remote and challenging environments, enhancing mission effectiveness and safety.",

        tag6: "In transportation, the Power Backup Unit ensures uninterrupted power supply in remote and challenging situations, improving the reliability of mission-critical equipment and communication systems, thereby enhancing overall effectiveness and safety.",




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
            <SlideInBar/>
            <div className=" 2xl:px-[120px] lg:pt-28 lg:px-20   px-5 pt-20 lg:mt-0 mt-5 sm:px-10">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">Power Backup Unit
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-2 mt-1">SOLUTIONS</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Power Backup Unit</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">SOLUTIONS</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                            The Power Backup Unit is a dependable system vital for uninterrupted power supply in challenging situations, such as remote defence outposts and exploration missions. It combines backup generators, energy storage, and renewable energy integration to guarantee power reliability in harsh conditions. This solution ensures the uninterrupted operation of mission-critical equipment and communication systems, ultimately enhancing effectiveness and safety.


                        </div>


                    </div>
                </div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">INDUSTRIES</div>
                < div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Defence and Exploration
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                        Non-Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        IT and Telecom
                    </button>


                </div>
                < div className="lg:flex hidden space-x-3 mt-3">

                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Power Transmission and Distribution
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        Transportation
                    </button>
                </div>




                { /*     mobile-------------------------------------------------------------*/}
                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">

                    <button
                        className={`tag ${selectedTag === 'tag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag1')}
                    >
                        Defence and Exploration
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag2')}
                    >
                    Non-Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        IT and Telecom
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                    Power Transmission and Distribution
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                    Transportation
                    </button>


                </div>

                <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow mt-3 lg:leading-tight leading-snug">  {selectedTag && tagContents[selectedTag]}</div>


                <div className="text-foot-blue text-lg font-bold font-Barlow tracking-wider lg:mt-20 mt-10">PRODUCTS</div>
                <div div className="lg:flex hidden space-x-3 mt-8">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                    Fuel Cell
                    </button>
                </div>

                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[12px] py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                    Fuel Cell
                    </button>
                </div>

                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 lg:p-0">
                            <img src={fuel} alt="" className='sm:w-[100%] lg:w-[90%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                        Fuel Cells are a favoured power source for diverse applications due to their high efficiency, extended endurance, compact size, lightweight portability, silent operations, durability, wide operating range, and eco-friendly nature. They outperform conventional IC engine options in efficiency, endurance, and environmental impact, making them ideal for various defence and other industrial applications.

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

export default PowerBackup;