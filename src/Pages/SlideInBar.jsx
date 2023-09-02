import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const SlideInBar = () => {
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
    <div className={`slide-in-bar ${isVisible ? "visible lg:flex items-center justify-center hidden space-x-8 " : ""}`}>
      <Link to="/industries" className={`link-item ${location.pathname === "/industries" ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/industries" ? "active-link" : ""}`}>
          INDUSTRIES
        </div>
      </Link>
      <Link to="/products" className={`link-item ${location.pathname === "/products" ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/products" ? "active-link" : ""}`}>
          PRODUCTS
        </div>
      </Link>
      <Link to="/solutions" className={`link-item ${location.pathname === "/solutions" ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer ${location.pathname === "/solutions" ? "active-link" : ""}`}>
          SOLUTIONS
        </div>
      </Link>
    </div>
  );
};

export default SlideInBar;
