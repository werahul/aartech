import React from 'react'
import { main, mainMobile } from '../../assets/invester'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import SlideinBarInvester from '../../Pages/SlideinBarInvester'

const Shareholders = () => {
    return (
        <div>
            <Navbar />
            <SlideinBarInvester />
            <div className="relative lg:mt-[10.5rem] mt-[4.4rem]">
                <img src={main} alt="" className='w-full lg:block hidden' />
                <img src={mainMobile} alt="" className='w-full lg:hidden block' />
                <div class="text-foot-blue  absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">Shareholders <br className='lg:hidden block' /> Information</div>
            </div>
            <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-14 px-5 py-10  lg:mt-0 mt-5 sm:px-10">

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7">Compliance certificates</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">LATEST FROM THIS MONTH </div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between lg:h-[300px] h-[350px] ">
                        <a href="https://drive.google.com/file/d/1iJEWOjD0-nKcKDDFdkGCMxtLZM0HLtNm/view" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium fomt font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended <br />September 30, 2020</div></a>
                        <a href="https://drive.google.com/file/d/1oq5bj-_Zz5LHCOlRf4qtf49-mm7aDlXE/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium fomt font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended <br />September 30, 2019</div></a>
                        <a href="https://drive.google.com/file/d/1ZYB8pROuh366XKohZMg-kJwr3VMIp7rQ/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm lg:font-normal font-medium fomt font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2023</div></a>
                        <a href="https://drive.google.com/file/d/1cQuvzA6WkJEGw0A2ffFJvHKj3VTSfH8p/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm lg:font-normal font-medium fomt font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1URqUGGGbT6McBNsoRw8U9NIL3yVCa8Cn/view" target='_blank'> <div class="lg:w-[95%] text-black lg:text-lg text-sm lg:font-normal font-medium fomt font-Barlow underline leading-snug hover:font-semibold">Certificate pursuant to Regulation 7(3) of SEBI (LODR) Regulations, 2015 for half year ended March 31, 2021</div></a>

                    </div>
                    <Link to="/investors/shareholders-information-compliance-certificates" class="w-[99px] h-[43px] lg:w-[159px] lg:h-[54px] border border-black flex justify-center items-center mt-9 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                        VIEW ALL
                    </Link>

                </div>
                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Corporate announcements</div>

                <table className='border border-black lg:w-[841px] text-left lg:mt-9 mt-6'>
                    <tr className='border border-black bg-[#0C013D] text-white font-Barlow h-[50px] lg:text-lg text-sm'>
                        <th className='border border-[#0C013D] lg:w-[220px] px-5'>DATE</th>
                        <th className='border border-[#0C013D] lg:w-[621px] px-5'>TITLE</th>

                    </tr>
                    <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
                        <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
                            08.09.2023
                        </td>
                        <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
                            <a
                                href="https://drive.google.com/file/d/1nhVQqSEubMB03mJIqvQLJtZL6EcPs6BM/view?usp=drive_link"
                                target="_blank"
                            >
                                Change in LOGO of the Company
                            </a>
                        </td>
                    </tr>
                    <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
                        <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
                            08.09.2023
                        </td>
                        <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
                            <a href="https://drive.google.com/file/d/1hq1U3rj2VcOc9tfEl3l2gQAJ5fheGRvi/view?usp=drive_link">
                                {" "}
                                Newspaper Clippings – Advertisement w.r.t. Annual General
                                Meeting to be held through VC or OAVM
                            </a>
                        </td>
                    </tr>
                    <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
                        <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
                            06.09.2023
                        </td>
                        <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
                            <a href="https://drive.google.com/file/d/19H6pYe5HGQk5wOgWVl-0Of3aT05-D04i/view?usp=drive_link">
                                Notice Of The Forty-First Annual General Meeting For The
                                Financial Year 2022-23
                            </a>
                        </td>
                    </tr>
                    <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
                        <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
                            06.09.2023
                        </td>
                        <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
                            <a href="https://drive.google.com/file/d/1ieBSvMonpju_MO9x6pHfhSKkvSAI41EE/view?usp=drive_link">
                                Disclosure under Regulation 30 and other applicable regulations
                                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
                            </a>
                        </td>
                    </tr>
                    <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
                        <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
                            06.09.2023
                        </td>
                        <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
                            <a
                                href="https://drive.google.com/file/d/186Z3mRkAz_IqM6LYn8nqjOKJbAlQwS2V/view?usp=drive_link"
                                target="_blank"
                            >
                                {" "}
                                Intimation of Book Closure and Record Date pursuant to Section
                                91 of Companies Act 2013 and Regulation 42 of the SEBI (LODR)
                                Regulations, 2015
                            </a>
                        </td>
                    </tr>

                </table>
                <Link to="/investors/shareholders-information-corporate-announcements" class="w-[99px] h-[43px] lg:w-[159px] lg:h-[54px] border border-black flex justify-center items-center lg:mt-8 mt-5 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                    VIEW ALL
                </Link>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Corporate governance report</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between h-auto gap-y-3">
                        <a href="https://drive.google.com/file/d/1SwHD-b17Ma91ebI_nJZ4UAM-NNiRH3-E/view" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium  font-Barlow underline leading-snug hover:font-semibold">Corporate Governance June 2023</div></a>
                        <a href="https://drive.google.com/file/d/1MnzCQFzth4IN1rvhT_ehfFCAJXxicHkU/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Corporate Governance September 2023</div></a>

                    </div>

                </div>



                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Reconciliation of share capital audit report</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between lg:h-[300px] h-[350px] ">
                        <a href="https://drive.google.com/file/d/1mdU9B1KI6EhdcRGj9E5zI8jowOJz13WG/view" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1SH-rVzU-iOArJml8Deo1F38AVKTVh3tI/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2021</div></a>
                        <a href="https://drive.google.com/file/d/1s7nfULw1VuXihgs6uPRDtyzaYslXUC39/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2020</div></a>
                        <a href="https://drive.google.com/file/d/1KS0VMxoW-8zPlPZs-GMR_sVziXsRTNVC/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended September 30, 2019</div></a>
                        <a href="https://drive.google.com/file/d/1fTOsl654LVbihVLcdcdYxDEhaHvM2Umh/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2023</div></a>
                        <a href="https://drive.google.com/file/d/1bV4pmQuSTvioRlPq2dXXWoV85O7gzeyJ/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1eLxVFXwoyb5hOSb4AwPsZ0f3W-nTFfjd/view
                        " target='_blank'><div class="text-black lg:text-lg text-sm font-normal font-Barlow underline leading-snug hover:font-semibold">Reconciliation of Share Capital Audit Report for quarter ended March 31, 2021</div></a>


                    </div>
                    <Link to="/investors/shareholders-information-corporate-reconciliation-of-share-capital-audit-report" class="w-[99px] h-[43px] lg:w-[159px] lg:h-[54px] border border-black flex justify-center items-center mt-9 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                        VIEW ALL
                    </Link>

                </div>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Shareholding pattern</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto">
                        <a href="https://drive.google.com/file/d/1w3A-RvJe2ROOjGYgqW8sESCLhoskQHV0/view" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1NTgWba7VGk7JIpwuQlnuJuE_2i7hV1jV/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2021</div></a>
                        <a href="https://drive.google.com/file/d/1FVJ-BjN7yFqipuFVuvfxAapF7M5OqK7z/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2020</div></a>
                        <a href="https://drive.google.com/file/d/12wt1bYLOA_8DgXjSbPoVdzMRJ9DlvcH9/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on September 30, 2019</div></a>
                        <a href="https://drive.google.com/file/d/13JTru-xar4kgMWmfGcIAalD6Whzya09O/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on March 31, 2023</div></a>
                        <a href="https://drive.google.com/file/d/1PSttulZOZo1CZJgSwQO0kapGVzOvUuu_/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">  Shareholding Pattern as on March 31, 2022</div></a>
                        <a href="https://drive.google.com/file/d/1j4T44EEsUyxuiF0F190CbvtzTHx66kYF/view" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Shareholding Pattern as on March 31, 2021</div></a>

                    </div>
                    <Link to="/investors/shareholders-information-shareholding-pattern" class="w-[99px] h-[43px] lg:w-[159px] lg:h-[54px] border border-black flex justify-center items-center mt-9 cursor-pointer hover:border-red-700 text-black  lg:text-base text-sm font-bold font-Barlow whitespace-nowrap leading-none hover:text-box-red">
                        VIEW ALL
                    </Link>

                </div>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Statement of investor complaints</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] flex  justify-center items-center h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className=" h-auto">
                        {/* <a href="" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2022-2023</div></a>
                        <a href="" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2021-2022</div></a>
                        <a href="" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                        <a href="" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                        <a href="" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
                        <a href="" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>
    <a href="" target='_blank'><div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Annual Report for the year 2020-2021</div></a>*/}

                        <div className=" h-[100%] text-center text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow lg:leading-[31.20px] my-auto">
                            "Content will be uploaded soon”
                        </div>

                    </div>


                </div>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Dividend history</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 lg:h-auto">
                        <a href="https://drive.google.com/file/d/1lnITwB_k_abhPVJh4TwDamulyaHv0fyp/view" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Dividend History</div></a>
                    </div>


                </div>

                <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-16 mt-8">Transfer of shares in demat mode</div>
                <div class="lg:w-[841px] h-[50px] flex justify-start lg:px-8 px-5 items-center bg-foot-blue border border-black  lg:mt-8 mt-5">
                    <div class="text-white lg:text-lg text-base font-bold font-Barlow leading-normal">DOCUMENT NAME / DATE</div>
                </div>
                <div class="lg:w-[841px] h-auto border border-black lg:px-8 px-5 lg:py-8 py-5">
                    <div className="flex flex-col justify-between gap-y-3 h-auto]">
                        <a href="https://drive.google.com/file/d/1M3HsrH0WkaGDOWmPPB9N8C_KICjIgBsI/view" target='_blank'> <div class="text-black lg:text-lg text-sm lg:font-normal font-medium font-Barlow underline leading-snug hover:font-semibold">Transfer of Shares Only in Demat Form</div></a>

                    </div>


                </div>


            </div>

            <Footer />

        </div>
    )
}

export default Shareholders