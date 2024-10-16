import {Img, interpolate, staticFile, useCurrentFrame, useVideoConfig,} from "remotion";

import {ComponentDisplayMode} from "../../../types/defaultProps.types";

export const GhostBackground = ({}: //isTotemDisplayMode = false,
                                  ComponentDisplayMode) => {
  const {durationInFrames} = useVideoConfig();
  const frame = useCurrentFrame();
  const logoWidth = 350;

  const opacity = interpolate(
    frame,
    [0, 80, durationInFrames - 20, durationInFrames],
    [0, 0.1, 0.08, 0]
  );

  const zoomScale = interpolate(frame, [0, durationInFrames], [1, 2]);

  return (
    <Img
      src={staticFile("/images/showcases/devfestNantes/ghost.webp")}
      width={logoWidth}
      height="auto"
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        opacity,
        filter: "brightness(10%)",
        transform: `scale(${zoomScale})`,
      }}
    />
  );
};
