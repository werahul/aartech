import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const SlideinBarInvestor = () => {
    const location = useLocation();

    const pathFinancail = [
        "/investors/financial-reports",
        "/investors/financial-reports-audit-yearly-report",
        "/investors/financial-reports-audit-half-yearly-report",
        "/investors/financial-reports-faradigm-subsidiary-half-yearly-results",
        "/investors/financial-reports-subsidiary-half-yearly-results",
        "/investors/financial-reports-subsidiary-yearly-results",
        "/investors/financial-reports-faradigm-subsidiary-yearly-results"
      ];
    const pathShareHolder = [
        "/investors/shareholders-information",
        "/investors/shareholders-information-compliance-certificates",
        "/investors/shareholders-information-corporate-announcements",
        "/investors/shareholders-information-corporate-governance-report",
        "/investors/shareholders-information-corporate-reconciliation-of-share-capital-audit-report",
        "/investors/shareholders-information-shareholding-pattern"
      ];

      const isFinancePath = pathFinancail.some((path) => location.pathname === path);
      const isShareHolderPath = pathShareHolder.some((path) => location.pathname === path);
      const linkFinanceClassName = `text-foot-blue font-bold hover:text-box-red lg:block hidden ${isFinancePath ? 'blue-font-color' : ''}`;
      const linkShareHolderClassName = `text-foot-blue font-bold hover:text-box-red lg:block hidden ${isShareHolderPath ? 'blue-font-color' : ''}`;
    return (
        <div
            className="slide-in-bar visible lg:flex items-center justify-center space-x-8 shadow-xl py-10  hidden"
            style={{
                position: "fixed",
                top: 88,
                left: 0,
                zIndex: 999,
                width: "100%",
            }}
        >
            <Link to="/investors/overview" className={`link-item ${location.pathname === "/investors/overview" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/investors/overview" ? "active-link" : ""}`}>
                    OVERVIEW
                </div>
            </Link>
            <Link to="/investors/chairman-communication" className={`link-item ${location.pathname === "/investors/chairman-communication" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5  font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/investors/chairman-communication" ? "active-link" : ""}`}>
                    CHAIRMAN’S <br />
                    COMMUNICATION
                </div>
            </Link>

            <Link to="/investors/financial-reports" className={`link-item ${location.pathname === linkFinanceClassName ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5 font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${linkFinanceClassName}`}>
                    FINANCIALS <br />
                    REPORTS
                </div>
            </Link>
            <Link to="/investors/shareholders-information" className={`link-item ${location.pathname === linkShareHolderClassName ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5 font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${linkShareHolderClassName}`}>
                    SHAREHOLDERS <br />
                    INFORMATION
                </div>
            </Link>
            <Link to="/investors/notices" className={`link-item ${location.pathname === "/investors/notices" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/investors/notices" ? "active-link" : ""}`}>
                    NOTICES
                </div>
            </Link>
            <Link to="/investors/disclosures" className={`link-item ${location.pathname === "/investors/disclosures" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/investors/disclosures" ? "active-link" : ""}`}>
                    DISCLOUSURES
                </div>
            </Link>
            <Link to="/investors/downloads" className={`link-item ${location.pathname === "/investors/downloads" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/investors/downloads" ? "active-link" : ""}`}>
                    DOWNLOADS
                </div>
            </Link>
            <Link to="/investors/contact-and-grievance" className={`link-item ${location.pathname === "/investors/contact-and-grievance" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5 font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/investors/contact-and-grievance" ? "active-link" : ""}`}>
                    CONTACTS & <br />
                    GRIEVANCE
                </div>
            </Link>
        </div>
    );
};

export default SlideinBarInvestor;
