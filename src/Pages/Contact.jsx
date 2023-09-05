import React, {useEffect} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
// import "../App.css" 
import CustomSelect from './CustomSelect'
import CustomCountry from './CustomCountry'





const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Empty dependency array ensures the effect runs only once


    return (
        <>
            <Navbar />
            <div className="mainPage lg:px-20 lg:mt-[4rem] lg:py-20 px-5 py-10 ">
                <div className="title lg:text-4xl text-[28px]   font-antonio lg:mt-0 mt-20">
                    Contact Us
                </div>
                <div className="form lg:mt-4 mt-1 ">
                    <form action="" className=' ' >
                        <div className="formDiv lg:grid grid-cols-2 lg:gap-x-[10px] lg:space-y-[12px] space-y-[16px]">
                            <CustomSelect />
                            <CustomCountry /> 
                            <input type="text" placeholder='FIRST NAME' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black  outline-none py-2 px-6 h-[50px] w-full font-Barlow placeholder-red-600' />
                            <input type="text" placeholder='LAST NAME' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black outline-none py-2 px-6 h-[50px] w-full font-Barlow placeholder-red-600' />
                            <input type="text" placeholder='COMPANY NAME' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black   outline-none py-2 px-6 h-[50px] w-full font-Barlow placeholder-red-600' />
                            <input type="mail" placeholder='EMAIL ID' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black   outline-none py-2 px-6 h-[50px] w-full font-Barlow placeholder-red-600' />
                        </div>
                        <textarea type="text" placeholder='YOUR MESSAGE' className="border-[1px] uppercase lg:text-[18px] text-[16px] border-black lg:h-[160px] mt-4  outline-none py-2 px-6 w-full font-Barlow placeholder-red-600 resize-none h-[149px]" />
                        </form>
                        <button className='font-Barlow font-bold bg-box-red text-white p-2 lg:text-[18px] text-[16px] mt-3 lg:w-32 w-[100%] h-12 cursor-pointer'>SUBMIT</button>
                </div>
                <div className="title lg:text-4xl text-[28px]  font-antonio lg:mt-20 mt-10">
                    Email
                </div>
                <div className="emailLinks">
                    <div className="generic flex space-x-8 font-Barlow lg:mt-9 mt-6">
                        <h2 className='text-box-red text-[16px] lg:text-2xl lg:w-60 w-[7.4rem] whitespace-nowrap leading-6'>GENERIC QUERY</h2>
                        <a href="mailto:info@aartechsolonics.com">  <h2 className=" text-[16px] lg:text-2xl font-semibold">info@aartechsolonics.com</h2></a>
                    </div>
                    <div className="seles flex space-x-8 font-Barlow">
                        <h2 className='text-box-red text-[16px] lg:text-2xl  lg:w-60 w-[7rem] whitespace-nowrap'>SALES QUERY</h2>
                        <a href="mailto:sales@aartechsolonics.com"><h2 className=" text-[16px] lg:text-2xl font-semibold">sales@aartechsolonics.com</h2></a>
                    </div>
                </div>
                <div className="title lg:text-4xl text-[28px]  font-antonio lg:mt-20 mt-10 lg:mb-9 mb-6">
                    Address & Phone
                </div>
                <div className="flexAddres lg:flex lg:space-x-7 lg:space-y-0 space-y-6 ">
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4 " >
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px]">
                            REGISTERED OFFICE
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] space-x-10 font-[400]">
                            <ul className='list-disc lg:ml-9 ml-6 '>
                                <a href="https://goo.gl/maps/NYPZGaFHh2MLaXMK8" target='_blank'><li className='font-Barlow  lg:w-[320px] lg:text-[20px] my-4  text-foot-blue'>“Ashirwad” E2/57, Arera Colony, Bhopal, Madhya Pradesh (M.P.) India 462016</li></a>

                                <a href="tel:+917552463593"><li className='font-Barlow lg:text-[20px] my-4 text-foot-blue'>Tel:+91-755-2463593/ <a href='tel:+917554276335'><span>4276335 </span></a> </li></a>

                                <a href="tel: +919752531167 "><li className='font-Barlow lg:text-[20px] lg:mt-4 mb-0 text-foot-blue'>Mob No.+91-9752531167, <a href="tel:+919993091167"><span>9993091167</span></a></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4" >
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px]">
                            UNIT #1, MANDIDEEP
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc  lg:ml-9 ml-6 '>
                                <a href="https://goo.gl/maps/Z45HNNGJcqrP7KA39" target='_blank' ><li className='font-Barlow lg:text-[20px] my-4 w-full text-foot-blue'>35-A/36 Sector-B, Industrial Area, Mandideep, District Raisen, (M.P.) India 462046
                                </li></a>
                                <a href="tel:+917480233020"><li className='font-Barlow lg:text-[20px] my-4 text-foot-blue'>
                                    Tel: +91-7480-233020</li></a>
                                <a href="tel:+919993091168"><li className='font-Barlow lg:text-[20px] w-[105%] lg:mt-4 mb-0 text-foot-blue'>Mob No. +91-9993091168,<a href='tel:+917389905790'><span>7389905790 </span></a></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-60 py-4 px-4 " >
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px]">
                            UNIT #2, PARWANOO
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc  lg:ml-9 ml-6 '>
                                <a href="https://maps.app.goo.gl/h93sv4ZW1JgBFHa99" target='_blank'><li className='font-Barlow lg:text-[20px] my-4 w--full text-foot-blue '>Near Him Cold Storage, Sector-1A, Parwanoo District Solan, Himachal Pradesh (H.P.) 173220
                                </li></a>
                                <a href="tel:+919418509967"><li className='font-Barlow lg:text-[20px]  text-foot-blue'>
                                    Tel: +91-9418509967</li></a>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
