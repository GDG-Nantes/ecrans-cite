import {loadFont} from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, Sequence, staticFile} from "remotion";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller";
import {Moon} from "./Moon";
import {Trees} from "./Trees";
import {Logo} from "./Logo";
import {DirectionComponent} from "src/remotion/compositions/showcases/devfestNantes/DirectionComponent.tsx";
import {Direction} from "src/types.ts";

const {fontFamily} = loadFont();

export const DevfestNantesDirectionTotem = ({
                                              directions,
                                            }: {
  directions: Direction[];
}) => {
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
      <Sequence from={30}>
        <Trees/>
      </Sequence>
      <Sequence from={110}>
        <Moon isTotemDisplayMode/>
      </Sequence>
      <Sequence>
        <Logo isTotemDisplayMode/>
      </Sequence>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "75%",
          left: "25%",
          height: "100%",
        }}
      >
        {directions.map((direction, index) => (
          <DirectionComponent direction={direction} key={index}/>
        ))}
      </div>
    </AbsoluteFill>
  );
};
