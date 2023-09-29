import React from 'react'
import { customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8, customer9, customer10, customer11 } from '../assets/images'


const CLogos = () => {
    return (
        <>
            <div className="bg-foot-blue lg:h-[347px] h-[200px] my-2 lg:px-20 lg:py-20 p-4">
                <div className="title 2xl:text-5xl lg:text-4xl text-[28px] text-white font-bold font-antonio lg:mb-0  mb-[50px] ">
                  Customers
                </div>
                <div className="pr">
                    <div className="flex items-center justify-center space-x-32 animate-slide">
                        <img src={customer1} alt="" className='w-[150px] h-[45px]' />
                        <img src={customer2} alt="" className='w-[200px] h-[210px]' />
                        <img src={customer3} alt="" className='w-[66px] h-[86px]' />
                        <img src={customer4} alt="" className='w-[108px] h-[63px]' />
                        <img src={customer5} alt="" className='w-[150px] h-[50px]' />
                        <img src={customer6} alt="" className='w-[150px] h-[54px]' />
                        <img src={customer7} alt="" className='w-[66px] h-[86px]' />
                        <img src={customer8} alt="" className='w-[108px] h-[78px]' />

                    </div>

                </div>
            </div>
        </>
    )
}


export default CLogos
