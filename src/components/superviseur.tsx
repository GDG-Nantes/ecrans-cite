import {ECRANS, ECRANS_AUTRES, ECRANS_DIRECTION, ECRANS_SALLES} from "src/data/Ecrans.ts";
import React from "react";
import {ConfigEcran} from "src/types.ts";
import {useSearchParams} from "react-router-dom";

// Composant affichant tous les écrans sous forme de grille comme des écrans de surveillance
export function Superviseur() {

  const [searchParams] = useSearchParams()
  const ecranId = searchParams.get("ecran")

  if (ecranId) {
    return SupervisionEcranUnique(ecranId);
  }

  return <>
    <div><a href={"/ecrans_cite.pdf"} target={"_blank"}><h3>PDF écrans cité</h3></a></div>
    <div>{
      ECRANS.map((ecran) => {
        return <a key={ecran.id} href={`/superviseur?ecran=${ecran.id}`}
                  style={{marginRight: '10px'}}>[{ecran.id}] {ecran.nom}</a>
      })
    }</div>
    <h1>Salles</h1>
    <div className={"superviseur"}>
      {ECRANS_SALLES.map((ecran) => {
        return <IframeEcran key={ecran.id} ecran={ecran}/>;
      })}
    </div>
    <h1>Directions</h1>
    <div className={"superviseur"}>
      {ECRANS_DIRECTION.map((ecran) => {
        return <IframeEcran key={ecran.id} ecran={ecran}/>;
      })}
    </div>
    <h1>Autres</h1>
    <div className={"superviseur"}>
      {ECRANS_AUTRES.map((ecran) => {
        return <IframeEcran key={ecran.id} ecran={ecran}/>;
      })}
    </div>
  </>;
}

const IframeEcran: React.FC<{ ecran: ConfigEcran, date?: string }> = ({ecran, date}) => {
  const [searchParams] = useSearchParams()
  const dateSearch = searchParams.get("date") ?? date
  const queryDate = dateSearch ? `?date=${dateSearch}` : ``
  const iframeUrl = `${window.location.protocol}//${window.location.host}/${ecran.id}${queryDate}`;
  return <div className={"ecran"}>
    <iframe title={ecran.id + date} src={iframeUrl} width={355} height={200}/>
    <div className={"ecran-title"}>[{ecran.id}] {ecran.nom}</div>
    <a className={"clickBox"} href={iframeUrl} target={"_blank"}/>
  </div>
}

function SupervisionEcranUnique(ecranId: string) {
  const dates = [
    "2024-10-17T08:00:00",
    "2024-10-17T09:01:00",
    "2024-10-17T10:49:30",
    "2024-10-17T12:40:00",
    "2024-10-17T13:29:30",
    "2024-10-17T18:20:00",
    "2024-10-17T18:49:00",

    "2024-10-18T08:00:00",
    "2024-10-18T09:01:00",
    "2024-10-18T10:49:30",
    "2024-10-18T12:49:00",
    "2024-10-18T17:20:00",
    "2024-10-18T18:49:00",
  ]
  const ecran = ECRANS.find(e => e.id === ecranId)
  if (!ecran) return <div>ecran non trouvé</div>
  return <>
    <div>{
      ECRANS.map((ecran) => {
        return <a key={ecran.id} href={`/superviseur?ecran=${ecran.id}`}
                  style={{marginRight: '10px'}}>[{ecran.id}] {ecran.nom}</a>
      })
    }</div>
    <h1>Jeudi</h1>
    <div className={"superviseur"}>
      {dates.filter(d => d.startsWith("2024-10-17")).map((date) => {
        return <IframeEcran key={date} ecran={ecran} date={date}/>;
      })}
    </div>
    <h1>Vendredi</h1>
    <div className={"superviseur"}>
      {dates.filter(d => d.startsWith("2024-10-18")).map((date) => {
        return <IframeEcran key={date} ecran={ecran} date={date}/>;
      })}
    </div>
  </>
}