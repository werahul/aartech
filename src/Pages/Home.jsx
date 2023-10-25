import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ashim, jay, ksh, pankaj, sonu, virendra } from '../assets/images'
import { Header, MapImage, OptionsGrid } from '../Components'


import { CustomerLogos, AboutUsHome, Services, TestimonialSlider } from '../Components/index'

const testimonials = [
  {
    image: jay,
    company: "Manager, Jindal Power Limited",
    text: "Absolutely customer-centric! AARTECH's experienced team provides incredible support. Their innovative products run our electrical system flawlessly. Almost zero product failures, truly user-friendly.",
    author: "Mr. Jay Prakash Yadav",
  },

  {
    image: ksh,
    company: "Senior Manager, NTPC",
    text: "Working with the AARTECH team was exceptional! Their consistent support turned our collaboration into a delightful experience. I recommend their services to anyone seeking reliability and expertise.",
    author: "Mr. Ksh.Premkishan Singh",
  },
  {
    image: virendra,
    company: "Executive Engineer, CSTPS",
    text: "AARTECH Solonics stands out with its innovative and customized solutions. They've tailored their expertise to our needs, solving our challenges with ease and precision, driving our success forward.",
    author: "Mr. Virendra Rapartiwar",
  },
  {
    image: pankaj,
    company: "Associate Manager, Adani Power Limited",
    text: "AARTECH Solonics transformed our operations. Their unwavering support during any service hiccups is just remarkable. The HSBT system increased our plant's reliability. They're our ultimate reliability partners!",
    author: "Mr. Pankaj Lochan Sahoo",
  },
  {
    image: ashim,
    company: " Assistant General Manager, Hindalco Mahan",
    text: "Their team ensures our operations run seamlessly with their precise solutions. Their commitment to excellence is truly commendable. I would highly recommend AARTECH Solonics for their top-notch solutions.",
    author: "Mr. Ashim Singh",
  },
  {
    image: sonu,
    company: "Deputy Manager, Damodar Valley Corporation",
    text: "AARTECH team’s technical expertise is impressive, but it's their friendly approach and commitment to keeping promises that stood out. Our project was completed on time with ease and precision.",
    author: "Mr. Soumik Manma",
  },



];


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
      <Navbar />
      <Header />
      <div className="fullPage 2xl:px-[120px] lg:px-20 lg:pb-[74px]  lg:pt-20  w-[100%] py-10 px-5 mr-[83px] sm:px-10" >
        <div className="title lg:text-4xl text-[28px] text-box-red leading-9  font-normal lg:mt-0  font-antonio lg:mb-9 mb-4" >
          Our Tailored Solutions
        </div>
        <div className='font-Barlow lg:text-[20px] text-lightBlack text-[16px] lg:w-full lg:font-semibold font-medium lg:mb-[32px] mb-4 '  > Choose any ONE of the THREE segments below and check out corresponding 2 segments linked with your chosen one.</div>
        <OptionsGrid />
      </div>
      <CustomerLogos />
      <MapImage/>
      <div className="fullPage 2xl:px-[120px] lg:px-20  lg:my-[3.8rem] w-[100%] lg:pt-0 lg:pb-0 pt-10 pb-[2rem] px-5 sm:px-10 ">
        <AboutUsHome />

      </div>
      <TestimonialSlider testimonials={testimonials} />
      <div className="fullPage 2xl:px-[120px] lg:px-20 lg:py-[80px] w-[100%] p-5 sm:px-10" data-aos="fade-up">
        <Services />
      </div>


      <Footer />

    </>
  )
}

export default Home
