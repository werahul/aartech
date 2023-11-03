import React, { useState, useEffect } from 'react'
import { Navbar, Footer, SlideInBar } from "../index"
import { CustomerLogos2 } from '../../Components'
import { bestCase, relayPannels, kra, incinerator, wtc, solar, bts, ac, flywheel } from '../../assets/ProductImages'


import { ImageSelect } from "../ImageSelector";
import { blank } from '../../assets/solutionImages'


const Energy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 



    const [selectedTag, setSelectedTag] = useState("tag1");
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [blank, blank, blank, blank, blank];





    const tagContents = {
        tag1: "Energy storage supports defence, exploration, and real estate by harvesting micro-source energy (solar, wind, hydro) to power portable devices in remote locations. This efficient approach also reduces the need for extensive cabling.  ",

        tag2: "Energy storage is crucial for renewable energy. It captures energy from micro sources like solar, wind, and hydropower for various uses, promoting sustainability in sectors like marine, defence, and real estate.",

        tag3: "Energy storage maximises power distribution, capturing micro-energy sources like solar, wind, and hydropower. It serves marine, defence, remote sensing, telecom, and real estate, e.g., using solar tiles with PV arrays and LEDs for lighting, reducing cabling.        ",

        tag4: "Energy storage in heavy engineering harnesses solar, wind, and hydropower for portable devices and applications in marine, defence, space, remote sensing, and telecom. Solar tiles reduce cabling for lighting in real estate.        ",

        tag5: "Energy storage in the healthcare industry, powered by energy harvesting technologies like solar, wind, and hydropower, ensures a continuous, site-independent energy supply for portable medical devices and facilitates remote healthcare applications.        ",

        tag6: "Energy storage is essential for IT, Telecom, and various sectors. Micro energy sources like solar, wind, and hydropower, along with energy harvesting, support portable devices, data collection, and energy-efficient lighting in Real Estate. ",

        tag7: "Energy storage harnesses micro-energy sources (solar, wind, hydro) to power portable devices in transportation. It's vital in marine, defence, space, remote sensing, telecom, and real estate for mobile energy needs and efficient lighting solutions.        ",




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

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">Energy Storage
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wide mb-2 mt-1">SOLUTIONS</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Energy Storage</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">SOLUTIONS</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                            Energy storage technologies tap into micro sources like solar, wind, and hydropower through PV panels, micro wind turbines, and micro-hydro turbines. Stored energy powers portable devices, benefiting sectors like Marine, Defense, Space, Remote Sensing, Telecom, and Real Estate. Applications include soldier communication and decorative lighting using solar tiles, enhancing energy efficiency across industries.
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
                        Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Power Transmission and Distribution
                    </button>



                </div>
                < div className="lg:flex hidden space-x-3 mt-3">
                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Heavy Engineering Industries
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        IT and Telecom
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
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
                        Renewable Energy
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag3'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag3')}
                    >
                        Power Transmission and Distribution
                    </button>

                    <button
                        className={`tag ${selectedTag === 'tag4'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag4')}
                    >
                        Heavy Engineering Industries
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag5'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag5')}
                    >
                        Healthcare
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag6'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag6')}
                    >
                        IT and Telecom
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag7'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            }  w-auto h-[49px] px-[15px] uppercase py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleTagClick('tag7')}
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
                    Flywheel
                    </button>
                </div>

                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto uppercase h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                    Flywheel
                    </button>
                </div>

                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] lg:w-[70%] w-[100%] h-auto sm:p-2 p-0 lg:p-0">
                            <img src={flywheel} alt="" className='sm:w-[100%] lg:w-[90%] w-[100%] '></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                        A flywheel stores energy through rotational momentum, helping stabilise power grids by providing system "inertia." Inertia Drive technology focuses on efficient design and assembly processes. The flywheel container offers modular scalability, quick installation, and high-power delivery, with excellent efficiency and operational flexibility.

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

export default Energy;