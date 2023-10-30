import React, {useEffect} from 'react'
import { Navbar, Footer } from '../../Components'
import { BigThumb5 } from '../../assets/mediaAwards'


const Awards5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
                <div className="  lg:mt-20 text-black lg:text-[40px] text-[20px] font-Barlow font-bold lg:leading-[52px] leading-6">
                    Winner in the FLCTD Innovation Challenge 2022 <br />
                    Facility For Low Carbon Technology Deployment(FLCTD)

                </div>
                <div className="w-full   mt-6 ">
                    <img src={BigThumb5} alt="" className='w-full ' />
                </div>
                <div class="text-black lg:text-xl text-base  lg:font-normal font-medium font-Barlow leading-relaxed mt-8">The project was launched in 2016 with the objective of identifying innovative energy efficiency and low-carbon technology solutions that address the existing technology gaps in Indian industrial and commercial sectors.</div>

            </div>
            <Footer />
        </>
    )
}

export default Awards5