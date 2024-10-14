import {loadFont} from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame,} from "remotion";

import {DefaultProps} from "../../../types/defaultProps.types";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller";
import {Details} from "./Details";
import {Logo} from "./Logo";
import {Speakers} from "./Speakers";
import {TalkTitle} from "./TalkTitle";
import {GhostBackground} from "./GhostBackground";
import {Moon} from "./Moon";
import {Trees} from "./Trees";

const {fontFamily} = loadFont();

export const DevfestNantesLoopTotem = ({
                                         title,
                                         speakers,
                                         date,
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
            "/images/showcases/devfestNantes/background-filler-totem.webp"
          )}
          style={{
            transform: "scale(1)",
          }}
        />
      </Sequence>
      <Sequence>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            boxShadow:
              "inset 0 0px 200px rgba(0, 0, 0, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Sequence>
      <Sequence>
        <Logo isTotemDisplayMode/>
      </Sequence>
      <Sequence from={30}>
        <GhostBackground/>
      </Sequence>
      <Sequence from={30}>
        <Trees/>
      </Sequence>
      <Sequence from={110}>
        <Moon isTotemDisplayMode/>
      </Sequence>
      <div
        style={{
          height: "100%",
          transform: `translateY(${SlideDown}px)`,
        }}
      >
        <Sequence name="Speakers" from={30}>
          <Speakers speakers={speakers ?? []} isTotemDisplayMode/>
          <TalkTitle
            title={title}
            style={{
              fontSize: 35,
              maxHeight: "300px",
            }}
            isTotemDisplayMode
          />
        </Sequence>
        <Sequence from={70}>
          <Details
            date={date}
            time={time}
            location={location}
            isTotemDisplayMode
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
