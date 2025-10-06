import React from "react";
import {ConfigAfficheShortVid} from "src/types.ts";
import {DevfestNantesLoopTotem} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesLoopTotem.tsx";
import {DevfestNantesTalk} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesTalk.tsx";
import {Player} from "@remotion/player";
import {DEFAULT_DURATION_IN_FRAMES} from "../../data/Ecrans.ts";

export const AffichageZoneRemotion: React.FC<{ configAffiche: ConfigAfficheShortVid, portrait?: boolean }> = ({
                                                                                                                configAffiche,
                                                                                                                portrait
                                                                                                              }) => {
  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesTalkLoopTotem',
    component: DevfestNantesLoopTotem,
    width: 720,
    height: 1280,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
    titleFontSize: 35
  } : {
    compositionName: 'DevfestNantesLoop',
    component: DevfestNantesTalk,
    width: 1280,
    height: 720,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
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
