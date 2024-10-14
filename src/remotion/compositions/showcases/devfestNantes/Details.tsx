import {loadLocalFont} from "../../../../../src/utils/loadFont";
import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";

import {TalkDetails} from "../../../design/molecules/TalkDetails";

loadLocalFont("HigherJump", "font/HigherJump.ttf", "truetype");

export const Details: React.FC<{
  date?: string;
  time?: string;
  location?: string;
  style?: React.CSSProperties;
  isTotemDisplayMode?: boolean;
}> = ({date, time, location, style, isTotemDisplayMode}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const drop = spring({
    frame: frame,
    from: -40,
    to: isTotemDisplayMode ? 100 : 20,
    fps,
    durationInFrames: 40,
  });
  const opacity = spring({
    frame: frame,
    from: 0,
    to: 1,
    fps,
    durationInFrames: 40,
  });
  const textUnblur = interpolate(frame, [0, 18], [5, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <TalkDetails
      items={{
        date,
        time,
        location,
      }}
      style={{
        fontFamily: "HigherJump",
        opacity,
        bottom: `${drop}px`,
        left: "50%",
        width: isTotemDisplayMode ? "96%" : "90%",
        fontSize: "20px",
        letterSpacing: "0.3rem",
        lineHeight: "2.8rem",
        color: "#FFF8F0",
        textShadow:
          "-2px 0 #1B2C2C, 0 2px #1B2C2C, 2px 0 #1B2C2C, 0 -2px #1B2C2C",
        transform: "translateX(-50%)",
        filter: `blur(${textUnblur}px)`,
        ...style,
      }}
      iconStyle={{
        display: "none",
      }}
    />
  );
};
