import {loadFont} from "@remotion/google-fonts/Creepster";
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig,} from "remotion";

import {Text} from "../../../design/atoms/Text";
import {AvatarWithCaption} from "../../../design/molecules/AvatarWithCaption";
import {Speaker} from "../../../types/defaultProps.types";

const {fontFamily} = loadFont();

export const Speakers: React.FC<{
  speakers: Speaker[];
  isTotemDisplayMode?: boolean;
}> = ({speakers, isTotemDisplayMode = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const pictureUp = spring({
    frame: frame,
    fps,
    from: isTotemDisplayMode ? -480 : -430,
    to: 0,
    durationInFrames: 60,
  });

  const nameOpacity = spring({
    frame: frame - 40,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 60,
  });

  const nameUnblur = interpolate(frame - 40, [0, 20], [5, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        width: "100%",
        height: isTotemDisplayMode ? "700px" : "800px",
        marginTop: isTotemDisplayMode ? "0" : "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: isTotemDisplayMode ? 20 : 100,
      }}
    >
      {speakers.map((speaker) => {
        return (
          <div
            key={speaker.name}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AvatarWithCaption
              avatarPictureUrl={speaker.picture}
              avatarStyle={{
                width: 170,
                height: 170,
                border: "none",
                boxShadow: "0 0 0 5px #1B2C2C",
                bottom: pictureUp,
              }}
              style={{
                gap: 0,
              }}
            >
              <>
                <Text
                  style={{
                    fontFamily,
                    color: "#1B2C2C",
                    textShadow:
                      "-2px 0 #FFF8F0, 0 2px #FFF8F0, 2px 0 #FFF8F0, 0 -2px #FFF8F0",
                    letterSpacing: "0.1rem",
                    position: "relative",
                    lineHeight: "2.2rem",
                    marginTop: "10px",
                    width: 350,
                    fontSize: 40,
                    fontWeight: 700,
                    opacity: nameOpacity,
                    filter: `blur(${nameUnblur}px)`,
                  }}
                >
                  {speaker.name}
                </Text>
              </>
            </AvatarWithCaption>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
