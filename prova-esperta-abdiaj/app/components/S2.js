import React from "react";

export default function S2(props) {
  const {
        sopraText = "Home > Sevizi aggiuntivi",
        titleText = "CENTRO ANZIANI 'COLORA IL TUO TEMPO'",
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
                Il centro anziani è un luogo di incontro rivolto alla popolazione anziana autosufficiente del territorio sandonatese che ha come scopo il contrasto di fenomeni di isolamento e solitudine, portando momenti di stimolo, di benessere e serenità per una maggiore integrazione sociale.
Il servizio viene svolto grazie da una collaborazione con le associazioni di volontariato presenti nel territorio e con l’Amministrazione Comunale che mette a disposizione gli spazi siti in Viale Libertà n. 10.
          </h1>
        </div>
      </div>
    </div>
  );
}