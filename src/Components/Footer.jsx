import React from "react";
import { footImg, linkedin } from "../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mainFOOT 2xl:px-[120px] lg:px-20 lg:pt-20 pt-12 px-6 py-10 bg-foot-blue h-auto text-white z-10 sm:px-10">
        <div className="footsec lg:flex justify-between items-start ">
          <div className="first-col lg:flex space-x-20">
            <div className="footImg mb-8 -mt-2 lg:block flex justify-between">
              <img src={footImg} alt="" />
              <div class="w-[152px] h-[37px] text-white text-base font-normal font-Barlow leading-tight lg:mt-4 lg:block hidden">Living Passion through Engineering</div>
              <div className="flex lg:hidden space-x-1   items-center justify-end lg:ml-[2rem] w-auto  ">
              <span className="font-Barlow capitalize leading-relaxed  whitespace-nowrap block lg:text-lg text-[18px] font-semibold  ">
                Follow us
              </span>
              <div className="flexIcon flex" >

              </div>
              <a href="https://www.linkedin.com/company/aartech-solonics-limited/" target="_blank">
                <img src={linkedin} alt="" className="" />
              </a>
            </div>
            </div>
           
            <div className="footlinks flex items-start justify-start mb-8 ">
              <div className="pagesLink  font-semibold text-[16px] lg:text-[18px] -ml-[5rem] lg:ml-[1rem]">
                <ul>
                  <Link to="/"> <li className="font-Barlow">HOME</li></Link>
                  <Link to="/brands"> <li className="font-Barlow">BRANDS</li></Link>
                  <Link to="/media"> <li className="font-Barlow">MEDIA</li></Link>
                  <Link to="/investors/overview"> <li className="font-Barlow">INVESTORS</li></Link>
                  <Link to="/contact">  <li className="font-Barlow">CONTACT</li></Link>
                </ul>
              </div>
              <div className="serviceLink font-semibold text-[16px] lg:text-[18px] lg:ml-16 ml-[3rem] hover:">
                <ul>
                  <Link to="/solutions">  <li className="font-Barlow">SOLUTIONS</li></Link>
                  <Link to="/industries"> <li className="font-Barlow">INDUSTRIES</li></Link>
                  <Link to="/products">  <li className="font-Barlow">PRODUCTS</li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="sec-col">
            <div className="address lg:w-[21rem] w-[19rem] font-Barlow lg:text-[18px] font-semibold uppercase text[16px]">
              “Ashirwad” E2/57, Arera Colony, Bhopal, Madhya Pradesh (M.P.)
              India 462016 Tel:+91-755-2463593/4276335 Mob No. +91-9752531167,
              9993091167
              <Link to="/contact">
                <div className="flex ">
                  <button className="border border-slate-100 outline-none py-2 px-3 text-[18px] my-4 w-[137px] lg:w-[144px] h-[44px] hover:text-black hover:bg-white transition-all">
                    CONTACT US
                  </button>
                  <div className="contactImg  lg:flex hidden space-x-1 top-[-400px] right-0 lg:-top-1 lg:right-[13rem]    items-center justify-center lg:ml-[2rem]  ">
                    <span className="font-Barlow capitalize leading-relaxed  whitespace-nowrap block lg:text-lg text-[18px]  ">
                      Follow us
                    </span>
                    <div className="flexIcon flex" >

                    </div>
                    <a href="https://www.linkedin.com/company/aartech-solonics-limited/" target="_blank">
                      <img src={linkedin} alt="" className="" />
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="footbottom relative font-Barlow flex mt-3">
          <ul className="lg:flex lg:space-x-10 lg:ml-52 lg:mr-[11.5rem]">
            <li className="font-Barlow my-1 text-[14px] lg:text-[16px]">
              ©Aartech Solonics. All rights reserved.
            </li>
            <Link to="/privacy-policy" className="font-Barlow  my-1 text-[14px] lg:text-[16px]"> Privacy policy</Link><br />
            <Link to="/cookies" className="font-Barlow  my-1 text-[14px] lg:text-[16px]"> Cookie policy</Link>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Footer;
