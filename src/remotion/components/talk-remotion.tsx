import {RoomName, Talk} from "src/types.ts";
import React from "react";
import {DevfestNantesLoopTotem} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesLoopTotem.tsx";
import {DevfestNantesTalk} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesTalk.tsx";
import {Player} from "@remotion/player";
import {DEFAULT_DURATION_IN_FRAMES} from "../../data/Ecrans.ts";

export const TalkRemotion: React.FC<{ talk: Talk, portrait?: boolean, displayName?: RoomName }> = ({
                                                                                                     talk,
                                                                                                     portrait,
                                                                                                     displayName
                                                                                                   }) => {
  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesTalkLoopTotem',
    component: DevfestNantesLoopTotem,
    width: 720,
    height: 1280,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
  } : {
    compositionName: 'DevfestNantesLoop',
    component: DevfestNantesTalk,
    width: 1280,
    height: 720,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
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
  if (talk.startsAt?.startsWith("2024-10-16")) {
    sessionDateStart = "16 Octobre"
  } else {
    sessionDateStart = "17 Octobre"
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
