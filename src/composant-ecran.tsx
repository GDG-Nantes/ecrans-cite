import {useQuery} from "@tanstack/react-query"
import {Footer} from "./footer"
import {getPlanning} from "./service"
import {DevfestNantesTalk} from 'src/remotion/compositions/showcases/devfestNantes/DevfestNantesTalk.tsx';
import {Player} from '@remotion/player';
import React from "react";
import {useCurrentDate} from "./helpers.ts";
import {format, formatISO} from "date-fns";
import {DevfestNantesPhrase} from "./remotion/compositions/showcases/devfestNantes/DevfestNantesPhrase";
import {ConfigEcran, Direction, Talk} from "src/types";
import {DefaultProps} from "src/remotion/types/defaultProps.types.ts";
import {DevfestNantesDirection} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDirection.tsx";
import {DevfestNantesDefault} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDefault.tsx";
import {DevfestNantesGrandEcran} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesGrandEcran.tsx";

export const ComposantEcran: React.FC<ConfigEcran> = (configEcran) => {

  const {data: planning, error} = useQuery(['planning'], () => getPlanning())
  const currentDate = useCurrentDate()

  if (error || planning == null) {
    return <Footer/>
  }

  const isSalle = configEcran.tags.includes("room");

  let body: React.ReactElement = <DefaultRemotion/>
  if (configEcran.id == "A801") {
    body = <GrandEcranTitanRemotion/>
  } else if (configEcran.directions) {
    body = <DirectionRemotion directions={configEcran.directions}/>
  } else if (configEcran.tags.includes("vestiaire")) {
    body = <PhraseRemotion
      title={"Vestiaire"}
      location={"Galerie Jules Verne"}
    />
  } else if (format(currentDate, "HH:mm") > "18:30" && currentDate.getDate() == 19) {
    body = <PhraseRemotion
      title={"Rendez-vous à l'After Party !\nPrenez toutes vos affaires !"}
      location={"Galerie Jules Verne"}
      time={"18h30"}/>
  } else if (currentDate.getHours() >= 12 && format(currentDate, "HH:mm") < "13:30") {
    body = <PhraseRemotion
      title={"Bon appetit !"}
      location={"Buffet par La Maison Hebel"}
      time={"12h - 14h"}/>
  } else if (currentDate.getHours() >= 18 && currentDate.getDate() == 20) {
    body = <PhraseRemotion
      title={"À l'année prochaine !"}/>
  } else if (format(currentDate, "HH:mm") > "17:10" && currentDate.getDate() == 20 && configEcran.nom !== "Jules Verne") {
    body = <PhraseRemotion
      title={"Rendez-vous à la keynote de cloture !\nPrenez vos affaires !"}
      location={"Jules Verne"}
      time={"17h20"}/>
  } else if (formatISO(currentDate) < "2023-10-19T09:40" && configEcran.nom !== "Jules Verne") {
    body = <PhraseRemotion
      title={"Rendez-vous en Jules Verne pour la Keynote !"}/>
  } else if (isSalle) {
    const talksSalle = planning
      .filter(talk => talk.room?.name === configEcran.nom)
      .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
    const talkEnCours = talksSalle.find(talk =>
      new Date(talk.startsAt) <= currentDate &&
      new Date(talk.endsAt) >= currentDate)

    const prochainTalk = talksSalle.find(talk =>
      (new Date(talk.startsAt).getDate() === currentDate.getDate() || configEcran.nom === 'Jules Verne') &&
      new Date(talk.startsAt) > currentDate)


    if (talkEnCours) {
      body = <TalkRemotion talk={talkEnCours}/>
    } else if (prochainTalk) {
      body = <TalkRemotion talk={prochainTalk}/>
    }
  }

  return <>
    {body}
    <Footer room={isSalle ? configEcran.nom : undefined}/>
  </>
}


const TalkRemotion: React.FC<{ talk: Talk }> = ({talk}) => {
  const currentTemplate = {
    compositionName: 'DevfestNantesLoop',
    component: DevfestNantesTalk,
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

const PhraseRemotion: React.FC<DefaultProps> = (props) => {

  const currentTemplate = {
    compositionName: 'DevfestNantesPhrase',
    component: DevfestNantesPhrase,
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
    inputProps={props}
  />
}

const DirectionRemotion: React.FC<{ directions: Direction[] }> = ({directions}) => {
  const currentTemplate = {
    compositionName: 'DevfestNantesDirection',
    component: DevfestNantesDirection,
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
    inputProps={{directions}}
  />
}

const DefaultRemotion: React.FC = () => {
  const currentTemplate = {
    compositionName: 'DevfestNantesDefault',
    component: DevfestNantesDefault,
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
    inputProps={{}}
  />
}

const GrandEcranTitanRemotion: React.FC = () => {
  const currentTemplate = {
    compositionName: 'DevfestNantesGrandEcran',
    component: DevfestNantesGrandEcran,
    width: 4352,
    height: 768,
    durationInFrames: 350,
  };
  return <Player
    autoPlay
    controls={false}
    loop
    style={{
      width: '100%',
      aspectRatio: '34/6',
    }}
    durationInFrames={currentTemplate.durationInFrames}
    compositionWidth={currentTemplate.width}
    compositionHeight={currentTemplate.height}
    fps={30}
    component={currentTemplate.component as never}
    inputProps={{}}
  />
}
