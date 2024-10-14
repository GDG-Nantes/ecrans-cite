import { loadFont } from "@remotion/google-fonts/CrimsonText";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  staticFile,
} from "remotion";

import { DefaultProps } from "../../../types/defaultProps.types";
import { BackgroundFiller } from "../../../design/atoms/BackgroundFiller";
import { Logo } from "./Logo";
import { Details } from "./Details";
import { TalkTitle } from "./TalkTitle";
import { GhostBackground } from "./GhostBackground";
import { Moon } from "./Moon";
import { Trees } from "./Trees";

const { fontFamily } = loadFont();

export const DevfestNantesPhraseTotem = ({
  title,
  time,
  location,
}: DefaultProps) => {
  const frame = useCurrentFrame();

  const SlideDown = interpolate(frame, [300, 330], [0, 1300], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.51, -0.75, 0.99, 0.75),
  });

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
            "/images/showcases/devfestNantes/background-filler-totem.png"
          )}
          style={{
            transform: "scale(1)",
          }}
        />
      </Sequence>
      <Sequence>
        <Logo isTotemDisplayMode />
      </Sequence>
      <Sequence from={30}>
        <GhostBackground />
      </Sequence>
      <Sequence from={30}>
        <Trees />
      </Sequence>
      <Sequence from={110}>
        <Moon isTotemDisplayMode />
      </Sequence>
      <div
        style={{
          height: "100%",
          transform: `translateY(${SlideDown}px)`,
        }}
      >
        <Sequence name="Speakers" from={30}>
          <TalkTitle
            title={title}
            style={{ top: "400px" }}
            isTotemDisplayMode
          />
        </Sequence>
        <Sequence from={70}>
          <Details time={time} location={location} isTotemDisplayMode />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
