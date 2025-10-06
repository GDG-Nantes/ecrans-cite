import React from "react";
import {DevfestNantesEcranPlat} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesEcranPlats.tsx";
import {Player} from "@remotion/player";
import {DEFAULT_DURATION_IN_FRAMES} from "../../data/Ecrans.ts";

export const EcranPlatGrandeGalerieRemotion: React.FC = () => {
  const currentTemplate = {
    compositionName: 'DevfestNantesEcranPlat',
    component: DevfestNantesEcranPlat,
    width: 3840,
    height: 600,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
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
