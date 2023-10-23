import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css"

const SlideinBarInvester = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const location = useLocation();

    return (
        <div className={`slide-in-bar ${isVisible ? "visible lg:flex items-center justify-center hidden space-x-8 shadow-xl py-10" : ""}`}>
            <Link to="/investors/overview" className={`link-item ${location.pathname === "/investors/overview" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/overview" ? "active-link" : ""}`}>
                    OVERVIEW
                </div>
            </Link>
            <Link to="/investors/chairman-communication" className={`link-item ${location.pathname === "/investors/chairman-communication" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5  font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/chairman-communication" ? "active-link" : ""}`}>
                    CHAIRMAN’S <br />
                    COMMUNICATION
                </div>
            </Link>

            <Link to="/investors/financial-reports" className={`link-item ${location.pathname === "/investors/financial-reports" ? "active" :  ""}`}>
                <div className={`text-white font-bold uppercase leading-5 font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/financial-reports" ? "active-link" : ""}`}>
                    FINANCIALS <br />
                    REPORTS
                </div>
            </Link>
            <Link to="/investors/shareholders-information" className={`link-item ${location.pathname === "/investors/shareholders-information" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5 font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/shareholders-information" ? "active-link" : ""}`}>
                    SHAREHOLDERS <br />
                    INFORMATION
                </div>
            </Link>
            <Link to="/" className={`link-item ${location.pathname === "/solutions" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "" ? "active-link" : ""}`}>
                    NOTICES
                </div>
            </Link>
            <Link to="/investors/disclosures" className={`link-item ${location.pathname === "/investors/disclosures" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/disclosures" ? "active-link" : ""}`}>
                    DISCLOUSURES
                </div>
            </Link>
            <Link to="/investors/downloads" className={`link-item ${location.pathname === "/investors/downloads" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/downloads" ? "active-link" : ""}`}>
                    DOWNLOADS
                </div>
            </Link>
            <Link to="/investors/contact-and-grievance" className={`link-item ${location.pathname === "/investors/contact-and-grievance" ? "active" : ""}`}>
                <div className={`text-white font-bold uppercase leading-5 font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/investors/contact-and-grievance" ? "active-link" : ""}`}>
                    CONTACTS & <br />
                    GRIEVANCE
                </div>
            </Link>
        </div>
    );
};

export default SlideinBarInvester;
