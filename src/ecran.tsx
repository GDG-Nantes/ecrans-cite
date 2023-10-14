import {useQuery} from "@tanstack/react-query"
import {Footer} from "./footer"
import {getPlanning} from "./service"
import {DevfestNantesLoop} from './remotion/compositions/showcases/devfestNantes/DevfestNantesLoop';
import {Player} from '@remotion/player';
import React from "react";
import {useCurrentDate} from "./helpers.ts";
import {parseISO} from "date-fns";
import {ConfigEcran, Talk} from "src/types.ts";

export const Ecran: React.FC<ConfigEcran> = (configEcran) => {

  const {data: planning, error} = useQuery(['planning'], () => getPlanning())
  const currentDate = useCurrentDate()

  if (error || planning == null) {
    return <Footer/>
  }

  let body: React.ReactElement = <Footer/>
  if (configEcran.tags.includes("room")) {
    const talksSalle = planning
      .filter(talk => talk.room?.name === configEcran.nom)
      .sort((a, b) => parseISO(a.startsAt).getTime() - parseISO(b.startsAt).getTime())
    const talkEnCours = talksSalle.find(talk =>
      parseISO(talk.startsAt).toISOString() <= currentDate.toISOString() &&
      parseISO(talk.endsAt).toISOString() >= currentDate.toISOString())

    const prochainTalk = talksSalle.find(talk =>
      parseISO(talk.startsAt).getDate() === currentDate.getDate() &&
      parseISO(talk.startsAt).toISOString() > currentDate.toISOString())


    if (talkEnCours) {
      body = <TalkRemotion talk={talkEnCours}/>
    } else if (prochainTalk) {
      body = <TalkRemotion talk={prochainTalk}/>
    } else {
      // body = <div> pas de talk à venir </div>
    }
  } else {
    // body = <div> pas de salle </div>
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

function formatTalkToShortvid(talk: Talk) {
  let sessionDateStart: string
  if (talk.startsAt?.startsWith("2023-10-20")) {
    sessionDateStart = "20 Octobre"
  } else {
    sessionDateStart = "19 Octobre"
  }
  const dateStart = new Date(talk.startsAt)
  const dateEnd = new Date(talk.endsAt)
  const sessionTimeStart = dateStart.getHours() + "h" + dateStart.getMinutes().toString().padStart(2, '0') + " - " + dateEnd.getHours() + "h" + dateEnd.getMinutes().toString().padStart(2, '0')
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
