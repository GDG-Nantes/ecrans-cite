import React from "react";
import {Player} from "@remotion/player";
import {
  DevfestNantesCustomContent
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesCustomContent.tsx";
import {TalkTitle} from "src/remotion/compositions/showcases/devfestNantes/TalkTitle.tsx";
import {AiOutlineArrowDown} from "react-icons/ai";

export const PlanningBar: React.FC<{ portrait?: boolean}> = ({portrait}) => {

  const currentTemplate = {
    compositionName: 'DevfestNantesBar',
    component: DevfestNantesBar,
    width: 1280,
    height: 720,
    durationInFrames: 350,
  };
  return <Player
    autoPlay
    controls={false}
    loop
    style={{
      width: '100%',
      aspectRatio: '16/9',
    }}
    durationInFrames={currentTemplate.durationInFrames}
    compositionWidth={currentTemplate.width}
    compositionHeight={currentTemplate.height}
    fps={30}
    component={currentTemplate.component as never}
  />
}

const DevfestNantesBar = () => {
  return <DevfestNantesCustomContent>
    <TalkTitle title={"Afterparty : Soft, bière et vin"} style={{bottom: "unset", top: "200px", fontSize: "30px"}}
               isTotemDisplayMode={true}/>
      <>
      <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            paddingLeft: "600px",
            bottom: "-250px",
          }}
        >
          <AiOutlineArrowDown size={"5rem"}
            style={{
              filter: "drop-shadow(2px 2px 2px #1B2C2C)",
            }}/>
        </div>
      </>
  </DevfestNantesCustomContent>
}