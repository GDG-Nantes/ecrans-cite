import {Img, interpolate, staticFile, useCurrentFrame} from "remotion";

import {ComponentDisplayMode} from "../../../types/defaultProps.types";

export const Moon = ({isTotemDisplayMode = false}: ComponentDisplayMode) => {
  const frame = useCurrentFrame();
  const logoWidth = 200;

  const fall = interpolate(
    frame,
    [0, 150],
    [-450, isTotemDisplayMode ? 1300 : 1000],
    {
      extrapolateRight: "clamp",
    }
  );

  const moveRight = interpolate(
    frame,
    [0, 150],
    [100, isTotemDisplayMode ? -500 : -200],
    {
      extrapolateRight: "clamp",
    }
  );

  const rotate = interpolate(frame, [0, 400], [0, 200], {
    extrapolateRight: "clamp",
  });

  return (
    <Img
      src={staticFile("/images/showcases/devfestNantes/moon.webp")}
      width={logoWidth}
      height="auto"
      style={{
        position: "absolute",
        right: moveRight,
        top: fall,
        transform: `rotate(${rotate}deg)`,
        opacity: "0.7",
        filter:
          "drop-shadow(0 0 5px #FDC)drop-shadow(0 0 15px #FDC)drop-shadow(0 0 30px #FFD)drop-shadow(0 0 40px #FFD)drop-shadow(0 0 50px #FFD)",
      }}
    />
  );
};
