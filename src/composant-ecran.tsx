import {useQuery} from "@tanstack/react-query"
import {Footer} from "./footer"
import {getPlanning} from "./service"
import {DevfestNantesTalk} from 'src/remotion/compositions/showcases/devfestNantes/DevfestNantesTalk.tsx';
import {Player} from '@remotion/player';
import React, {useState} from "react";
import {useCurrentDate} from "./helpers.ts";
import {format, formatISO} from "date-fns";
import {DevfestNantesPhrase} from "./remotion/compositions/showcases/devfestNantes/DevfestNantesPhrase";
import {ConfigAfficheShortVid, ConfigEcran, Direction, RoomName, Talk} from "src/types";
import {AFFICHES_ZONE} from "./serviceAffichageZone.ts";
import {DefaultProps} from "src/remotion/types/defaultProps.types.ts";
import {DevfestNantesDirection} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDirection.tsx";
import {DevfestNantesDefault} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDefault.tsx";
import {DevfestNantesGrandEcran} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesGrandEcran.tsx";
import {DevfestNantesLoopTotem} from "./remotion/compositions/showcases/devfestNantes/DevfestNantesLoopTotem.tsx";
import {DevfestNantesPhraseTotem} from "./remotion/compositions/showcases/devfestNantes/DevfestNantesPhraseTotem.tsx";
import {DevfestNantesDefaultTotem} from "./remotion/compositions/showcases/devfestNantes/DevfestNantesDefaultTotem.tsx";
import {
  DevfestNantesDirectionTotem
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDirectionTotem.tsx";
import {DevfestNantesEcranPlat} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesEcranPlats.tsx";

export const ComposantEcran: React.FC<ConfigEcran> = (configEcran) => {

  const {data: planning, error} = useQuery(['planning'], () => getPlanning())
  const currentDate = useCurrentDate()
  const [dateDebounced, setDateDebounced] = useState(currentDate)
  React.useEffect(() => {
    const interval = setInterval(() => setDateDebounced(new Date()), 10000)
    return () => clearInterval(interval)
  }, [])


  const isSalle = configEcran.tags?.includes("room");

  const body = React.useMemo(() => {

      if (error || planning == null) {
        return <></>
      }

      const isPortrait = configEcran.orientation === "portrait";
      if (configEcran.id == "A801") {
        return <GrandEcranTitanRemotion/>
      } else if (configEcran.id === "GG01" || configEcran.id === "GG02") {
        return <EcranPlatGrandeGalerieRemotion/>
      } else if (configEcran.id === "ASC1" || configEcran.id === "ASC2") {
        return <PhraseRemotion
          title={"Level 1:  Speaker Room"}
        />
      } else if (configEcran.directions) {
        return <DirectionRemotion directions={configEcran.directions} portrait={isPortrait}/>
      } else if (configEcran.tags?.includes("vestiaire")) {
        if (currentDate.getDate() == 19) {
          if (format(currentDate, "HH:mm") > "21:00") {
            return <AffichageZoneRemotion configAffiche={findAfficheZone("after-bars")} portrait={isPortrait}/>
          } else if (format(currentDate, "HH:mm") > "18:15") {
            return <AffichageZoneRemotion configAffiche={findAfficheZone("after-annonce")} portrait={isPortrait}/>
          } else {
            return <AffichageZoneRemotion configAffiche={findAfficheZone("vestiaireJ1")} portrait={isPortrait}/>
          }
        } else if (currentDate.getDate() == 20) {
          return <AffichageZoneRemotion configAffiche={findAfficheZone("vestiaireJ2")} portrait={isPortrait}/>
        } else {
          return <PhraseRemotion
            title={"Vestiaire"}
            location={"Galerie Jules Verne"}
            portrait={isPortrait}
          />
        }
      } else if (format(currentDate, "HH:mm") > "18:30" && currentDate.getDate() == 19) {
        return <PhraseRemotion
          title={"Rendez-vous à l'After Party !\nPrenez toutes vos affaires !"}
          location={"Galerie Jules Verne"}
          time={"18h30"}
          portrait={isPortrait}
        />
      } else if (currentDate.getHours() >= 12 && format(currentDate, "HH:mm") < "13:30") {
        return <PhraseRemotion
          title={"Bon appétit !"}
          location={"Buffet par La Maison Hebel"}
          time={"12h - 14h"}
          portrait={isPortrait}
        />
      } else if (currentDate.getHours() >= 18 && currentDate.getDate() == 20) {
        return <PhraseRemotion
          title={"À l'année prochaine !"}
          portrait={isPortrait}/>
      } else if (format(currentDate, "HH:mm") > "17:10" && currentDate.getDate() == 20 && configEcran.nom !== "Jules Verne") {
        return <PhraseRemotion
          title={"Rendez-vous à la Keynote de clôture !\nPrenez vos affaires !"}
          location={"Jules Verne"}
          time={"17h20"}
          portrait={isPortrait}/>
      } else if (formatISO(currentDate) < "2023-10-19T09:40" && configEcran.nom !== "Jules Verne") {
        return <PhraseRemotion
          title={"Rendez-vous en Jules Verne pour la Keynote !"}
          portrait={isPortrait}/>
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
          return <TalkRemotion talk={talkEnCours} portrait={isPortrait} displayName={configEcran.displayName}/>
        } else if (prochainTalk) {
          return <TalkRemotion talk={prochainTalk} portrait={isPortrait} displayName={configEcran.displayName}/>
        }
      }
      return <DefaultRemotion portrait={isPortrait}/>
    },
    [dateDebounced, error, planning]
  )

  return <>
    {body}
    <Footer room={isSalle ? configEcran.displayName || configEcran.nom : undefined}/>
  </>
}


