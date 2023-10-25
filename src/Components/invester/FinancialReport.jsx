import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'
import { Link } from 'react-router-dom'

const FinancialReport = () => {
    return (
        <div>
            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem] ">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div className="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Financial <br className='lg:hidden block' /> Reports</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-20 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                <div className="text-black lg:text-2xl text-base lg:font-normal font-medium font-Barlow lg:leading-7 leading-snug">Our financial statements, annual reports and quarterly results give an insight into our performance, operations, and businesses.  A series of initiatives over the past couple of years, involving exploration of new opportunities and creative innovations, has given a big boost to the performance of the company.<br /><br />You will find our latest annual reports, financial statements, and other related documents. Browse through this section to take an informed decision about investing in our company. We believe in achieving financial excellence and discipline, by leveraging on capabilities and opportunities</div>

                <div className="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-20 mt-10">Reports</div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="">
                        <div className="w-full h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">LATEST FROM THIS MONTH </div>
                        </div>
                        <div className="lg:min-h-[330px] border border-black lg:px-8 px-5 lg:py-8 py-5">
                            <div className="flex flex-col justify-between gap-y-3 h-auto ">
                                <a href="https://drive.google.com/file/d/13CQSC84MmkTYbA8uwli3c0Dcu2YiFxXL/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2022-2023</div></a>
                                <a href="https://drive.google.com/file/d/1EfkWwNeV27i8iOR8_sd0azNYlTxgeU4e/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2021-2022</div></a>
                                <a href="https://drive.google.com/file/d/1BH2dnNiv_rSQpXLQWcPPkwABkEzYyrTU/view" target='_blank'> <div className="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                                <a href="https://drive.google.com/file/d/13RcO5SaeNOj1d00gFJFDFVzwJVpPVNBs/view" target='_blank'> <div className="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2019-2020</div></a>
                                <a href="https://drive.google.com/file/d/1kHMoPFgswMZxwv-2pjfcVZCo7AFil-Aa/view" target='_blank'> <div className="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2018-2019</div></a>

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">FINANCIAL PRESENTATIONS</div>
                        </div>
                        <div className="lg:min-h-[330px] border border-black lg:px-8 px-5 lg:py-8 py-5">
                            <div className="flex flex-col justify-between gap-y-3 h-auto ">
                                <a href="" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">2023 - 2024 Financial Presentation - Q1 Results 21, July | 2023</div></a>
                                <a href="" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">2022 - 2023 Financial Presentation - Q4 Results 21, April | 2023</div></a>
                                <a href="" target='_blank'> <div className="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">2022 - 2023 Financial Presentation - Q3 Results 20, January | 2023</div></a>
                                <a href="" target='_blank'> <div className="lg:w-[95%] text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">2022 - 2023 Financial Presentation - Q2 Results 21, October | 2022</div></a>


                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">QUARTERLY RESULTS</div>
                        </div>
                        <div className="lg:min-h-[330px] border border-black lg:px-8 px-5 lg:py-8 py-5">
                            <div className="flex flex-col justify-between gap-y-3 h-auto ">
                                <a href="https://drive.google.com/file/d/1cW6EwViDPop2PCfGnOq2W5Cle-r53RIJ/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the quarter ended 30 June, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1Mo8kDolTAvFUbwF3TSBc2gJ46_JTIY9H/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the quarter ended 30 June, 2023</div></a>



                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AUDITED YEARLY RESULTS</div>
                        </div>
                        <div className="lg:min-h-[330px] border border-black lg:px-8 px-5 lg:py-5 py-5">
                            <div className="flex flex-col justify-between gap-y-2 h-auto ">
                                <a href="" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold ">Standalone Financial Results for the year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1-v1dcEVg1D9_l7ej8Xr-P65JfBVd2uUH/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1t4Nv5Z3Bg7ux6ecI_K4c5h9tQpUBJVPz/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the year ended 31 March, 2022</div></a>
                                <a href="https://drive.google.com/file/d/106pp3p448d-AQSmVUIBLVIJ44kVaGcGr/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold line-clamp-1">Consolidated Financial Results for the year ended 31 March, 2022</div></a>
                                <Link to="/investors/financial-reports-audit-yearly-report" className="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-5 cursor-pointer hover:border-red-700 text-black lg:text-base text-sm font-Barlow whitespace-nowrap leading-none font-bold hover:text-box-red">
                                    VIEW ALL
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AUDITED HALF-YEARLY RESULTS</div>
                        </div>
                        <div className="lg:min-h-[330px] border border-black lg:px-8 px-5 lg:py-5 py-5">
                            <div className="flex flex-col justify-between gap-y-2 h-auto ">
                                <a href="https://drive.google.com/file/d/1m6wYPjLQ3u3YKlUJT716juE2RupywZWZ/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1-yo51TJ2nszMJD-Cn7u8hta-t_Zw7J62/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Standalone Financial Results for the half year ended 30 September, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1NS3h9YeA6yjrl52TJKxnLpQlKWC0_G04/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Consolidated Financial Results for the half year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1U0y7b8U3cMGXVg0Z3rUqNlsM1vsXrdR0/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold line-clamp-1">Consolidated Financial Results for the half year ended 30 September, 2022</div></a>
                                <Link to="/investors/financial-reports-audit-half-yearly-report" className="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-6 cursor-pointer hover:border-red-700 text-black lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                                    VIEW ALL
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-auto min-h-[50px] 2xl:px-9 flex justify-start lg:px-8 px-5 lg:py-1 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">FARADIGM SUBSIDIARY YEARLY RESULTS</div>
                        </div>
                        <div className=" border border-black lg:px-8 px-5 lg:py-5 py-5">
                            <div className="flex flex-col justify-between gap-y-1 h-auto ">
                                <a href="https://drive.google.com/file/d/1ovY3Jd2_xJpvlWbeI-fFKefkz6e3euxT/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1pKuo4dQbgOCD-T466XsSid5es02ckY1e/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1N9DQhiVVX3B9En1I2ZBvdvlmrPF7SaZk/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2021</div></a>
                                <a href="https://drive.google.com/file/d/1waBPAAfmhsVlls0g5UcnjWHKJr7w6cG8/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold line-clamp-1">Financial Results for the year ended 31 March, 2020</div></a>

                                <Link to="/investors/financial-reports-faradigm-subsidiary-yearly-results" className="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-6 cursor-pointer hover:border-red-700 text-black lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                                    VIEW ALL
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-full h-auto flex justify-start lg:px-8 px-5 lg:py-2 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">FARADIGM SUBSIDIARY HALF-YEARLY RESULTS</div>
                        </div>
                        <div className=" border border-black lg:px-8 px-5 lg:py-5 py-5">
                            <div className="flex flex-col justify-between gap-y-2 h-auto ">
                                <a href="https://drive.google.com/file/d/1iVinX4mro7TTkvELNqAojc5bkHYe6RT0/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the half year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1xwCRA5ksHGoedm7ti80k6ceDJxW0onOC/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the half year ended 30 September, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1-GJEJqJYhi7K4ph5Xw_soQaTFOippp2s/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the half year ended 31 March, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1NjUxm1gyfC5D3h8RHc8kscx1A58nKXwr/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold line-clamp-1">Financial Results for the half year ended 30 September, 2021</div></a>
                                <Link to="/investors/financial-reports-faradigm-subsidiary-half-yearly-results" className="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-6 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                                    VIEW ALL
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-auto flex justify-start lg:px-8 px-5 lg:py-2 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AARTECH’S SUBSIDIARY YEARLY RESULTS</div>
                        </div>
                        <div className=" border border-black lg:px-8 px-5 lg:py-5 py-5">
                            <div className="flex flex-col justify-between gap-y-2 h-auto ">
                                <a href="https://drive.google.com/file/d/1UF_VhgXSbFRR5WTBrz4VHJ6puZjT0XWs/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/1px-ticMNhQpPFOLCPXmdDT7QqrITTmGT/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1MCRsB4lzNaiJtdpdaXeftz44JZs7Eqy5/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the year ended 31 March, 2021</div></a>
                                <a href="https://drive.google.com/file/d/1GQfKb1ZGi91seuHP4IXMsZ2_C1vzMSwa/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold line-clamp-1">2022 - 2023 Financial Presentation - Q2 Results 21, October | 2022</div></a>
                                <Link to="/investors/financial-reports-subsidiary-yearly-results" className="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-6 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                                    VIEW ALL
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full h-auto flex justify-start lg:px-8 px-5 lg:py-2 items-center bg-foot-blue border border-black  mt-8">
                            <div className="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">AARTECH’S SUBSIDIARY HALF-YEARLY RESULTS</div>
                        </div>
                        <div className="lg:min-h-[330px] border border-black lg:px-8 px-5 lg:py-5 py-5">
                            <div className="flex flex-col justify-between gap-y-2 h-auto ">
                                <a href="https://drive.google.com/file/d/143vYueQFF81BQrINzkgn6cKiRTba1O_w/view" target='_blank'> <div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the half year ended 31 March, 2023</div></a>
                                <a href="https://drive.google.com/file/d/10Q46A-xAr4P_sV9dt4wcXAO8pEZe_K9V/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the half year ended 30 September, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1eoNcxiP-lA87uMstTOXRxyqp1XiB5P_a/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Financial Results for the half year ended 31 March, 2022</div></a>
                                <a href="https://drive.google.com/file/d/1eHbVkDl_eCvYRFfpOY0XlHADxrsLtI-P/view" target='_blank'><div className="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold line-clamp-1">Financial Results for the half year ended 30 September, 2021</div></a>
                                <Link to="/investors/financial-reports-subsidiary-half-yearly-results" className="w-[99px] h-[43px] lg:w-[110px] lg:h-[42px] border border-black flex justify-center items-center mt-6 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                                    VIEW ALL
                                </Link>

                            </div>
                        </div>
                    </div>





                </div>


            </div>

            <Footer />

        </div>
    )
}

export default FinancialReport