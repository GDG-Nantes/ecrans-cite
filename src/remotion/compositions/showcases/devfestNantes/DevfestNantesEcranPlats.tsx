import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Img, Sequence, staticFile,} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

const {fontFamily} = loadFont();

export const DevfestNantesEcranPlat = () => {

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
      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}><Img
        src={staticFile(
          '/images/showcases/devfestNantes/logo-devfest-mgm_transparent.svg',
        )}
        height={"500px"}
        width="auto"
      />
      </div>
    </AbsoluteFill>
  );
};

