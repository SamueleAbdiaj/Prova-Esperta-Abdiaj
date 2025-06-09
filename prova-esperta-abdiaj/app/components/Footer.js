import React from "react";

export default function Footer({ 
  // Style props
  accentColor = '#BFA784',
  textColor = 'gray-300',
  Logo = "/images/sfondo.jpg",
  
  // Content props
  addressTitle = 'Contatti',
  addressLines = [
    'tel. 0421 330807',
    'PROTOCOLLO: info@cdrmonumento.com',
    'PRESIDENZA: presidente@cdrmomumento.com',
    'DIREZIONE: direttore@cdrmonumento.com',
    'E RETTE: contabilita@cdrmonumento.com',
    'PEC: cdrmonumento@halleypec.it'
  ],
  legalLinks = [
    { id: 1, text: '© 2025 Halley Informatica. Tutti i diritti riservati. Halley EG 041433.'},

  ],
}) { 
  return ( 
    <div className={`w-full bg-gray-700 text-${textColor} py-16 px-6 md:px-12 lg:px-24`}> {/* Removed -translate-y-14 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 -translate-x-56"> 
        {/* Address Column */}
<div className="flex flex-col items-center md:ml-12">
            <img
              src={Logo}
              className="w-[200px] h-auto object-contain hidden md:block"
              alt="Desktop Logo"
            />
            </div>

        <div className="text-center md:text-left"> 
          <h3 className="text-white text-lg font-medium mb-4">{addressTitle}</h3> 
          <p className="text-sm">
            {addressLines.map((line, index) => (
              <span key={index}>
                {line}{index < addressLines.length - 1 && <br/>}
              </span>
            ))}
          </p> 
        </div> 
      </div> 
      
      {/* Quick Links and Social Media */}

      {/* Legal Links and Copyright */}
      <div className="max-w-7xl mx-auto text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> 
        {/* Legal Links Group */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left"> 
          {legalLinks.map((link, index) => (
            <span key={link.id}>
              <a 
                href={link.href} 
                className={`hover:text-[${accentColor}] transition-colors duration-300`}
              >
                {link.text}
              </a>
              {index < legalLinks.length - 1 && (
                <span className="hidden md:inline"> | </span>
              )}
            </span>
          ))}

        </div> 
        
      </div> 
      

   
    </div> 
  ); 
}