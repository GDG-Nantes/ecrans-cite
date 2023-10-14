import {ECRANS} from "./serviceEcran";
import React from "react";
import {ConfigEcran} from "src/types.ts";
import {useSearchParams} from "react-router-dom";

// Composant affichant tous les écrans sous forme de grille comme des écrans de surveillance
export function Superviseur() {
  return <div className={"superviseur"}>
    {ECRANS.map((ecran) => {
      return <IframeEcran key={ecran.id} ecran={ecran}/>;
    })}
  </div>;
}

const IframeEcran: React.FC<{ ecran: ConfigEcran }> = ({ecran}) => {
  const [searchParams] = useSearchParams()
  const date = searchParams.get("date")
  const queryDate = date ? `?date=${date}` : ``
  const iframeUrl = `${window.location.protocol}//${window.location.host}/${ecran.id}${queryDate}`;
  return <div className={"ecran"}>
    <iframe src={iframeUrl} width={355} height={200}/>
    <div className={"ecran-title"}>[{ecran.id}] {ecran.nom}</div>
    <a className={"clickBox"} href={iframeUrl} target={"_blank"}/>
  </div>
}
