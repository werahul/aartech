import React from 'react'
import { Navbar, Footer } from '../../Components'
import { anImg1 } from '../../assets/images'


const Awards1 = () => {
    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
                <div className="  lg:mt-20 text-black lg:text-[28px] text-[20px] font-Barlow font-bold lg:leading-9 leading-6">Aartech bags supply order to deliver Ultracapacitor-based systems to Indian Army</div>
                <div className=" text-box-red text-lg font-bold leading-normal lg:my-7 font-Barlow my-3">26 April 2021</div>
                <div className="w-full h-auto bg-gray-300">
                    <img src={anImg1} alt="" className='w-full' />
                </div>
               
            </div>
            <Footer />
        </>
    )
}

export default Awards1