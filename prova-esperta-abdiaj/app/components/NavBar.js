import React from "react"; // Make sure React is imported

export default function Navbar(props) { // <--- FIX 1: Add 'props' as an argument
  const {
    desktopLogo = "/images/sfondo.jpg",
    mobileLogo = "/images/herologo2.svg",
    titleText = "Regione Veneto",

    navLinksDesktop = [
      { text: "Homepage", href: "/" },
      { text: "Servizi", href: "Servizi/" },
      { text: "Perche' L'IPAB", href: "/" },
      { text: "I.P.A.B. informa", href: "/" },
      { text: "Sostenici", href: "/" },
      { text: "Accessi riservati", href: "/" },
      { text: "Extranet", href: "/" },
      { text: "Privacy", href: "/" },
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
      secondaryBtnBg: "#0D9CC3", // Ensure this is present
    },
  } = props; // <--- This destructuring is now valid because 'props' is defined

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <p className="text-black text-5xl md:text-7xl font-bold opacity-30 select-none">
          {" "}
        </p>
      </div>

      <div
        className="relative z-10 flex flex-col h-full"
        style={{ color: colors.whiteText }}
      >
        {/* Desktop Navbar (no changes above md) */}
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
            <h1 className="text-black text-sm md:text-base font-normal mt-1 md:mt-2">
              {titleText}
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm md:-translate-y-10">
            {navLinksDesktop.map((link, index) => (
              <a key={index} href={link.href} className="cursor-pointer text-black">
                {link.text}
              </a>
            ))}
          </div>
        </div>
        {/* If you had more content below the main navbar div, it would go here */}
      </div> {/* <--- FIX 2: Correctly close the 'relative z-10' div */}
    </div> // <--- FIX 3: Correctly close the 'relative w-full' div
  );
}