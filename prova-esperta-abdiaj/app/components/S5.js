import React from "react";

export default function S5(props) {
  const {
        sopraText = "Home > Sevizi aggiuntivi",
        titleText = "PUNTO PRELIEVI 'PASSARELLA' SERVIZIO INFERMIERISTICO",
  } = props;

  return(
    <div className="bg-white p-10 md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-start">

        <div className="text-center mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-black text-sm font-light mt-1 md:mt-2">
                {sopraText}
          </h1>
          <h1 className="text-black text-4xl font-bold mt-1 md:mt-2">
                {titleText}
          </h1>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-black text-sm font-normal mt-1 md:mt-2">
                A seguito dell’esigenza di dislocare un “Punto Prelievi” nella Frazione di Passarella (lontana da tutti i servizi) permettendo alla popolazione fragile e anziana residente di accedere ad un servizio sanitario comune, in collaborazione con l’Amministrazione Comunale e con le associazioni di volontariato del territorio, IPAB fornisce una figura professionale di Infermiere per l’espletamento della pratica sanitaria del servizio.
          </h1>
        </div>
      </div>
    </div>
  );
}