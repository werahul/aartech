import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { PhotoGallery } from '../Components'
import { Link } from 'react-router-dom'
import { anImg1 } from '../assets/images'
import Aos from "aos"
import "aos/dist/aos.css"


const Media = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({duration: 2000})
    }, []);

    const awardsData = [
        {
            id: 1,
            imgSrc: anImg1, // Define the image source for each item
            title: 'Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....',
            uploadTime: '26 April 2021',
        },
        {
            id: 2,
            imgSrc: anImg1, // Define the image source for each item
            title: 'Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....',
            uploadTime: '27 April 2021',
        },
        {
            id: 3,
            imgSrc: anImg1, // Define the image source for each item
            title: 'Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....',
            uploadTime: '28 April 2021',
        },
        {
            id: 4,
            imgSrc: anImg1, // Define the image source for each item
            title: 'Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....',
            uploadTime: '29 April 2021',
        },
        {
            id: 5,
            imgSrc: anImg1, // Define the image source for each item
            title: 'Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....',
            uploadTime: '29 April 2021',
        },
        {
            id: 5,
            imgSrc: anImg1, // Define the image source for each item
            title: 'Aartech bags supply order to deliver Ultracapacitor-based systems to Indian....',
            uploadTime: '30 April 2021',
        },


    ];


    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:px-20 lg:py-20 px-5 py-10 sm:px-10">

                <div className="title lg:text-4xl text-[28px]  font-normal font-antonio text-box-red lg:mt-20 mt-20" data-aos="fade-right">
                    Awards & Recognitions
                </div>

                <div className="lg:grid grid-cols-2 gap-5 lg:mt-9 mt-6 lg:space-y-0 space-y-6">
                    {awardsData.map((item) => (
                        <div key={item.id} className="flex lg:flex-row flex-col border-[1px] border-black">
                            <div className="lg:w-[30%] w-full lg:h-auto h-auto">
                                <img src={item.imgSrc} alt="" className="object-cover lg:h-[122px]" />
                            </div>
                            <div className="lg:w-[70%] w-full h-auto lg:px-4 px-2 lg:pt-[13px] pt-[6px] lg:pb-[12px] pb-[10px]">
                                <div className="text lg:line-clamp-2 line-clamp-3 font-Barlow text-foot-blue lg:text-[20px] text-[16px] font-semibold">
                                    {item.title}
                                </div>
                                <div className="uploadTime text-foot-blue text-[16px] font-Barlow lg:mt-[10px] mt-2 lg:-mb-3 mb-3">
                                    {item.uploadTime}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  




                <div className="title lg:text-4xl text-[28px]  font-normal font-antonio text-box-red lg:mt-20 mt-20">
                    Announcements
                </div>



                <div className="lg:grid grid-cols-2 gap-5 lg:mt-9 mt-6 lg:space-y-0 space-y-6">
                    <Link to='/announcement-page'
                    >
                        <div className="flex lg:flex-row flex-col   border-[1px] border-black"  data-aos="fade-in">
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
