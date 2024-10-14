import {loadFont} from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, Sequence, staticFile,} from "remotion";

import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller";
import {Logo} from "./Logo";
import {Moon} from "./Moon";
import {Trees} from "./Trees";

const {fontFamily} = loadFont();

export const DevfestNantesCustomContentTotem: React.FC<React.PropsWithChildren> = ({children}) => {
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
        <Trees/>
      </Sequence>
      <Sequence from={110}>
        <Moon isTotemDisplayMode/>
      </Sequence>
      {children}
    </AbsoluteFill>
  );
};
