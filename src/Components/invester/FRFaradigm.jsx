import React, {useEffect} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { main, mainMobile } from "../../assets/invester";
import SlideinBar from "../../Pages/SlideInBar";
import SlideinBarInvestor from "../../Pages/SlideinBarInvester";


function FRFaradigm() {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []); 

  return (
    <div>
      <Navbar />
      <SlideinBarInvestor/>
      <div className="pt-0">
      <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
      <img src={main} alt="" className='w-full lg:block hidden' />
      <img src={mainMobile} alt="" className='w-full lg:hidden block' />
      <div class="text-foot-blue  absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Financial <br className='lg:hidden block' /> Reports</div>
    </div>
        <div className="px-5 lg:px-20 py-5 lg:py-9 2xl:px-[120px]">
          <Link
            to="/investors/financial-reports"
            className="font-Barlow pt-7 mb-10 lg:mb-20 text-[18px] text-[#0C013D] font-semibold 2xl:text-[24px]"
          >
            {"<"} Back
          </Link>
        </div>
        <div className="px-5 lg:px-20 pb-[105px] 2xl:px-[120px] ">
          <h1 className="text-[28px] lg:text-[36px] font-antonio mb-5 lg:mb-9">
            Reports
          </h1>
          <div className="border border-black lg:w-[80%]">
            <div className="bg-[#0C013D] border border-black">
              <h2 className="font-Barlow text-white text-[18px] pl-[17px] lg:pl-[35px] py-5 font-bold">
                FARADIGM SUBSIDIARY HALF-YEARLY RESULTS
              </h2>
            </div>
            <div className="flex flex-col underline paraHover font-Barlow text-[18px] space-y-3 p-4 lg:p-9">
              <p > 
                <a
                  href="https://drive.google.com/file/d/1iVinX4mro7TTkvELNqAojc5bkHYe6RT0/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 31 March, 2023
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1xwCRA5ksHGoedm7ti80k6ceDJxW0onOC/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 30 September, 2022
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1-GJEJqJYhi7K4ph5Xw_soQaTFOippp2s/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 31 March, 2022
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1NjUxm1gyfC5D3h8RHc8kscx1A58nKXwr/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 30 September, 2021
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1qF5Z1dFB7vAocEZEO0LtfLReIZMpdyt9/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 31 March, 2021
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1fyUnpFIpaNRf52WA2jU8wsLLXe4czxXQ/view"
                  target="_blank"
                >
                  Financial Results for the half year ended 30 September, 2020
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FRFaradigm;
