import React from "react";

export default function S3(props) {
  const {
        sopraText = "Home > Sevizi aggiuntivi",
        titleText = "SERVIZIO DI ASSISTENZA DOMICILIARE S.A.D.",
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
                Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.
<br/>Obiettivi:
<br/>-Mantenimento, inserimento e reinserimento delle persone in stato di bisogno nell’ambiente familiare e sociale di appartenenza
<br/>-Promozione e recupero delle capacità di autonomia delle persone attraverso le risorse personali, familiari, amicali e di vicinato presenti nel territorio
<br/>-Contrasto dei processi di emarginazione sociale, isolamento e solitudine
<br/>Attraverso il SAD, inoltre, si intende:
<br/>-Favorire la creazione di legami significativi e relazioni sociali e supportare la rete sociale esistente attraverso la programmazione di un insieme di servizi e prestazioni a tutela della persona fragile
<br/>-Promuovere una comunità sempre più responsabile verso le persone e le situazioni familiari più fragili
<br/>-Sviluppare servizi e interventi avviati in tema di promozione della domiciliarità e del lavoro di comunità
<br/>-L’IPAB collabora con il servizio sociale dell’Amministrazione Comunale nell’erogazione di questo servizio per il mantenere il più a lungo possibile l’anziano nel suo “mondo” di appartenenza, evitandone l’istituzionalizzazione prima del tempo necessario.
          </h1>
        </div>
      </div>
    </div>
  );
}