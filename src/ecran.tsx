import { useQuery } from "@tanstack/react-query"
import { Footer } from "./footer"
import { getPlanning } from "./service"
import { getInfoEcran } from "./serviceEcran"
import { parseISO } from "date-fns"


export const Ecran: React.FC<{id: string}> = ({ id }) => {

    const {data: planning, error} = useQuery(['planning'], () => getPlanning(id))
    const ecran = getInfoEcran(id);
    if (error) {
        return <div>Erreur</div>
    }

    const talkEnCours = planning?.talks?.find(talk => parseISO(talk.heureDebut) < new Date() && parseISO(talk.heureFin) > new Date())
    let body = <></>
    if (talkEnCours) {
        body = 
        <div className={`videoContainer ratio-${ecran.ratio}`}>
            <BodyTalkEnCours talk={talkEnCours} />
        </div>
    } else {
        body = <div>
            <h1>Il n'y a pas de talk en cours</h1>
            <Footer nom={ecran.nom}/>
        </div>
    }
    return <>
        {body}        
    </>
}

const BodyTalkEnCours: React.FC<{talk: any}> = ({talk}) => {
    return <div>
        {/* <h1>{talk.titre}</h1>
        <h2>{talk.heureDebut} - {talk.heureFin}</h2>
        <h2>{talk.salle}</h2>
        <h2>{talk.description}</h2> */}
        {/* {talk.speakers.map((speaker: any) => <div><h2>{speaker.nom}</h2><img style={{height: '100px', width: '100px'}} src={speaker.avatar}/></div>)} */}
        <video controls="false" playsinline muted="true" autoplay="true" loop="true">
            <source src={talk.video} type="video/mp4"></source>
        </video> 
        </div>
}
