import React, { useEffect } from "react";
import { main, mainMobile } from '../../assets/invester'
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";


const ShCorporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative lg:mt-[5.5rem] mt-[4.4rem]">
        <img src={main} alt="" className='w-full lg:block hidden' />
        <img src={mainMobile} alt="" className='w-full lg:hidden block' />
        <div class="text-white absolute lg:bottom-10 bottom-5 lg:left-20 2xl:left-[7.5rem] left-5 lg:text-4xl text-[28px] font-normal font-antonio leading-9">
          Shareholders <br className="lg:hidden block" /> Information
        </div>
      </div>
      <div className="2xl:px-[120px] lg:py-20 lg:px-20  lg:pt-9 px-5 py-10  lg:mt-0 mt-5 sm:px-10">
        <Link
          to="/investors/shareholders-information"
          class="text-slate-900 text-base font-semibold font-Barlow "
        >
          &lt; BACK
        </Link>
        <div class="text-black lg:text-4xl text-[28px] font-normal font-antonio lg:leading-9 leading-7 lg:mt-8 mt-6">
          Corporate announcements
        </div>

        <table className="border border-black lg:w-[841px] text-left lg:mt-9 mt-6">
          <tr className="border border-black bg-[#0C013D] text-white font-Barlow h-[80px] lg:text-lg text-sm">
            <th className="border border-[#0C013D] lg:w-[220px] px-5">DATE</th>
            <th className="border border-[#0C013D] lg:w-[621px] px-5">TITLE</th>
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
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              15.08.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1UnuLxDBLCAryB6J6Q3qPv4o-gJ__g-c3/view?usp=drive_link"
                target="_blank"
              >
                Newspaper Clippings - Advertisement w.r.t. Unaudited Financial
                Results (Standalone and Consolidated) for the quarter ended June
                30, 2023
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              14.08.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1fa4gZjaJxyze3yNS_BxvHqnp5bDJAQTI/view?usp=drive_link"
                target="_blank"
              >
                Unaudited Financial Results (Standalone and Consolidated) for
                the quarter ended June 30, 2023
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              13.07.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Zk54mH8v0LNfahzRjsV-zbI0GrTy7dch/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              10.07.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Zk54mH8v0LNfahzRjsV-zbI0GrTy7dch/view?usp=drive_link"
                target="_blank"
              >
                Approval for migration of equity shares of the Company from
                BSE-SME Platform to Main Board of BSE & NSE
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              20.06.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1t4loN2NGNRSPkSRIEQM5P5TW_sw9YsA9/view?usp=drive_link"
                target="_blank"
              >
                Disclosure of Voting Result - Proceedings, Voting Results and
                Scrutiniser's Report of Postal Ballot dated June 19,2023
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              19.06.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1t4loN2NGNRSPkSRIEQM5P5TW_sw9YsA9/view?usp=drive_link"
                target="_blank"
              >
                Non-Applicability Certificate pursuant to provision of
                Regulation 57(4) of SEBI (Listing Obligations and Disclosure
                Requirements), Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              20.05.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1N0bxFxWdKmKk7CSBjmPGKQXxeFCDUepd/view?usp=drive_link"
                target="_blank"
              >
                Newspaper Clippings – Advertisement w.r.t. Notice of Postal
                Ballot (e-voting)
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              19.05.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1unHlAQbrI_vZ1xU2xRFXilc_9jq3uT6F/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulations 30 of the SEBI (LODR) Regulations,
                2015- Postal Ballot Notice (e-voting)
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              11.05.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Xq7cJ55D5KQF8AIsTLNLwktyrapaaTcw/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              11.05.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1TDIPpeI_3zBlZwB03Xp1jzVMKDheTAKN/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year and year ended March 31, 2023
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              25.04.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1TDIPpeI_3zBlZwB03Xp1jzVMKDheTAKN/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Regulation 40(10) of SEBI (LODR) Regulations,
                2015 for Transfer or Transmission or Transposition of shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              13.04.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/19vw0piRpRyD7d20JEfSAu-giIXK_xX9c/view?usp=drive_link"
                target="_blank"
              >
                Compliance Certificate under Regulation 7(3) of SEBI (LODR)
                Regulations, 2015 for the period ended March 31, 2023
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              07.04.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Sq6zU02KNakVTz9NhZNRPFtdM3bhKxkn/view?usp=drive_link"
                target="_blank"
              >
                Non-Applicability Certificate pursuant to provision of
                Regulation 57(5) of SEBI (Listing Obligations and Disclosure
                Requirements), Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.04.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1cG3wxM9hjoecBEfYQkUtlC14qG0Vjg3m/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              23.03.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1cG3wxM9hjoecBEfYQkUtlC14qG0Vjg3m/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              21.02.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1cG3wxM9hjoecBEfYQkUtlC14qG0Vjg3m/view?usp=drive_link"
                target="_blank"
              >
                Disclosure of Voting Result - Proceedings of Postal Ballot dated
                February 19, 2023
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              02.02.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1YJx3vShOfmgceekumR7zMGzuLWXTzvcU/view?usp=drive_link"
                target="_blank"
              >
                Intimation of Incorporation of a Company in London, United
                Kingdom (UK) by Director of the Company
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              20.01.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1FLiy6HA76A5Yc-PVbOYKPI-NKd-nN4Wj/view?usp=drive_link"
                target="_blank"
              >
                Newspaper Clippings – Advertisement w.r.t. Notice of Postal
                Ballot (e-voting)
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              19.01.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1FLiy6HA76A5Yc-PVbOYKPI-NKd-nN4Wj/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulations 30 of the SEBI (LODR) Regulations,
                2015- Postal Ballot Notice (e-voting)
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              11.01.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1EhZ-YKxq92oUzIove-5Cj4MVdpAyK43u/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              07.01.2023
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1eOdlJRZ9jWJ100EoZjz5voYTdmpaTNib/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>

          {/* 2022 */}

          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              12.11.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1spLjnQiNT3UtU0sJDiyTQuIuzaqk3K7B/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              12.11.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/14KErr2IUZVQNTumqEBIhlKhNZ4MawR7u/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year ended September 30, 2022
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              08.10.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/19iGfXv1sq_9JRhEUMcWxfLIuCPB7nsAg/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              10.09.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1thNuwNZJZPkyjpY9HsMXxTM0EYirYANQ/view?usp=drive_link"
                target="_blank"
              >
                Voting Results of the Fortieth Annual General Meeting of the
                Company for the Financial Year 2021-22
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              10.09.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1POAQ2rZSWe8blJ4BB1U1jwyEZ_1pkNsj/view?usp=drive_link"
                target="_blank"
              >
                Scrutiniser's Report for the Fortieth Annual General Meeting of
                the Company for the Financial Year 2021-22
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              09.09.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1SiXFeRUmaDQasXZ8GRx3PqEHDTgpiA7N/view?usp=drive_link"
                target="_blank"
              >
                Proceedings of the Fortieth Annual General Meeting of the
                Company for the Financial Year 2021-22
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              16.08.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1AU5ygkdwiCAuEYzAsGhwDf4fJ3l5SpTr/view?usp=drive_link"
                target="_blank"
              >
                Notice Of The Fortieth Annual General Meeting For The Financial
                Year 2021-22
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              16.08.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1QIxAQO0gxULgmAsFB2GHSi9G_MfnuZ9l/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              16.08.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1yWYYSThrarM7NowCTdKTrQYAGU5s98i1/view?usp=drive_link"
                target="_blank"
              >
                Intimation of Book Closure and Record Date pursuant to Section
                91 of Companies Act 2013 and Regulation 42 of the SEBI (LODR)
                Regulations, 2015
              </a>
            </td>
          </tr>
          {/* <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              16.08.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a href="" target="_blank">
                Intimation of Book Closure and Record Date pursuant to Section
                91 of Companies Act 2013 and Regulation 42 of the SEBI (LODR)
                Regulations, 2015
              </a>
            </td>
          </tr> */}
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              05.07.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/122GPOgbVm3qL6iNfHYpmNZw9VqOB1UkN/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              02.06.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/19WGviFo3IfktlW8PwYvaI1udKWwrsuty/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Regulation 40(10) of SEBI (LODR) Regulations,
                2015 for Transfer or Transmission or Transposition of shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              31.05.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1wF1XxK1Y63Mp79YqokU7nlQMzq2EXp7D/view?usp=drive_link"
                target="_blank"
              >
                Non-Applicability Of Related Party Transaction Disclosure
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              12.05.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1d6dCcXJSvhKkfmVK2NhavtOpy7-P45AO/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              12.05.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1JRRuAA6J3Ii7TLrFZGhuelsCBU5flGIs/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year and year ended March 31, 2022
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              18.04.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Vygh2PI8DHtq2WjCskIzzpmoq7f9N9bd/view?usp=drive_link"
                target="_blank"
              >
                Compliance Certificate under Regulation 7(3) of SEBI (LODR)
                Regulations, 2015 for the period ended March 31, 2022
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              08.04.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1ndqFz969ujx0hTsgyndwrfXw5WRtjVLw/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Regulation 40(10) of SEBI (LODR) Regulations,
                2015 for Transfer or Transmission or Transposition of shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              08.04.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1rMTgnj45eAlZ1vZ0LQYUjhcuIsTpmyOl/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              21.03.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1sTwHHAIWkxWEF8qQQ8HXbnw66veWjEk1/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              01.01.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/19Z6Pps9xhCY7y5wgPrQWSwMxBJP-8qTw/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>

          {/* 2021 */}

          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              04.12.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1T2zb5FH4BPSPFTJyLn2d0ziAnX_NRHyH/view?usp=drive_link"
                target="_blank"
              >
                Non-Applicability Of Related Party Transaction Disclosure
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              23.11.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1c9M5L1ah3a5VtqijJ0f2wKb_5ZtGRVEZ/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Allotment of Bonus Shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              10.11.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1vQX_SD7VkbaDXJ5gGqRRp0ctCa6rX_pT/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              10.11.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1sjLOoPa8ZdY4Ktoc1Pduzdg2jhZur4Aa/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year ended September 30, 2021
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              03.11.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1wyxir5uzdtF7EPQvBtfn-CMp5-E5i8ag/view?usp=drive_link"
                target="_blank"
              >
                Intimation of Record Date pursuant to Regulation 42 of the SEBI
                (LODR) Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              29.10.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1ILezfC-hJWD9tYlhg1DM8r0UX-FTpFPf/view?usp=drive_link"
                target="_blank"
              >
                Amendments to the Memorandum of Association of the Company due
                to increase in authorised share capital
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.10.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1hJEaw4srWP3DOMtAZSxbuvt6h_N9U3dF/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Regulation 40(10) of SEBI (LODR) Regulations,
                2015 for Transfer or Transmission or Transposition of shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.10.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/15yWt_9tQ1IphN69hcKBQGHQn6ztvwm_Z/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              30.09.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1kRYW04mT0x4kThkaADnBzB786W5O1Mnl/view?usp=drive_link"
                target="_blank"
              >
                Scrutiniser's Report for the Thirty-Nineth Annual General
                Meeting of the Company for the Financial Year 2020-21
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              29.09.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1RQcm7pPq0JhsIRh-0bAci_BHw25uNysl/view?usp=drive_link"
                target="_blank"
              >
                Proceedings of the Thirty-Nineth Annual General Meeting of the
                Company for the Financial Year 2020-21
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.09.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/12pKSkBz95GJqFvGziJOX8X3_t6v7VSGu/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.09.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1fdRrtv03h2dsluIcd7dtQM958rIdbgM8/view?usp=drive_link"
                target="_blank"
              >
                Notice Of The Thirty-Nineth Annual General Meeting For The
                Financial Year 2020-21
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.09.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1RlobyIhH2JiSZpioOyJsxOss62STCKeC/view?usp=drive_link"
                target="_blank"
              >
                Intimation of Book Closure pursuant to Section 91 of Companies
                Act 2013 and Regulation 42 of the SEBI (LODR) Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              03.07.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1TxtOoxsB4U8NcqXKX-lKCCWSkkP2nKpM/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              15.06.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1VhLXp2e7GaffoXtjMZVENwLNtLvZUBzs/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              15.06.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1gn2n-Do7tq5HlqCyjEOESRjP_5NjEU0b/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year and year ended March 31, 2021
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              26.04.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1U5VThb7RDVOTgZAgrNDfD1PJmTq4WKSX/view?usp=drive_link"
                target="_blank"
              >
                Receipt of Order
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              21.04.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1GsWeHhx4rR2sriRNiQVUva05Ts0KQ9Ip/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Regulation 40(10) of SEBI (LODR) Regulations,
                2015 for Transfer or Transmission or Transposition of shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              12.04.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1QPu6V9n9d55q8bIRqM5OB8yKoNK5sdGU/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              08.04.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/160RyN8dJmqVvUEi9H2faZLK9wQyJVdk5/view?usp=drive_link"
                target="_blank"
              >
                Compliance Certificate under Regulation 7(3) of SEBI (LODR)
                Regulations, 2015 for the half year ended March 31, 2021
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              08.02.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/16tNQ96tEiJNj-sSGSccuMgOIlNLDHnyJ/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              02.01.2021
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1yqf2MJErbclRzBJaSVoYtFBr_2QEfVrV/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>

          {/*  2020  */}

          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              31.12.2022
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1m0Sit0iiwpNnybrSTfvWLP6aBdGj1E4w/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 of the Securities and Exchange
                Board of India (Listing Obligations and Disclosure Requirements)
                Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              13.11.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1DNpiDKSsrcfOeUhifCURvMdm_n5Rzd1x/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              13.11.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1vt7ZzvF72Z3wjagnxDMU-s-UbSjrErwV/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year ended September 30, 2020
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.10.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Yp4aP-zlZ0uZnOJp4PkW9kRSvu_M_9_S/view?usp=drive_link"
                target="_blank"
              >
                Compliance Certificate under Regulation 7(3) of SEBI (LODR)
                Regulations, 2015 for the half year ended September 30, 2020
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.10.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1DRQ4uCRLXyxRmeHVmBq91JWbOmA7xP69/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Regulation 40(10) of SEBI (LODR) Regulations,
                2015 for Transfer or Transmission or Transposition of shares
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              06.10.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1U1CjR6Wc0sDJOx5NI0X97lzFIBAZJyr_/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              25.09.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1U1CjR6Wc0sDJOx5NI0X97lzFIBAZJyr_/view?usp=drive_link"
                target="_blank"
              >
                Scrutiniser's Report for the Thirty-Eighth Annual General
                Meeting of the Company for the Financial Year 2019-20
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              24.09.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1FsoQzMVbONRgVoQOtQC2xbeGXvLxaTPN/view?usp=drive_link"
                target="_blank"
              >
                Proceedings of the Thirty-Eighth Annual General Meeting of the
                Company for the Financial Year 2019-20
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              29.06.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1xkoqqAuKwYZOsUoCV5_XaoLZWRNpRBpE/view?usp=drive_link"
                target="_blank"
              >
                Audited Financial Results (Standalone and Consolidated) for the
                half year and year ended March 31, 2020
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              29.06.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1mH_IqTPLizoMiymAjHLjEChY7WlX13eu/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              27.05.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1Ksx0fO7C5Wx0EvmYdxkIHC9RxNs20-UH/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulations 30 of the Securities and Exchange
                Board of India (Listing Obligations and Disclosure Requirements)
                Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              18.01.2020
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1gxA7ifMxUPwqCDUeU6E1Kr1nfvmmDvcM/view?usp=drive_link"
                target="_blank"
              >
                Certificate under Reg. 74 (5) of SEBI (DP) Regulations, 2018
              </a>
            </td>
          </tr>

          {/* 2019 */}
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              02.09.2019
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1oaDYHe19lzrQQEAm04YMJlfPu4fiwZq5/view?usp=drive_link"
                target="_blank"
              >
                Notice Of The Thirty-Eighth Annual General Meeting For The
                Financial Year 2019-20
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              02.09.2019
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1dFd2wLYSrnqkisL4wmWECZjz4YuS5OZE/view?usp=drive_link"
                target="_blank"
              >
                Intimation of Book Closure and Record Date pursuant to Section
                91 of Companies Act 2013 and Regulation 42 of the SEBI (LODR)
                Regulations, 2015
              </a>
            </td>
          </tr>
          <tr className="border border-black font-Barlow h-[80px] lg:text-lg text-sm">
            <td className="border border-[#0C013D] lg:w-[220px] px-5 text-black font-normal font-Barlow">
              02.09.2019
            </td>
            <td className="border border-[#0C013D] lg:w-[621px] px-5 text-black font-normal font-Barlow underline hover:font-semibold cursor-pointer">
              <a
                href="https://drive.google.com/file/d/1dFd2wLYSrnqkisL4wmWECZjz4YuS5OZE/view?usp=drive_link"
                target="_blank"
              >
                Disclosure under Regulation 30 and other applicable regulations
                of the SEBI (LODR) Regulations, 2015- Outcome of Board Meeting
              </a>
            </td>
          </tr>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default ShCorporate;
