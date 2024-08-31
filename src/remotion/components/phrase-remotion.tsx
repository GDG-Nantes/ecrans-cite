import React from "react";
import {DefaultProps} from "src/remotion/types/defaultProps.types.ts";
import {DevfestNantesPhraseTotem} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesPhraseTotem.tsx";
import {DevfestNantesPhrase} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesPhrase.tsx";
import {Player} from "@remotion/player";

export const PhraseRemotion: React.FC<DefaultProps & { portrait?: boolean }> = ({portrait, ...props}) => {

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