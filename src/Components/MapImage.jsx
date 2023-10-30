import React from 'react'
import { MapHome, mMap } from '../assets/images'

const MapImage = () => {
    return (
        <div>

            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-0 py-10  lg:mt-0 mt-0 sm:px-10 bg-[#F0F0F0]">
                <div className="title lg:text-4xl text-[28px] text-foot-blue leading-9  font-semibold lg:mt-0 lg:ml-0 ml-5  font-antonio ">
                Our Global Presence
                </div>
                <img src={MapHome} alt="" className='lg:-mt-8 lg:block hidden'/>
                <img src={mMap} alt="" className='- lg:hidden block'/>

            </div>


        </div>
    )
}

export default MapImage