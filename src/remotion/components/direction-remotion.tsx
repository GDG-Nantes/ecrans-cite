import React from "react";
import {Direction} from "src/types.ts";
import {
  DevfestNantesDirectionTotem
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDirectionTotem.tsx";
import {DevfestNantesDirection} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesDirection.tsx";
import {Player} from "@remotion/player";

export const DirectionRemotion: React.FC<{ directions: Direction[], portrait: boolean }> = ({directions, portrait}) => {
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