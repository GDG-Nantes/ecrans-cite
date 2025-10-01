import { loadFont } from "@remotion/google-fonts/CrimsonText";
import { AbsoluteFill, Img, staticFile } from "remotion";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller.tsx";
import {Fireflies} from "./Fireflies.tsx";
import {SweepFirefly} from "./SweepFirefly.tsx";

const { fontFamily } = loadFont();

export const DevfestNantesEcranPlat = () => {
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
          height={"500px"}
          width="auto"
        />
      </div>
    </AbsoluteFill>
  );
};
