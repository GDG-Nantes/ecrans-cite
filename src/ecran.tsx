import {useQuery} from "@tanstack/react-query"
import {Footer} from "./footer"
import {getPlanning, Talk} from "./service"
import {DevfestNantesLoop} from './remotion/compositions/showcases/devfestNantes/DevfestNantesLoop';
import {Player} from '@remotion/player';
import styles from './styles/app/layout/main.module.css';
import {ConfigEcran} from "./Router.tsx";
import React from "react";
import {useCurrentDate} from "./helpers.ts";
import {parseISO} from "date-fns";

function formatTalkToShortvid(talk: Talk) {
  let sessionDateStart: string
  if (talk.startsAt?.startsWith("2023-10-20")) {
    sessionDateStart = "20 Octobre"
  } else {
    sessionDateStart = "19 Octobre"
  }
  const dateStart = new Date(talk.startsAt)
  const sessionTimeStart = dateStart.getHours() + "h" + dateStart.getMinutes().toString().padStart(2, '0')
  return {
    title: talk.title,
    speakers: talk.speakers.map((speaker) => {
      return {name: speaker.name, picture: speaker.photoUrl}
    }),
    date: sessionDateStart,
    time: sessionTimeStart,
    location: talk.room?.name,
  }
}

export const Ecran: React.FC<ConfigEcran> = ({salle}) => {

  const {data: planning, error} = useQuery(['planning'], () => getPlanning())
  const currentDate = useCurrentDate()

  if (error || planning == null) {
    return <div>Une erreur s'est produite</div>
  }

  let body: React.ReactElement
  if (salle != null) {
    const talksSalle = planning.filter(talk => talk.room?.name === salle)
    const talkEnCours = talksSalle.find(talk => parseISO(talk.startsAt).toISOString() <= currentDate.toISOString() && parseISO(talk.endsAt).toISOString() >= currentDate.toISOString())

    // console.log(talkEnCours)

    if (talkEnCours) {
      body = <TalkRemotion talk={talkEnCours}/>
    } else {
      body = (<div> pas de talk en cours
      </div>)
    }
  }
  else {
    body = <div> pas de salle
    </div>
  }

  return <>
    {body}
    <Footer/>
  </>
}


const TalkRemotion: React.FC<{ talk: Talk }> = ({talk}) => {

  const currentTemplate = {
    compositionName: 'DevfestNantesLoop',
    component: DevfestNantesLoop,
    width: 1280,
    height: 720,
    durationInFrames: 350,
  };
  return <Player
    autoPlay
    controls={false}
    loop
    className={styles.video}
    style={{
      width: '100%',
      aspectRatio: '16/9',
    }}
    durationInFrames={currentTemplate.durationInFrames}
    compositionWidth={currentTemplate.width}
    compositionHeight={currentTemplate.height}
    fps={30}
    component={currentTemplate.component as never}
    inputProps={formatTalkToShortvid(talk)}
  />
}
