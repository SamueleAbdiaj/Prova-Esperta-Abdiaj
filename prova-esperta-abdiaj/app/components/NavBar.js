import React from "react";

export default function NavBar (props) {
  const {
    backgroundImg = "/images/herobg.webp",
    desktopLogo = "/images/sfondo.jpg",
    mobileLogo = "/images/herologo2.svg",
    searchIcon = "/images/lente.png",
    desktopMenuIcon = "/images/menu.png",
    mobileMenuIcon = "/images/menu2.png",
    galleryIcon = "/images/gallery.png",
    phoneIcon = "/images/phone.png",
    titleText = "Regione Veneto",
    requestButtonText = "Richiedi",
    bookButtonText = "Prenota",

    formFields = [
      { label: "Home", value: "Quellenhof Luxury Resort Passeier" },
      { label: "Partenza/arrivo", value: "Inserire data" },
      { label: "Ospiti", value: "Inserire persone" },
    ],
    navLinksDesktop = [
      { text: "Homepage", href: "" },
      { text: "Servizi", href: "#vouchers" },
      { text: "Perche' L'IPAB", href: "#call" },
      { text: "I.P.A.B. informa", href: "#resort-choice" },
      { text: "Sostenici", href: "#resort-choice" },
      { text: "Accessi riservati", href: "#resort-choice" },
      { text: "Extranet", href: "#resort-choice" },
      { text: "Privacy", href: "#resort-choice" },

    ],
    navLinksMobileBottom = [
      { text: "Resorts", icon: null, type: "dropdown" }, 
      { text: "", icon: galleryIcon, type: "icon" },
      { text: "", icon: phoneIcon, type: "icon" },
    ],
    colors = {
      primaryBtnBg: "#BFA784",
      primaryBtnHover: "#A99372",
      secondaryBtnBg: "#837053",
      secondaryBtnHover: "#6E5B44",
      svgStroke: "#967F5D",
      desktopBarBg: "#231616",
      desktopBarBgBlurred: "bg-gray-600/60 backdrop-blur-md",
      mobileBarBg: "bg-gray-800", 
      borderColor: "border-gray-500", 
      labelText: "text-gray-400", 
      valueText: "text-gray-100", 
      whiteText: "text-white", 
      whiteText80: "text-white/80", 
      whiteText90: "text-white/90", 
    }
  } = props;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImg}
          alt="Luxury Resort Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col h-full" style={{ color: colors.whiteText }}>
        <div className="w-full py-4 px-6 flex items-center bg-transparent md:px-12 md:justify-between translate-y-20">
          <div className="flex items-center md:ml-12">
            <img
              src={desktopLogo}
              className="w-[400px] h-auto object-contain hidden md:block"
            />
            <img
              src={mobileLogo}
              alt="Quellenhof Luxury Resort Logo Mobile"
              className="w-[30px] h-auto object-contain block md:hidden"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm md:-translate-y-14">
            {navLinksDesktop.map((link, index) => (
              <a key={index} href={link.href} className="cursor-pointer">{link.text}</a>
            ))}
            <div className="flex items-center space-x-1">
              <span className="cursor-pointer">IT</span>
            </div>
            <img
              src={searchIcon}
              className="w-5 h-5 cursor-pointer"
              alt="Search Icon"
            />
            <a className="cursor-pointer">Menu</a>
            <button className="p-1 block">
              <img src={desktopMenuIcon} alt="Menu Icon" className="w-8 h-8" />
            </button>
          </div>

          <div className="flex items-center ml-auto md:hidden space-x-4">
            <button className="focus:outline-none p-1" style={{ color: colors.whiteText }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </button>
            <button className="p-1">
              <img src={mobileMenuIcon} alt="Menu Icon Mobile" className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="w-full border-b border-white border-opacity-50 md:hidden"></div>
        <div className="absolute bottom-[70px] left-0 right-0 px-6 md:relative md:px-16 md:pb-40 md:mt-auto md:translate-x-12 md:translate-y-16">
          <h1 className="text-4xl md:text-4xl font-light leading-tight">
            {titleText}
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 md:hidden">
          <div className={`w-full flex items-stretch ${colors.mobileBarBg} px-0`} style={{ color: colors.whiteText }}>

            <div className="flex items-stretch">
              <button 
                className={`bg-[${colors.primaryBtnBg}] ${colors.whiteText} px-4 py-3 text-sm font-semibold hover:bg-[${colors.primaryBtnHover}] transition-colors duration-200`}
                style={{ backgroundColor: colors.primaryBtnBg }} // Direct style for dynamic color
              >
                {requestButtonText}
              </button>
              <button 
                className={`bg-[${colors.secondaryBtnBg}] ${colors.whiteText} px-4 py-3 text-sm font-semibold hover:bg-[${colors.secondaryBtnHover}] transition-colors duration-200`}
                style={{ backgroundColor: colors.secondaryBtnBg }} // Direct style for dynamic color
              >
                {bookButtonText}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 p-4 md:pl-14 bg-transparent hidden md:flex z-10">
          <div className={`w-full max-w-[760px] ${colors.desktopBarBg} ${colors.desktopBarBgBlurred} py-0.5 px-1 md:py-1 md:px-2 flex items-center justify-between`}>
            <div className="flex items-center flex-grow">
              {formFields.map((field, index) => (
                <div key={index} className={`flex items-center px-5 py-1 ${index < formFields.length - 1 ? 'border-r' : ''} ${colors.borderColor} ${index === 0 ? 'w-2/5 min-w-[150px]' : index === 1 ? 'w-1/5 min-w-[140px]' : 'w-1/5 min-w-[110px]'}`}>
                  
                  <div className="flex flex-col overflow-hidden">
                    <span className={`text-[11px] font-semibold capitalize whitespace-nowrap ${colors.labelText}`}>
                      {field.label}
                    </span>
                    <span className={`text-xs font-medium whitespace-nowrap overflow-ellipsis ${colors.valueText}`}>
                      {field.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center ml-auto">
              <button 
                className={`flex-1 ${colors.whiteText} py-3 px-6 text-xs font-semibold transition-colors duration-200`}
                style={{ backgroundColor: colors.primaryBtnBg, '&:hover': { backgroundColor: colors.primaryBtnHover } }}
              >
                {requestButtonText}
              </button>
              <button 
                className={`flex-1 ${colors.whiteText} py-3 px-6 text-xs font-semibold transition-colors duration-200`}
                style={{ backgroundColor: colors.secondaryBtnBg, '&:hover': { backgroundColor: colors.secondaryBtnHover } }}
              >
                {bookButtonText}
              </button>
            </div>
          </div>
        </div>

        </div>
      </div>
  );
}