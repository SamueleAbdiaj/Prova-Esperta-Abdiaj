import React from "react";

export default function S1(props) {
  const {
        sopraText = "Home > Sevizi aggiuntivi",
        titleText = "CENTRO DIURNO 'ANCHISE'",
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
                il centro diurno è un servizio territoriale di tipo semi-residenziale rivolto prevalentemente ad anziani con vario grado di non autosufficienza, con prevalente disturbo cognitivo.
<br/>Gli obiettivi del servizio sono:
<br/> -Sostegno e sollievo ai familiari e alla rete sociale di supporto
<br/> -Contrastare fenomeni di isolamento e solitudine
<br/> -Potenziale, mantenere e/o compensare abilità e competenze relative alla sfera dell’autonomia, dell’identità e dell’orientamento spazio-temporale, delle relazioni interpersonali e della socializzazione
<br/> -Potenziale la rete di servizi per le persone anziane, proponendo interventi personalizzati, con progetti specifici rispondenti ai bisogni dei singoli.
<br/>Le attività del servizio sono:
<br/> -Assistenza tutelare diurna
<br/> -Igiene e cura della persona, con stimolazione delle capacità residue
<br/> -Somministrazione di colazione, pranzo e merenda con aiuto nell’alimentazione
<br/> -Attività ricreative, culturali, occupazionali, per il mantenimento delle capacità espressive e relazionali, compatibilmente con le condizioni psico-fisiche
<br/> -Attività terapeutico riabilitativa-fisioterapica
<br/> -Supporto psicologico e sociale sia agli utenti che ai familiari
<br/> -Assistenza sanitaria
<br/>Le figure professionali:
<br/> -Coordinatore responsabile
<br/> -Infermiere professionale
<br/> -Operatore socio-sanitario
<br/> -Assistente sociale
<br/> -ducatore professionale
<br/> -Fisioterapista
<br/> -Psicologo
          </h1>
        </div>
      </div>
    </div>
  );
}