import React, { useState } from 'react';
import {  abGallary1992, abGallary2005, abGallary2009, abGallary2010, abGallary2017, abGallary2019, abGallary2022, abGallary1982, abGallary1988,leftArw, rightArw } from '../assets/images';

const AboutImages = () => {
  const images = [
    // Provide URLs to your images here
   abGallary1992, abGallary2005, abGallary2009, abGallary2010, abGallary2017 ,abGallary2019,abGallary2022, abGallary1982, abGallary1988, 
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="my-8">
      <div className="flex justify-between h-[20rem] mt-12">
        <div className=" flex justify-between lg:space-x-12 3xl:space-x-32 w-full">
          <div className="relative w-[30%] mt-6 lg:inline-block hidden">
            <img src={images[(currentImageIndex - 1 + images.length) % images.length]} alt="Previous" className=" cursor-pointer h-[223px] w-[398px]" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer" onClick={handlePrev}></div>
          </div>
          <div className="relative  lg:w-[50%] lg:h-auto  h-[200px] flex  justify-center">
            <img src={images[currentImageIndex]} alt="Current" className=" customImg lg:mx-0 mx-[46px] lg:w-auto 2xl:w-auto w-[278px] lg:h-[270px] h-[180px] shadow-lg cursor-pointer" />
            <div className="absolute top-0 left-0 w-full h-px bg-white" />
            <div className="absolute lg:top-[40%] top-[50%] lg:left-[0rem] left-[1rem]  transform -translate-y-1/2 text-black font-extrabold  cursor-pointer text-3xl select-none hover:text-4xl " onClick={handlePrev}>
              <img src={leftArw} alt="" className='lg:w-full lg:h-full w-3 h-4' />
            </div>
            <div className="absolute lg:top-[40%] top-[50%] lg:right-[0px] right-[1rem]  transform -translate-y-1/2 text-black cursor-pointer font-bold text-3xl select-none hover:text-4xl" onClick={handleNext}>
            <img src={rightArw} alt="" className='lg:w-full lg:h-full w-3 h-4'/>
            </div>
          </div>
          <div className="relative w-[30%] mt-6 lg:inline-block hidden ">
            <img src={images[(currentImageIndex + 1) % images.length]} alt="Next" className="h-[223px] w-auto cursor-pointer" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer" onClick={handleNext}></div>
          </div>
        </div>
      </div>
      <div className="h-[0px] border border-slate-900 lg:flex items-center justify-evenly mt-6 hidden">
        <div className="w-8 h-8 bg-white rounded-full border border-red-700 cursor-pointer" ></div>
        <div className="w-[52px] h-[52px] bg-white rounded-full border border-red-700 cursor-pointer" />
        <div className="w-8 h-8 bg-white rounded-full border border-red-700 cursor-pointer" ></div>
      </div>
      <div className={`yearSection1 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 7 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2022</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold  mt-[15px] customImg-margin  lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>1982</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>1988</div>
      </div>
      <div className={`yearSection2 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 8 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold uppercase leading-tight tracking-tight  hidden`}>1982</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>1988</div>
        <div className={`text-center text-slate-900 text-xl font-semibold uppercase leading-tight tracking-tight  hidden`}>1992</div>
      </div>
      
      <div className={`yearSection3 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 0 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>1988</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>1992</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2005</div>
      </div>
      <div className={`yearSection4 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 1 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>1992</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>2005</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight hidden`}>2009</div>
      </div>
      <div className={`yearSection4 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 2 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2005</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>2009</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2010</div>
      </div>
      <div className={`yearSection4 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 3 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2009</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>2010</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2017</div>
      </div>
      <div className={`yearSection4 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 4 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2010</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>2017</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2019</div>
      </div>
      <div className={`yearSection4 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 5 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2017</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>2019</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight  hidden`}>2022  </div>
      </div>
      <div className={`yearSection4 flex items-center justify-evenly lg:mt-8 font-Barlow -mt-36 ${currentImageIndex === 6 ? '' : 'hidden'}`}>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight hidden`}>2019</div>
        <div className={`text-center text-red-700 lg:text-4xl text-[28px] font-Barlow font-semibold lg:mt mt-[15px] customImg-margin lg:mb-0 -mb-2 uppercase leading-9 tracking-wide`}>2022</div>
        <div className={`text-center text-slate-900 text-xl font-semibold font-Barlow uppercase leading-tight tracking-tight hidden`}>1982</div>
      </div>


      <div className="">
        <div className={`section1 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-5 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 7 ? '' : 'hidden'}`}>Established as a corporation</div>
        <div className={`section2 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 8 ? '' : 'hidden'}`}>Attained Public Limited Company status</div>
        <div className={`section3 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 0 ? '' : 'hidden'}`}>Attained Public Limited Company status</div>
        <div className={`section3 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 1 ? '' : 'hidden'}`}>Attained Public Limited Company status</div>
        <div className={`section3 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 2 ? '' : 'hidden'}`}>Executed a 1:6 Bonus Issue</div>
        <div className={`section4 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-8 ${currentImageIndex === 3 ? '' : 'hidden'}`}>Established AAR Centre for Techno-entrepreneurship, an DSIR approved R&D lab</div>
        <div className={`section5 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 4 ? '' : 'hidden'}`}>Founded AIC - Aartech Solonics Pvt Ltd and Faradigm Ultracapacitors Pvt Ltd</div>
        <div className={`section5 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 5 ? '' : 'hidden'}`}>Successfully went public through an IPO
        </div>
        <div className={`section5 h-[30px] text-center text-foot-blue lg:text-xl font-Barlow text-base px-10 lg:font-normal font-medium leading-7 mt-2 lg:mb-0 -mb-14 ${currentImageIndex === 6 ? '' : 'hidden'}`}>Winner of IDEX
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
