import { loadFont } from "@remotion/google-fonts/CrimsonText";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { BackgroundFiller } from "../../../design/atoms/BackgroundFiller";
import { DefaultProps } from "../../../types/defaultProps.types";
import { TalkTitle } from "./TalkTitle";

import { Logo } from "./Logo";
import { Details } from "./Details";
import { GhostBackground } from "./GhostBackground";
import { Moon } from "./Moon";
import { Trees } from "./Trees";

const { fontFamily } = loadFont();
export const DevfestNantesPhrase = ({
  title,
  location,
  time,
}: DefaultProps) => {
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
            "/images/showcases/devfestNantes/background-filler-paysage.png"
          )}
          style={{
            transform: "scale(1)",
          }}
        />
      </Sequence>
      <Sequence from={30}>
        <GhostBackground />
      </Sequence>
      <Sequence from={110}>
        <Moon />
      </Sequence>
      <Sequence from={30}>
        <Trees />
      </Sequence>
      <Sequence>
        <Logo />
      </Sequence>
      <Sequence name="Speakers" from={30}>
        <TalkTitle
          title={title}
          style={{
            bottom: "300px",
          }}
        />
      </Sequence>
      <Sequence from={70}>
        <Details time={time} location={location} isTotemDisplayMode={false} />
      </Sequence>
    </AbsoluteFill>
  );
};
