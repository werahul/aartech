import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const SlideinBar = () => {
  const location = useLocation();
  const pathArays = [
    "/industries",
    "/industries/defence-and-exploration",
    "/industries/renewable-energy",
    "/industries/non-renewable-energy",
    "/industries/power-transmission-and-distribution",
    "/industries/heavy-engineering-industries",
    "/industries/health-care",
    "/industries/it-and-telecom",
    "/industries/transportation",
    "/industries/waste-management"
  ];
  const pathForProducts = [
    "/products",
    "/products/BTS-2000",
    "/products/kranking-ultracapacitors",
    "/products/control-relay-panels",
    "/products/clip-fault-current-limiters",
    "/products/best-case",
    "/products/load-checker",
    "/products/solar-design-and-services",
    "/products/solid-waste-treatment",
    "/products/ac-and-dc",
    "/products/flywheel",
    "/products/fuel-cell"
  ];
  const pathForSolutions = [
    "/solutions",
    "/solutions/control-and-automation",
    "/solutions/process-continuity",
    "/solutions/reliable-engine-starting",
    "/solutions/fault-current-limiting",
    "/solutions/solar-design-engineering",
    "/solutions/solid-waste-treatment",
    "/solutions/customised-plastic-case",
    "/solutions/uninterrupted-power-supply",
    "/solutions/power-backup-unit",
    "/solutions/energy-storage",
    "/solutions/load-limiting"
  ];
  const ispagesPath = pathArays.some((path) => location.pathname === path);
  const isProductPagesPath = pathForProducts.some((path) => location.pathname === path);
  const isSolutionPagesPath = pathForSolutions.some((path) => location.pathname === path);
  const linkPagesClassName = `text-foot-blue font-bold hover:text-box-red lg:block hidden ${ispagesPath ? 'blue-font-color' : ''}`;
  const linkProductPagesClassName = `text-foot-blue font-bold hover:text-box-red lg:block hidden ${isProductPagesPath ? 'blue-font-color' : ''}`;
  const linkSolutionPagesClassName = `text-foot-blue font-bold hover:text-box-red lg:block hidden ${isSolutionPagesPath ? 'blue-font-color' : ''}`;
  return (
    <div
      className="slide-in-bar visible lg:flex items-center justify-center space-x-8 shadow-xl py-5 hidden"
      style={{
        position: "fixed",
        top: 88,
        left: 0,
        zIndex: 999,
        width: "100%",
      }}
    >
      <Link to="/industries" className={`link-item ${location.pathname === linkPagesClassName ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue   ${linkPagesClassName}`}>
          INDUSTRIES
        </div>
      </Link>
      <Link to="/products" className={`link-item ${location.pathname === linkProductPagesClassName ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${linkProductPagesClassName}`}>
          PRODUCTS
        </div>
      </Link>
      <Link to="/solutions" className={`link-item ${location.pathname === linkSolutionPagesClassName ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${linkSolutionPagesClassName}`}>
          SOLUTIONS
        </div>
      </Link>
      <Link to="/r&d-facilities" className={`link-item ${location.pathname === "/r&d-facilities" ? "active" : ""}`}>
        <div className={`text-white font-bold uppercase leading-[18px] font-Barlow text-lg tracking-tight cursor-pointer hover:text-foot-blue ${location.pathname === "/r&d-facilities" ? "active-link" : ""}`}>
          R&D FACILITIES
        </div>
      </Link>
    </div>
  );
};

export default SlideinBar;
