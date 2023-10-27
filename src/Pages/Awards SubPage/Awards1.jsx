import React from 'react'
import { Navbar, Footer } from '../../Components'
import { BigThumb1 } from '../../assets/mediaAwards'


const Awards1 = () => {
    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
                <div className="  lg:mt-20 text-black lg:text-[28px] text-[20px] font-Barlow font-bold lg:leading-9 leading-6">
                Aarchtech secured a significant IDEX Grant worth up to 1.5 Crore INR as one of the five winners during DEFCONNECT 2.0 in April 2022, with the award presented by the Defense Minister.
                
                </div>
                <div className="w-full h-auto bg-gray-300 mt-8">
                    <img src={BigThumb1} alt="" className='w-full' />
                </div>
               
            </div>
            <Footer />
        </>
    )
}

export default Awards1