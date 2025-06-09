// app/components/Hero.js (or wherever your Hero component is)
"use client"; // Corrected: lowercase 'c'

import React, { useState } from "react";

export default function Hero(props) {
  const {
    desktopLogo = "/images/sfondo.jpg",
    mobileLogo = "/images/herologo2.svg",
    titleText = "Regione Veneto",
    requestButtonText = "Richiedi",
    bookButtonText = "Prenota",

    formFields = [
      { value: "Tutti i contenuti", href: "/" },
      { value: "Segui il feed", href: "/" },
    ],
    navLinksDesktop = [
      { text: "Homepage", href: "/" },
      {
        text: "Servizi",
        dropdownItems: [
          { text: "Centro Diurno 'Anchisse' ", href: "Servizi/" },
          { text: "Contro Anziani 'Colora il tuo tempo'", href: "Servizi2/" },
          { text: "Servizio Di Assistenza Domiciliare S.A.D.", href: "Servizi3/" },
          { text: "Sportello Assistenti Familiari", href: "Servizi4/" },
          { text: "Punto Prelievi 'Passarella' Servizzio Infermieristico", href: "Servizi5/" },
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Text Container (no changes) */}
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <p className="text-black text-5xl md:text-7xl font-bold opacity-30 select-none">
          {" "}
        </p>
      </div>

      <div
        className="relative z-10 flex flex-col h-full"
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
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                          onClick={() => setOpenDropdownIndex(null)}
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

        {/* Mobile Divider (no changes) */}
        <div className="w-full border-b border-white border-opacity-50 md:hidden"></div>

        {/* Main Content Area (no changes) */}
        <div className="absolute bottom-[70px] left-0 right-0 px-6 md:relative md:px-16 md:pb-40 md:mt-auto md:translate-x-12 md:translate-y-16">
          <div className="mt-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "#0D9CC3" }}>
              PRESENTAZIONE
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "black" }}>
              Qualche breve cenno alla Storia dell’IPAB “MONUMENTO AI CADUTI IN
              GUERRA. Dopo l’annessione del Veneto all’Italia, l’Amministrazione
              comunale di San Donà ebbe un diverso assetto, rispetto a quello
              avuto sino ad ora: organo principe divenne il Consiglio comunale,
              il Sindaco era di nomina regia, ma scelto tra i consiglieri ed
              affiancato da una Giunta di Assessori eletti dal Consiglio
              comunale tra i propri membri. A livello nazionale nel 1882 si
              ammettono all’elettorato politico tutti i cittadini maggiorenni
              che superino l’esame del corso scolastico obbligatorio oppure
              paghino un censo di 19,80 lire. Subito dopo nel 1915 diviene
              elettore amministrativo di un comune chi è cittadino italiano, ha
              compiuto 21 anni, ha la residenza nel comune ovvero paga nel
              comune un censo, e contro il quale non siano insorte cause di
              esclusione per incapacità o indegnità.
            </p>
            <p
              className="text-base font-semibold mt-4 cursor-pointer"
              style={{ color: "#0D9CC3" }}
            >
              Continua a leggere ...
            </p>
          </div>
        </div>

        {/* Mobile Bottom Bar (no changes) */}
        <div className="absolute bottom-0 left-0 right-0 md:hidden">
          <div
            className={`w-full flex items-stretch ${colors.mobileBarBg} px-0`}
            style={{ color: colors.whiteText }}
          >
            {/* Request and Book Buttons (no changes, still using props here) */}
            <div className="flex items-stretch">
              <button
                className={`bg-[${colors.primaryBtnBg}] ${colors.whiteText} px-4 py-3 text-sm font-semibold hover:bg-[${colors.primaryBtnHover}] transition-colors duration-200`}
                style={{ backgroundColor: colors.primaryBtnBg }}
              >
                {requestButtonText}
              </button>
              <button
                className={`bg-[${colors.secondaryBtnBg}] ${colors.whiteText} px-4 py-3 text-sm font-semibold hover:bg-[${colors.secondaryBtnHover}] transition-colors duration-200`}
                style={{ backgroundColor: colors.secondaryBtnBg }}
              >
                {bookButtonText}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Bar (MODIFIED: Blurred background width and padding adjusted, Form fields spacing adjusted) */}
        <div className="absolute bottom-4 left-0 right-0 p-4 md:pl-14 bg-transparent hidden md:flex z-10">
          <div
            className={`w-full max-w-full ${colors.desktopBarBg} ${colors.desktopBarBgBlurred} py-2 px-2 md:py-2 md:px-3 flex items-center justify-between rounded-md`}
          >
            <div className="flex items-center">
              {" "}
              {/* Removed flex-grow here for more control */}
              {formFields.map((field, index) => (
                <a // Changed div to a to make it clickable
                  key={index}
                  href={field.href} // Added href
                  className={`flex items-center px-3 py-1 cursor-pointer hover:underline ${ // Reduced px, added hover:underline
                    index < formFields.length - 1 ? "border-r" : ""
                  } ${colors.borderColor} ${colors.valueText}`} // Applied valueText color directly
                >
                  <div className="flex flex-col overflow-hidden">
                    {/* Removed labelText span as labels are gone */}
                    <span
                      className={`text-xs font-medium whitespace-nowrap overflow-ellipsis`}
                    >
                      {field.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* CONSOLIDATED BUTTONS HERE: Improved styling */}
            <div className="flex items-center space-x-1">
              <button
                className={`flex-1 ${colors.whiteText} py-3 px-5 text-[11px] font-semibold transition-colors duration-200 whitespace-nowrap rounded-sm hover:opacity-90`}
                style={{ backgroundColor: colors.primaryBtnBg }}
              >
                Amministrazione trasparente
              </button>
              <button
                className={`flex-1 ${colors.whiteText} py-3 px-5 text-[11px] font-semibold transition-colors duration-200 whitespace-nowrap rounded-sm hover:opacity-90`}
                style={{ backgroundColor: colors.secondaryBtnBg }}
              >
                Albo pretorio online
              </button>
              <button
                className={`flex-1 ${colors.whiteText} py-3 px-5 text-[11px] font-semibold transition-colors duration-200 whitespace-nowrap rounded-sm hover:opacity-90`}
                style={{ backgroundColor: colors.primaryBtnBg }}
              >
                Contatti
              </button>
              <button
                className={`flex-1 ${colors.whiteText} py-3 px-5 text-[11px] font-semibold transition-colors duration-200 whitespace-nowrap rounded-sm hover:opacity-90`}
                style={{ backgroundColor: colors.secondaryBtnBg }}
              >
                pagoPa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}