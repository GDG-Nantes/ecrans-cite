import {loadFont} from '@remotion/google-fonts/CrimsonText';
import {AbsoluteFill, Img, staticFile,} from 'remotion';


import {DirectionComponent} from "src/remotion/compositions/showcases/devfestNantes/DirectionComponent.tsx";
import {useCurrentDate} from "src/helpers.ts";

const {fontFamily} = loadFont();

export const DevfestNantesGrandEcran = () => {

  const currentDate = useCurrentDate();
  return (
    <AbsoluteFill
    style={{
      backgroundColor: '#e4595c',
      overflow: 'hidden',
      fontFamily,
      textTransform: 'uppercase',
      boxShadow:
        'inset 0 0px 200px rgba(0, 0, 0, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
    }}
  >
      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: "30%",
        height: "50%",
        left: "15%",
        bottom: "5%",
      }}>
        <DirectionComponent large direction={{nom: "Jules Verne", sens: "gauche"}}/>
        {currentDate.getDate() == 19 &&
          <DirectionComponent large direction={{nom: "After Party", sens: "gauche"}}/>}
      </div>
      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "20%",
        height: "50%",
        right: "10%",
        bottom: "5%"
      }}>
        <DirectionComponent large direction={{nom: "Titan", sens: "bas"}}/>
      </div>
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
          '/images/showcases/devfestNantes/logo-devfest-2024.svg',
        )}
        width={"1000px"}
        height="auto"
      />
      </div>
    </AbsoluteFill>
  );
};

