import {
  ECRANS,
  ECRANS_ASCENSEUR,
  ECRANS_AUTRES,
  ECRANS_BARS,
  ECRANS_DIRECTION,
  ECRANS_SALLES,
  ECRANS_VESTIAIRE
} from "src/data/Ecrans.ts";
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
    {[{
      title: "Salles",
      ecrans: ECRANS_SALLES
    }, {
      title: "Directions",
      ecrans: ECRANS_DIRECTION
    }, {
      title: "Autres",
      ecrans: ECRANS_AUTRES
    }, {
      title: "Ascenseurs",
      ecrans: ECRANS_ASCENSEUR
    }, {
      title: "Bars",
      ecrans: ECRANS_BARS
    }, {
      title: "Vestiaire",
      ecrans: ECRANS_VESTIAIRE
    }].map(({title, ecrans}) => (
      <>
        <h1>{title}</h1>
        <div className={"superviseur"}>
          {ecrans.map((ecran) => {
            return <IframeEcran key={ecran.id} ecran={ecran}/>;
          })}
        </div>
      </>
    ))}
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
    "2025-10-16T08:00:00",
    "2025-10-16T09:01:00",
    "2025-10-16T10:49:30",
    "2025-10-16T12:40:00",
    "2025-10-16T13:29:30",
    "2025-10-16T18:20:00",
    "2025-10-16T18:49:00",

    "2025-10-17T08:00:00",
    "2025-10-17T09:01:00",
    "2025-10-17T10:49:30",
    "2025-10-17T12:49:00",
    "2025-10-17T17:20:00",
    "2025-10-17T18:49:00",
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
      {dates.filter(d => d.startsWith("2025-10-16")).map((date) => {
        return <IframeEcran key={date} ecran={ecran} date={date}/>;
      })}
    </div>
    <h1>Vendredi</h1>
    <div className={"superviseur"}>
      {dates.filter(d => d.startsWith("2025-10-17")).map((date) => {
        return <IframeEcran key={date} ecran={ecran} date={date}/>;
      })}
    </div>
  </>
}