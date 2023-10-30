import React from 'react'
import { serv1, serv2, serv1Mobile, serv3, serv3Mobile } from '../assets/images'
import { Link } from 'react-router-dom'



const Services = () => {
    return (
        <>

            <div className="title lg:text-4xl text-[28px] text-box-red font-normal font-antonio lg:mb-9 lg:mt-0 mt-4 mb-4">
                Services
            </div>

            <div className="box border border-black lg:w-full  lg:h-auto ">
                <div class=" lg:h-[150px] h-[89px] ">
                    <img src={serv1} alt="" className='lg:block hidden' />
                    <img src={serv1Mobile} alt="" className='lg:hidden' />
                </div>
                <div className="lg:py-9 lg:px-9 px-4 py-6">
                    <div className="font-Barlow lg:text-[24px] text-[20px] leading-normal lg:tracking-widest  tracking-wide  font-bold text-box-red mb-4 lg:mb-7">MANUFACTURING</div>
                    <div className=" lg:flex gap-x-[96px] lg:space-y-0  space-y-4">
                        <div className="">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue  font-bold  font-Barlow  lg:mb-3 mb-4 ">Manufacturing Hubs</div>
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow">Unit#1: Mandideep, M.P. :</div>
                            <ul className="lg:w-[495px]  list-disc ml-8">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Located in Mandideep, 20 kms from Bhopal</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>   Occupies 12000 sq. meters of land</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>  Includes 1500 sq. meters of built-up area</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>   Houses machinery, equipment, and SSD warehouse</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>   Supports various product lines</li>
                            </ul>
                        </div>


                        <div className="">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow lg:mt-10">Quality Assurance :</div>
                            <ul className="lg:w-[450px] list-disc ml-8 ">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Focus on product quality despite customization</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Rigorous diligence in all activities</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Quality Assurance Plan (QAP) protocol developed based on SSD requirements</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>QAP submitted for customer approval as standard</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Independent quality assurance audit monitors compliance and deviations</li>
                            </ul>
                        </div>
                    </div>

                    <div className=" lg:flex gap-x-[96px] mt-6 lg:space-y-0 space-y-4">
                        <div className="">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue  font-bold font-Barlow">Unit#2: Parwanoo, H.P. : </div>
                            <ul className="lg:w-[495px] list-disc ml-8 ">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Situated in Parwanoo, Himachal Pradesh</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Supports manufacturing of specific products:</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>BTS 2000</li>
                                <li className='lg:text-[20px]  text-[16px] text-foot-blue font-normal font-Barlow'>LT microprocessor-based fast bus transfer system SSD</li>
                            </ul>
                        </div>


                        <div className="">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow">Testing Facility :
                            </div>
                            <ul className="lg:w-[450px] list-disc ml-8">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Customized testing arrangements for diverse requirements</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Factory Acceptance Test (FAT) protocol developed during design.
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <div className="lg:flex lg:space-x-6 lg:space-y-0 space-y-6 mt-6 lg:mb-0 mb-[14px]">

                <div className="border-[1px] border-black w-full lg:h-auto  ">
                    <div class="lg:h-auto h-auto w-full">
                    <img src={serv3} alt="" />
                    </div>
                    <div className="lg:px-8 lg:py-[40px]  px-4 py-6">
                        <div className="font-Barlow text-box-red font-bold leading-normal lg:tracking-widest tracking-wide lg:text-[24px] text-[20px] lg:mb-[20px] mb-4" >COMMISSIONING</div>
                        <div className="">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow">SSD Commissioning Support : </div>
                            <ul className="w-auto list-disc ml-8 ">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Every SSD has a dedicated team of highly qualified and experienced personnel.</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Assistance in commissioning system solutions at the customer's location.</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Swift and responsive support provided.</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Comprehensive on-site training and orientation delivered as needed.</li>

                            </ul>
                        </div>
                        <div className=" lg:mt-6 mt-4">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow">Customer Feedback :  </div>
                            <ul className="w-auto list-disc ml-8 ">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Insights from commissioning activities influence on design and engineering efforts.</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Used to enhance system solutions based on real-world experience.</li>


                            </ul>
                        </div>
                    </div>

                </div>
                <div className="border-[1px] border-black   w-full lg:h-auto   ">
                    <div class="lg:h-[150px] h-auto ">
                        <img src={serv2} alt="" />
                    </div>
                    <div className="lg:px-8 lg:py-[40px] px-4 py-6">
                        <div className="font-Barlow text-box-red font-bold leading-normal lg:tracking-widest tracking-wide lg:text-[24px] text-[20px] lg:mb-[20px] mb-4" >RESEARCH & DEVELOPMENT</div>
                        <div className="">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow">Design & Engineering : </div>
                            <ul className=" w-auto list-disc ml-8 ">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal lg:whitespace-nowrap font-Barlow'>Each SSD conducts distinct design and engineering tasks</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Meets custom-specific requirements for desired application solutions</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Comprehensive study of design, specification, and interface data</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Address additional interface requirements proactively</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Adherence to customer wish-lists is a priority</li>

                            </ul>
                        </div>

                        <div className=" lg:mt-6 mt-4">
                            <div className="lg:text-[20px] text-[16px] text-foot-blue font-bold font-Barlow">Engineering Process :   </div>
                            <ul className="lg:w-auto list-disc ml-8">
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Utilizes the latest engineering software tools</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>Best practices and applicable standards guide the process</li>
                                <li className='lg:text-[20px] text-[16px] text-foot-blue font-normal font-Barlow'>We emphasize innovation & customer feedback
                                </li>
                            </ul>
                        </div>

                        <Link to="/r&d-facilities" className="w-[130px] h-[43px] lg:w-[170px] lg:h-[42px] border border-black text-black flex justify-center items-center mt-10 cursor-pointer font-extrabold hover:border-red-700  tracking-wider lg:text-base text-sm font-Barlow whitespace-nowrap leading-none hover:text-box-red ">
                            KNOW MORE
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Services