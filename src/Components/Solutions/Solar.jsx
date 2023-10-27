import React, { useState, useEffect } from 'react'
import { Navbar, Footer } from "../index"
import { CustomerLogos2 } from '../../Components'
import { bestCase, relayPannels, kra, incinerator, wtc, solar, clip2 } from '../../assets/ProductImages'


import { ImageSelect } from "../ImageSelector";
import { solar1, solar2, solar3, solar4, solar5 } from '../../assets/solutionImages'


const Solar = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only 



    const [selectedTag, setSelectedTag] = useState("tag1");
    const [selectedProTag, setSelectedProTag] = useState('PTag1');
    const images = [solar1, solar2, solar3, solar4, solar5];





    const tagContents = {
        tag1: "Aartech, in partnership with G&W Elec. Co. USA, offers CLiP® Fault Current Limiter solutions, enhancing electrical reliability in non-renewable energy sectors like cement and oil & gas amid a shifting energy landscape towards renewables.        ",

        tag2: "Aartech's CLiP® Fault Current Limiter solutions, in partnership with G&W Elec. Co. USA, enhance electrical reliability in heavy engineering industries like metals, material handling, petrochemicals, and more, improving operational efficiency and ROI in infrastructure development.",

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
            <div className=" 2xl:px-[120px] lg:pt-20 lg:px-20   px-5 pt-20 lg:mt-0 mt-5 sm:px-10">

                <div className="lg:hidden text-black text-[28px] font-normal font-antonio ">Solar Design, Engineering & Consultancy Services
                </div>
                <div className="lg:hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mb-4">SOLUTIONS</div>

                <div className="lg:flex lg:mt-20">

                    <ImageSelect images={images} />

                    <div className="lg:w-[55%] w-[100%] lg:ml-[44px]">
                        <div className="lg:block hidden text-black text-4xl font-normal font-antonio">Solar Design, Engineering & Consultancy Services</div>
                        <div className="lg:block hidden text-foot-blue text-lg font-bold font-Barlow tracking-wider mt-2">SOLUTIONS</div>
                        <div className="text-black lg:text-[22px] text-base lg:font-normal font-medium font-Barlow mt-6 lg:leading-tight leading-snug">
                            At Aartech Solonics, our commitment to engineering excellence drives our passion for harnessing solar power to create sustainable energy solutions. With a blend of innovation and expertise, our experienced team crafts tailored solar solutions, optimising energy generation and reducing utility bills. From feasibility studies to installation and maintenance, we offer end-to-end support for residential and industrial clients, paving the way for a greener future.
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
                        Non - Renewable Energy
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
                        Power Distribution
                    </button>
                    <button
                        className={`tag ${selectedTag === 'tag2'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[10px] uppercase  whitespace-nowrap border  text-lg font-bold font-Barlow tracking-wider`}
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
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-auto h-[49px] px-[20px]  py-[9px] whitespace-nowrap border uppercase text-lg font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CLiP
                    </button>
                </div>

                <div className="flex lg:hidden space-x-3 mt-4 overflow-auto">
                    <button
                        className={`tag ${selectedProTag === 'PTag1'
                            ? 'bg-white text-box-red border-box-red'
                            : 'text-gray-500 border-gray-400 hover:text-box-red hover:border-box-red'
                            } w-[300px] h-[49px] px-[12px] py-[9px] whitespace-nowrap border  text-base font-bold font-Barlow tracking-wider`}
                        onClick={() => handleProClick('PTag1')}
                    >
                        CLiP
                    </button>
                </div>

                <div className="proContainer">

                    <div className={`Pro1 flex sm:flex-row flex-col justify-start items-start mt-8 ${selectedProTag === 'PTag1' ? '' : 'hidden'}`}>
                        <div className=" sm:w-[100%] lg:w-[100%] w-[100%] h-auto sm:p-2 p-0 ">
                            <img src={clip2} alt="" className='sm:w-[100%] w-[100%]'></img>
                        </div>
                        <div className=" text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow sm:ml-5 sm:mt-0 mt-4  lg:leading-tight leading-snug">
                            CLiP® (Current Limiting Protector) offers unparalleled system protection for 25+ years globally. With a current limitation for 2.8kV to 38kV systems and continuous ratings up to 5000A, it combines high current capabilities with ultra-fast operation, making it an economical solution for diverse overcurrent protection needs, from System Upgrades to Transformer Protection.
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

export default Solar;