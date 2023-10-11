import React ,{useEffect} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { PhotoGallery } from '../Components'
import { Link } from 'react-router-dom'
import { anImg1 } from '../assets/images'


const Media = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []); // Empty dependency array ensures the effect runs only once
    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:px-20 lg:py-20 px-5 py-10 sm:px-10">
                <div className="title lg:text-4xl text-[28px]  font-normal font-antonio text-box-red lg:mt-20 mt-20">
                    Announcements
                </div>



                <div className="lg:grid grid-cols-2 gap-5 lg:mt-9 mt-6 lg:space-y-0 space-y-6">
                    <Link to='/announcement-page'
                    >
                        <div className="flex lg:flex-row flex-col   border-[1px] border-black">
                            <div className=" lg:w-[30%]  w-full lg:h-auto h-auto">
                                <img src={anImg1} alt="" className='object-cover lg:h-[122px] ' /></div>
                            <div className=" lg:w-[70%] w-full h-auto lg:px-4 px-2 lg:pt-[13px] pt-[6px] lg:pb-[12px] pb-[10px] ">
                                <div className="text lg:line-clamp-2 line-clamp-3  font-Barlow text-foot-blue lg:text-[20px] texy-[16px] font-semibold   ">Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....</div>
                                <div className="uploadTime  text-foot-blue text-[16px] font-Barlow lg:mt-[10px] mt-2 lg:-mb-3 mb-3">
                                26 April 2021
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

               {/* <div className="flex items-center justify-center lg:mt-[60px] mt-[30px]">
                    <div className="viewAll font-Barlow border-[1px] border-black inline-block px-2 py-1 text-[18px] cursor-pointer">View All</div>
    </div>*/}

                <div className="title lg:text-4xl text-[28px]  font-antonio text-box-red lg:mt-20 mt-10 lg:mb-9 mb-6">
                    Photo Gallery
                </div>

                <PhotoGallery />
            </div >
            <Footer />
        </>
    )
}

export default Media
