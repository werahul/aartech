import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'
import { Link } from 'react-router-dom'

const Disclosures = () => {
    return (
        <div>

            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-foot-blue  absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Disclosures</div>
            </div>

            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-14 px-5 py-10  lg:mt-0  sm:px-10">
                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9">Disclosures under Regulation 46 and 62 of SEBI (LODR) Regulations ,2015</div>

                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">ANNUAL RETURNS</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto]">

                        <a href="https://drive.google.com/file/d/1LD34QhYBBPFWcU6MULxzUt-NHf02JJGH/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2021-2022</div></a>
                        <a href="https://drive.google.com/file/d/1LMGdoVd2vzlfbfHvbqbDoKpQMC1Tddh8/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2020-2021</div></a>
                        <a href="https://drive.google.com/file/d/1_lByDkYRdLIZcyPzPxBMyLZX3fQL1Ts6/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2019-2020</div></a>
                        <a href="https://drive.google.com/file/d/15kEEjp26k7-z7_TmzmId0wM7zPfsGmUz/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Return for the year 2018-2019</div></a>

                    </div>

                </div>

                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">POLICIES</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto]">

                        <a href="https://drive.google.com/file/d/17On5Q6N5PSTKxl5AnxsuQqJbokkBeXuc/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Vigil Mechanism Policy</div></a>
                        <a href="https://drive.google.com/file/d/1NU9ey3_-4DL9JrRWNGeX-PAinPh1EwHx/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Terms and conditions for appointment of Independent Director</div></a>
                        <a href="https://drive.google.com/file/d/1WFrm84stqg0uu1ntAj2KQAopZnzlNAsA/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Policy on Preservation of Documents</div></a>
                        <a href="https://drive.google.com/file/d/1zFFwsSQNqP54Y0YWU85-J1lKbkiDf_id/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Policy on determination and disclosure of materialiaty of events</div></a>
                        <a href="https://drive.google.com/file/d/1K04mmbYugaoq4x_4Ne9jHTT72Y89SBZK/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold"> Policy on dealing with related party transactions</div></a>
                        <a href="https://drive.google.com/file/d/10aONtdvdgA0ZY-D3MBtH4xhJGyCFMy7D/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Policy for determining material Subsidiaries</div></a>

                        <Link to="/investors/disclosures-policies" class="w-[99px] h-[43px] lg:w-[159px] lg:h-[54px] border border-black flex justify-center items-center mt-9 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                            VIEW ALL
                        </Link>

                    </div>

                </div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal uppercase">Statement of deviation or variation</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto]">

                        <a href="https://drive.google.com/file/d/1OxT0rITXjEiW-JNnJ-YC01nYFTvNLJgZ/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Statement of deviaion or variation as on September 30, 2020</div></a>
                        <a href="https://drive.google.com/file/d/1REqsXP9Wd6cZwam5xu7DVuAFTV2i9AXh/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Statement of deviaion or variation as on September 30, 2019</div></a>
                        <a href="https://drive.google.com/file/d/12JYqcz-7vzvPGTe4J9iV5QYd5YdwWCap/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Statement of deviaion or variation as on March 31, 2021</div></a>
                        <a href="https://drive.google.com/file/d/1PaNpgaOQhRq71eYdq07pmcMLDa_driac/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Statement of deviaion or variation as on March 31, 2020</div></a>

                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Disclosures