'use client';

import React, { useState } from 'react';

export default function Login(props) {
  const {
    titles = {
      main: "Accedi all'Extranet",
      alreadyAccount: "Hai già un'account?",
      orRegisterWith: "O registrati con...",
    },
    labels = {
      termsAndConditions: "I agree to the ",
      termsLink: "Terms & Conditions",
      loginLink: "Log in",
    },
    buttons = {
      firstNamePlaceholder: "Utente",
      emailPlaceholder: "Password",
      passwordPlaceholder: "Riferimento pratica",
      createAccount: "Accedi",
    },

    colors = {
      // Colori di sfondo
      mainBg: "bg-white", // Sfondo principale bianco
      cardBg: "bg-gray-100", // Sfondo del form card più chiaro
      inputBg: "bg-gray-200", // Sfondo dei campi input
      // Colori del testo
      mainText: "text-gray-900", // Testo scuro per lo sfondo chiaro
      subText: "text-gray-600", // Testo secondario leggermente più chiaro
      linkText: "text-blue-600", // Colore per i link
      // Colori dei bottoni - MODIFICATI in AZZURRO
      primaryButtonBg: "bg-blue-500", // Azzurro
      primaryButtonHover: "hover:bg-blue-600", // Azzurro più scuro al hover
      inputFocusRing: "focus:ring-blue-500",
      checkboxAccent: "text-blue-500",
      socialButtonBg: "bg-white",
      socialButtonHover: "hover:bg-gray-200",
      separatorBorder: "border-gray-300",
    },
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`min-h-screen w-full flex items-center justify-center ${colors.mainBg} font-inter p-4`}>


      <div className={`relative w-full ${colors.cardBg} rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-6xl`}>
        {/* Sezione Sinistra: Slogan (senza immagine) */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center">
          {/* Overlay leggermente più scuro per il testo */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
         
   
        </div>

        {/* Sezione Destra: Form di Creazione Account */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${colors.mainText}`}>{titles.main}</h1>
          <p className={`${colors.subText} text-sm mb-8`}>
            {titles.alreadyAccount} <a href="#" className={`${colors.linkText} hover:underline`}>{labels.loginLink}</a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder={buttons.firstNamePlaceholder}
              className={`p-3 ${colors.inputBg} rounded-md focus:outline-none focus:ring-2 ${colors.inputFocusRing} placeholder-gray-500 ${colors.mainText}`}
            />
          </div>
          <input
            type="email"
            placeholder={buttons.passwordPlaceholder}
            className={`w-full p-3 ${colors.inputBg} rounded-md focus:outline-none focus:ring-2 ${colors.inputFocusRing} placeholder-gray-500 ${colors.mainText} mb-4`}
          />
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={buttons.emailPlaceholder}
              className={`w-full p-3 ${colors.inputBg} rounded-md focus:outline-none focus:ring-2 ${colors.inputFocusRing} placeholder-gray-500 ${colors.mainText} pr-10`}
            />
            <span
              className={`absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${colors.subText}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {showPassword ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .983-3.14 3.793-5.26 7.15-5.836M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                )}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </div>

          <label className={`flex items-center text-sm ${colors.subText} mb-8 cursor-pointer`}>
            <input type="checkbox" className={`form-checkbox h-4 w-4 ${colors.checkboxAccent} ${colors.inputBg} border-gray-400 rounded mr-2 focus:ring-${colors.checkboxAccent}`} />
            {labels.termsAndConditions} <a href="#" className={`${colors.linkText} hover:underline ml-1`}>{labels.termsLink}</a>
          </label>

          <button className={`w-full py-3 ${colors.primaryButtonBg} text-white font-semibold rounded-md ${colors.primaryButtonHover} transition-colors mb-6`}>
            {buttons.createAccount}
          </button>
        </div>
      </div>
    </div>
  );
}