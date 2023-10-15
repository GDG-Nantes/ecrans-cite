import React from "react";
import {Direction} from "src/types.ts";
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp} from "react-icons/ai";
import {BsArrowReturnLeft} from "react-icons/bs";

export const DirectionComponent: React.FC<{ direction: Direction, large?: boolean }> = ({direction, large}) => {
  let fleche: React.ReactElement
  switch (direction.sens) {
    case "haut":
      fleche = <AiOutlineArrowUp size={"5rem"}/>
      break
    case "bas":
      fleche = <AiOutlineArrowDown size={"5rem"}/>
      break
    case "gauche":
      fleche = <AiOutlineArrowLeft size={"5rem"}/>
      break
    case "droite":
      fleche = <AiOutlineArrowRight size={"5rem"}/>
      break
    case "bas-gauche":
      fleche = <BsArrowReturnLeft size={"5rem"}/>
      break
    default:
      fleche = <></>
  }
  return <div style={{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }}>
    {fleche}
    <h1 style={{
      fontSize: large ? "4rem" : "3rem",
      margin: "20px 0 0 50px"
    }}>
      {direction.nom}
    </h1>
  </div>
}
