import {loadFont} from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, Img, Sequence, staticFile} from "remotion";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller";
import {GhostBackground} from "./GhostBackground";
import {Logo} from "./Logo";
import {Moon} from "./Moon";
import {Trees} from "./Trees";

const {fontFamily} = loadFont();

export const DevfestNantesDefaultTotem = () => {
  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        fontFamily,
        textTransform: "uppercase",
      }}
    >
      <Sequence>
        <BackgroundFiller
          imageUrl={staticFile(
            "/images/showcases/devfestNantes/background-filler-totem.webp"
          )}
          style={{
            transform: "scale(1)",
          }}
        />
      </Sequence>
      <Sequence>
        <Logo isTotemDisplayMode/>
      </Sequence>
      <Sequence from={30}>
        <GhostBackground/>
      </Sequence>
      <Sequence from={110}>
        <Moon isTotemDisplayMode/>
      </Sequence>
      <Sequence from={30}>
        <Trees/>
      </Sequence>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "75%",
        }}
      >
        <Img
          src={staticFile(
            "/images/showcases/devfestNantes/logo-devfest-2024.svg"
          )}
          width={"600px"}
          height="auto"
        />
      </div>
    </AbsoluteFill>
  );
};
