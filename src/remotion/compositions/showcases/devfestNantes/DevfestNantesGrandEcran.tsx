import { loadFont } from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, Img, staticFile} from "remotion";

import { DirectionComponent } from "src/remotion/compositions/showcases/devfestNantes/DirectionComponent.tsx";
import { useCurrentDate } from "src/helpers.ts";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller.tsx";
import {Fireflies} from "./Fireflies.tsx";
import {SweepFirefly} from "./SweepFirefly.tsx";

const { fontFamily } = loadFont();

export const DevfestNantesGrandEcran = () => {
  const currentDate = useCurrentDate();

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        fontFamily,
        textTransform: 'uppercase',
        backgroundColor: '#22170D',
      }}
    >
      <BackgroundFiller
        imageUrl={staticFile(
          'images/showcases/devfestNantes/library.png',
        )}
        style={{
          transformOrigin: 'center center',
          opacity: 0.70,
        }}
      />
      <Fireflies count={50} opacity={1} />
      <SweepFirefly
        y={420}
        size={60}
        durationInFrames={140}
        opacity={1}
        direction="rtl"
        driftAmp={6}
        driftFreq={2.0}
        flickerAmp={0.12}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          width: "30%",
          height: "50%",
          left: "15%",
          bottom: "5%",
        }}
      >
        <DirectionComponent
          large
          direction={{ nom: "Jules Verne", sens: "gauche" }}
        />
        {currentDate.getDate() == 19 && (
          <DirectionComponent
            large
            direction={{ nom: "After Party", sens: "gauche" }}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "20%",
          height: "50%",
          right: "10%",
          bottom: "5%",
        }}
      >
        <DirectionComponent large direction={{ nom: "Titan", sens: "bas" }} />
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Img
          src={staticFile(
            "/images/showcases/devfestNantes/logo-devfest-2025.png"
          )}
          width={"1000px"}
          height="auto"
        />
      </div>
    </AbsoluteFill>
  );
};
