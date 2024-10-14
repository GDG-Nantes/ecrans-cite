import React from "react";
import { Direction } from "src/types.ts";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";

export const DirectionComponent: React.FC<{
  direction: Direction;
  large?: boolean;
}> = ({ direction, large }) => {
  let fleche: React.ReactElement;
  const size = large ? "6rem" : "5rem";
  switch (direction.sens) {
    case "haut":
      fleche = <AiOutlineArrowUp size={size} />;
      break;
    case "bas":
      fleche = <AiOutlineArrowDown size={size} />;
      break;
    case "gauche":
      fleche = <AiOutlineArrowLeft size={size} />;
      break;
    case "droite":
      fleche = <AiOutlineArrowRight size={size} />;
      break;
    case "bas-gauche":
      fleche = <BsArrowReturnLeft size={size} />;
      break;
    default:
      fleche = <></>;
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {fleche}
      <h1
        style={{
          fontSize: large
            ? size
            : direction.nom === "Replay Tour Bretagne"
            ? "2rem"
            : "3rem",
          margin: "0 0 0 50px",
          flexWrap: "nowrap",
        }}
      >
        {direction.nom}
      </h1>
    </div>
  );
};
