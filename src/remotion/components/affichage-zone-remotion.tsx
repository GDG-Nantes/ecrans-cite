import React from "react";
import {ConfigAfficheShortVid} from "src/types.ts";
import {DevfestNantesLoopTotem} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesLoopTotem.tsx";
import {DevfestNantesTalk} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesTalk.tsx";
import {Player} from "@remotion/player";

export const AffichageZoneRemotion: React.FC<{ configAffiche: ConfigAfficheShortVid, portrait?: boolean }> = ({
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