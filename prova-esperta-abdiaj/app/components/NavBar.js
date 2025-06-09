"use client";

import React, { useState } from "react";

export default function Navbar(props) {
  const {
    desktopLogo = "/images/sfondo.jpg",
    mobileLogo = "/images/herologo2.svg",
    titleText = "Regione Veneto",


    formFields = [
      { value: "Tutti i contenuti", href: "/" },
      { value: "Segui il feed", href: "/" },
    ],
    navLinksDesktop = [
      { text: "Homepage", href: "/" },
      {
        text: "Servizi",
        dropdownItems: [
          { text: "Centro Diurno 'Anchisse' ", href: "Servizi1/" },
          { text: "Contro Anziani 'Colora il tuo tempo'", href: "Servizi2/" },
          { text: "Servizio Di Assistenza Domiciliare S.A.D.", href: "Servizi3/" },
          { text: "Sportello Assistenti Familiari", href: "Servizi4/" },
          { text: "Punto Prelievi 'Passarella' Servizzio Infermieristico", href: "Servizi5/" }
        ],
      },
      {
        text: "Perche' L'IPAB",
        href: "/perche-ipab",
        dropdownItems: [
          { text: "Vision e Mission", href: "Vision/" },
          { text: "Statuto", href: "/perche-ipab/storia" },
        ],
      },
      {
        text: "I.P.A.B. informa",
        href: "/",
        dropdownItems: [
          { text: "ACCESSO AGLI ATTI"},
          { text: "Albo Pretorio", href: "/ipab-informa/eventi" },
          { text: "Delibere", href: "/ipab-informa/comunicati" },
          { text: "Determine", href: "/ipab-informa/comunicati" },
          { text: "AMMINISTRAZIONE TRASPARENTE"},
          { text: "Aministrazione Trasparente", href: "/ipab-informa/comunicati" },
        ],
      },
      { text: "Sostenici", href: "/" },
      {
        text: "Accessi riservati",
        href: "/accessi-riservati",
        dropdownItems: [
          { text: "Intranet Sito", href: "Intranet/" },
          { text: "Area Dipendenti", href: "/" },
        ],
      },
      { text: "Extranet", href: "Extranet/" },
      { text: "Privacy", href: "Privacy/" },
    ],
    colors = {
      primaryBtnBg: "#A4D7FF",
      primaryBtnHover: "#8EC5EB",
      secondaryBtnHover: "#0A8BA9",
      svgStroke: "#967F5D",
      desktopBarBg: "#231616",
      desktopBarBgBlurred: "bg-gray-600/60 backdrop-blur-md",
      mobileBarBg: "bg-gray-800",
      borderColor: "border-gray-500",
      labelText: "text-black",
      valueText: "text-black",
      whiteText: "text-black",
      whiteText80: "text-black",
      whiteText90: "text-black",
      secondaryBtnBg: "#0D9CC3",
    },
  } = props;

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index, hasDropdown) => {
    if (hasDropdown) {
      setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    } else {
      setOpenDropdownIndex(null);
    }
  };

  return (
    // FIX: Removed 'h-screen' and 'overflow-hidden' from the main container
    <div className="relative w-full">
      {/* Background Text Container (no changes) */}
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <p className="text-black text-5xl md:text-7xl font-bold opacity-30 select-none">
          {" "}
        </p>
      </div>

      {/* FIX: Removed 'h-full' from this div as its parent no longer dictates a fixed height */}
      <div
        className="relative z-10 flex flex-col"
        style={{ color: colors.whiteText }}
      >
        {/* Desktop Navbar */}
        <div
          className="w-full py-4 px-6 flex items-center md:px-12 md:justify-between"
          style={{ backgroundColor: colors.primaryBtnBg }}
        >
          <div className="flex flex-col items-center md:ml-12">
            <img
              src={desktopLogo}
              className="w-[400px] h-auto object-contain hidden md:block"
              alt="Desktop Logo"
            />
            <img
              src={mobileLogo}
              alt="Mobile Logo"
              className="w-[30px] h-auto object-contain block md:hidden"
            />
            <h1 className="text-black text-sm md:text-base font-normal mt-1 md:mt-2">
              {titleText}
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm md:-translate-y-10">
            {navLinksDesktop.map((link, index) => (
              <div key={index} className="relative">
                {" "}
                {/* Added relative positioning for dropdown */}
                <a
                  href={link.dropdownItems ? "#" : link.href}
                  className="cursor-pointer text-black hover:text-gray-700 transition-colors duration-200"
                  onClick={(e) => {
                    if (link.dropdownItems) {
                      e.preventDefault();
                      handleDropdownToggle(index, true);
                    } else {
                      handleDropdownToggle(index, false);
                    }
                  }}
                >
                  {link.text}
                  {link.dropdownItems && (
                    <svg
                      className={`ml-1 inline-block w-3 h-3 transition-transform duration-200 ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
                {/* Dropdown Menu */}
                {link.dropdownItems && openDropdownIndex === index && (
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                    {link.dropdownItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {/* Ensure dropdown items without href don't navigate */}
                        <a
                          href={item.href || "#"}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={(e) => {
                            if (!item.href) e.preventDefault(); // Prevent default if no href
                            setOpenDropdownIndex(null);
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}