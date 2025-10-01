import {Direction} from "src/types.ts";
import {DirectionComponent} from "src/remotion/compositions/showcases/devfestNantes/DirectionComponent.tsx";
import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";

export const DevfestNantesDirection = ({
                                         directions,
                                       }: {
  directions: Direction[];
}) => {
  return (
    <DevfestNantesCustomContent>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "70%",
          left: "30%",
          height: "100%",
        }}
      >
        {directions.map((direction, index) => (
          <DirectionComponent direction={direction} key={index}/>
        ))}
      </div>
    </DevfestNantesCustomContent>
  );
};
