import React from "react";
import {DevfestNantesGrandEcran} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesGrandEcran.tsx";
import {Player} from "@remotion/player";
import {DEFAULT_DURATION_IN_FRAMES} from "../../data/Ecrans.ts";

export const GrandEcranTitanRemotion: React.FC = () => {
  const currentTemplate = {
    compositionName: 'DevfestNantesGrandEcran',
    component: DevfestNantesGrandEcran,
    width: 4352,
    height: 768,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
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