const TalkRemotion: React.FC<{ talk: Talk, portrait?: boolean, displayName?: RoomName }> = ({
                                                                                              talk,
                                                                                              portrait,
                                                                                              displayName
                                                                                            }) => {
  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesTalkLoopTotem',
    component: DevfestNantesLoopTotem,
    width: 720,
    height: 1280,
    durationInFrames: 350,
  } : {
    compositionName: 'DevfestNantesLoop',
    component: DevfestNantesTalk,
    width: 1280,
    height: 720,
    durationInFrames: 350,
  };
  const inputShortVid = formatTalkToShortvid(talk);
  if (displayName) inputShortVid.location = displayName;
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
    inputProps={inputShortVid}
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

function findAfficheZone(idAfficheZone: string) {
  return AFFICHES_ZONE.find((afficheZone: ConfigAfficheShortVid) => afficheZone.id === idAfficheZone)!;
}


const PhraseRemotion: React.FC<DefaultProps & { portrait?: boolean }> = ({portrait, ...props}) => {

  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesPhraseTotem',
    component: DevfestNantesPhraseTotem,
    width: 720,
    height: 1280,
    durationInFrames: 350,
  } : {
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

const DirectionRemotion: React.FC<{ directions: Direction[], portrait: boolean }> = ({directions, portrait}) => {
  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesDirectionTotem',
    component: DevfestNantesDirectionTotem,
    width: 720,
    height: 1280,
    durationInFrames: 350,
  } : {
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

const DefaultRemotion: React.FC<{ portrait?: boolean }> = ({portrait}) => {
  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesDefaultTotem',
    component: DevfestNantesDefaultTotem,
    width: 720,
    height: 1280,
    durationInFrames: 350,
  } : {
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

const EcranPlatGrandeGalerieRemotion: React.FC = () => {
  const currentTemplate = {
    compositionName: 'DevfestNantesEcranPlat',
    component: DevfestNantesEcranPlat,
    width: 3840,
    height: 600,
    durationInFrames: 350,
  };
  return <Player
    autoPlay
    controls={false}
    loop
    style={{
      width: '100%',
      aspectRatio: '32/5',
    }}
    durationInFrames={currentTemplate.durationInFrames}
    compositionWidth={currentTemplate.width}
    compositionHeight={currentTemplate.height}
    fps={30}
    component={currentTemplate.component as never}
    inputProps={{}}
  />
}

const AffichageZoneRemotion: React.FC<{ configAffiche: ConfigAfficheShortVid, portrait?: boolean }> = ({
                                                                                                         configAffiche,
                                                                                                         portrait
                                                                                                       }) => {
  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesTalkLoopTotem',
    component: DevfestNantesLoopTotem,
    width: 720,
    height: 1280,
    durationInFrames: 350,
  } : {
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
    inputProps={configAffiche}
  />
}

