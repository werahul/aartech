import React from 'react'
import { Navbar, Footer } from '../../Components'
import { BigThumb2 } from '../../assets/mediaAwards'


const Awards2 = () => {
    return (
        <>
            <Navbar />
            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  pt-20 px-5 py-10 lg:mt-0 mt-5 sm:px-10">
                <div className="  lg:mt-20 text-black lg:text-[28px] text-[20px] font-Barlow font-bold lg:leading-9 leading-6">
                Aarchtech has been recognised by the Department of Scientific & Industrial Research (DSIR), Department of Science & Technology, Government of India.
                
                </div>
                <div className="w-full h-auto bg-gray-300 mt-8">
                    <img src={BigThumb2} alt="" className='w-full' />
                </div>
               
            </div>
            <Footer />
        </>
    )
}

export default Awards2