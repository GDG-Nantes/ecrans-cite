import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Img, Sequence, staticFile,} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

import {Android} from './Android';
import {Dino} from './Dino';

const {fontFamily} = loadFont();

export const DevfestNantesDefaultTotem = () => {

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'white',
        overflow: 'hidden',
        fontFamily,
        textTransform: 'uppercase',
      }}
    >
      <Sequence>
        <BackgroundFiller
          imageUrl={staticFile(
            '/images/showcases/devfestNantes/fond-visuel-etoiles.png',
          )}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </Sequence>
      <Sequence from={30}>
        <Dino/>
      </Sequence>
      <Sequence from={110}>
        <Android isTotemDisplayMode/>
      </Sequence>
      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "75%",
      }}><Img
        src={staticFile(
          '/images/showcases/devfestNantes/logo-devfest-mgm_transparent.svg',
        )}
        width={"600px"}
        height="auto"
      />
      </div>
    </AbsoluteFill>
  );
};
