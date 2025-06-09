'use client'; // Necessario per interazioni lato client come form submission o gestione dello stato

import React, { useState } from 'react';

export default function Login2(props) {
  const {
    titles = {
      main: "Accedi alla Intranet",
      alreadyAccount: "Hai già un'account?",
      // 'orRegisterWith' è stato rimosso in quanto non utilizzato nel layout corrente
    },
    labels = {
      termsLink: "Termini e Condizioni",
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
      // Colori dei bottoni
      primaryButtonBg: "bg-blue-500", // Azzurro
      primaryButtonHover: "hover:bg-blue-600", // Azzurro più scuro al hover
      inputFocusRing: "focus:ring-blue-500",
      checkboxAccent: "text-blue-500",
      // Queste proprietà non sono più utilizzate in questo layout semplificato, ma mantenute per flessibilità
      socialButtonBg: "bg-white",
      socialButtonHover: "hover:bg-gray-200",
      separatorBorder: "border-gray-300",
    },
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className={`min-h-screen flex flex-col justify-start ${colors.mainBg} font-inter`}>

      <div className={`relative w-full max-w-lg mx-auto ${colors.cardBg} rounded-xl shadow-2xl overflow-hidden flex flex-col translate-y-40`}> 

        {/* La sezione sinistra è stata completamente rimossa */}

        {/* Sezione Form */}
        <div className="w-full p-8 md:p-12 flex flex-col justify-center">
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${colors.mainText}`}>{titles.main}</h1>
          <p className={`${colors.subText} text-sm mb-8`}>
            {titles.alreadyAccount} <a href="#" className={`${colors.linkText} hover:underline`}>{labels.loginLink}</a>
          </p>

          <div className="mb-4">
            <input
              type="text"
              placeholder={buttons.firstNamePlaceholder} // Utente
              className={`w-full p-3 ${colors.inputBg} rounded-md focus:outline-none focus:ring-2 ${colors.inputFocusRing} placeholder-gray-500 ${colors.mainText}`}
            />
          </div>
          <input
            type="text" // Riferimento pratica è un testo, non una password o email
            placeholder={buttons.passwordPlaceholder} // Riferimento pratica
            className={`w-full p-3 ${colors.inputBg} rounded-md focus:outline-none focus:ring-2 ${colors.inputFocusRing} placeholder-gray-500 ${colors.mainText} mb-4`}
          />
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={buttons.emailPlaceholder} // Password
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
            {labels.termsLink}
          </label>

          <button className={`w-full py-3 ${colors.primaryButtonBg} text-white font-semibold rounded-md ${colors.primaryButtonHover} transition-colors mb-6`}>
            {buttons.createAccount}
          </button>
        </div>
      </div>
    </div>
  );
}