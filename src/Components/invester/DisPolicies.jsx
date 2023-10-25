import React, {useEffect} from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'
import { Link } from 'react-router-dom'


const DisPolicies = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 
    return (
        <div>

            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Disclosures</div>
            </div>

            <div className=" 2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-10 px-5 py-10  lg:mt-0  sm:px-10">
            <Link to="/investors/disclosures" class="text-slate-900 text-base font-semibold font-Barlow ">&lt; BACK</Link>
                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio leading-9 lg:mt-8 mt-6">Disclosures under Regulation 46 and 62 of SEBI (LODR) Regulations ,2015</div>

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


                        <a href="https://drive.google.com/file/d/1_75-HEEEFfYNXEWx6X18bidAYU5DoFpg/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Nomination Remuneration Policy</div></a>
                        <a href="https://drive.google.com/file/d/1PkK9LN6aVXTedxCU6CC4zldprAiZMfiv/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Dividend Distribution Policy</div></a>
                        <a href="https://drive.google.com/file/d/1Xukq3S6JPVFM-wE5o0KTMLof2ugX4mow/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Details of familiarization programmes imparted to independent directors</div></a>
                        <a href="https://drive.google.com/file/d/1St1zMD9-p59t3gUxR762zqx5wbkX3MvW/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Criteria of making payments to non-executive directors</div></a>
                        <a href="https://drive.google.com/file/d/1-a9zybUezRcV6HG6jLH2uTlX-GFzvjtN/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Composition of Various Committees of Board of Directors</div></a>
                        <a href="https://drive.google.com/file/d/1k-WjTHrnmQ0F1M_98iAvRmO7OoXNWVXi/view" target='_blank'> <div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Code of conduct for Board Members and Senior Management Personnel</div></a>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default DisPolicies