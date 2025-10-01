import {DirectionComponent} from "src/remotion/compositions/showcases/devfestNantes/DirectionComponent.tsx";
import {Direction} from "src/types.ts";
import {DevfestNantesCustomContentTotem} from "./DevfestNantesCustomContentTotem.tsx";

export const DevfestNantesDirectionTotem = ({
                                              directions,
                                            }: {
  directions: Direction[];
}) => {
  return (
    <DevfestNantesCustomContentTotem>
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
    </DevfestNantesCustomContentTotem>
  );
};
