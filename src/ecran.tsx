import { useQuery } from "@tanstack/react-query"
import { Footer } from "./footer"
import { getPlanning } from "./service"
import { parseISO } from "date-fns"

export const Ecran: React.FC<{id: string, nom: string}> = ({ id, nom }) => {

    const {data: planning, error} = useQuery(['planning'], () => getPlanning(id))

    if (error) {
        return <div>Erreur</div>
    }

    const talkEnCours = planning?.talks?.find(talk => parseISO(talk.heureDebut) < new Date() && parseISO(talk.heureFin) > new Date())
    
    let body = <></>
    if (talkEnCours) {
        body = <BodyTalkEnCours talk={talkEnCours} />
    } else {
        body = <div>
            <h1>Il n'y a pas de talk en cours</h1>
        </div>
    }
    return <>
        {body}
        <Footer nom={nom}/>
    </>
}

const BodyTalkEnCours: React.FC<{talk: any}> = ({talk}) => {
    return <div>
        <h1>{talk.titre}</h1>
        <h2>{talk.heureDebut} - {talk.heureFin}</h2>
        <h2>{talk.salle}</h2>
        <h2>{talk.description}</h2>
        {talk.speakers.map((speaker: any) => <div><h2>{speaker.nom}</h2><img style={{height: '100px', width: '100px'}} src={speaker.avatar}/></div>)}
        
    </div>
}
