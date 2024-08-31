import React from "react";
import {
  DevfestNantesDefaultTotem
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDefaultTotem.tsx";
import {DevfestNantesDefault} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDefault.tsx";
import {Player} from "@remotion/player";

export const DefaultRemotion: React.FC<{ portrait?: boolean }> = ({portrait}) => {
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