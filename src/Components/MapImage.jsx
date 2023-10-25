import React from 'react'
import { MapHome } from '../assets/images'

const MapImage = () => {
    return (
        <div>

            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-5 sm:px-10 bg-[#F0F0F0]">
                <div className="title lg:text-4xl text-[28px] text-foot-blue leading-9  font-normal lg:mt-0  font-antonio ">
                Our Global Presence
                </div>
                <img src={MapHome} alt="" className='-mt-8'/>

            </div>


        </div>
    )
}

export default MapImage