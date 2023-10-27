import React from 'react'
import { Navbar, Footer } from '../../Components'
import { BigThumb4 } from '../../assets/mediaAwards'


const Awards5 = () => {
    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
                <div className="  lg:mt-20 text-black lg:text-[28px] text-[20px] font-Barlow font-bold lg:leading-9 leading-6">
                    Winner in the FLCTD Innovation Challenge 2022 <br />
                    Facility For Low Carbon Technology Deployment(FLCTD)

                </div>
                <div className="w-full h-[500px]  mt-8 bg-slate-500">
                    <img src="" alt="" className='w-full ' />
                </div>
                <div class="text-black text-xl font-normal font-Barlow leading-relaxed mt-8">The project was launched in 2016 with the objective of identifying innovative energy efficiency and low-carbon technology solutions that address the existing technology gaps in Indian industrial and commercial sectors.</div>

            </div>
            <Footer />
        </>
    )
}

export default Awards5