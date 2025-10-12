import React from "react";
import {Player} from "@remotion/player";
import {
  DevfestNantesCustomContent
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesCustomContent.tsx";
import {TalkTitle} from "src/remotion/compositions/showcases/devfestNantes/TalkTitle.tsx";
import {DEFAULT_DURATION_IN_FRAMES} from "../../data/Ecrans.ts";
import {Sequence} from "remotion";
import {Speakers} from "../compositions/showcases/devfestNantes/Speakers.tsx";

export const PartenairesAfterParty: React.FC<{ portrait?: boolean}> = () => {

  const currentTemplate = {
    compositionName: 'DevfestNantesPartenairesAfter',
    component: DevfestNantesPartenairesAfterParty,
    width: 1280,
    height: 720,
    durationInFrames: DEFAULT_DURATION_IN_FRAMES,
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

const DevfestNantesPartenairesAfterParty = () => {

  const firstSequenceDuration = DEFAULT_DURATION_IN_FRAMES / 10 * 7;

  return <DevfestNantesCustomContent>
    <Sequence from={0} durationInFrames={firstSequenceDuration}>
      <Speakers speakers={[{
        name: "Fleurs du malt",
        picture: "https://github.com/GDG-Nantes/Devfest2023/assets/525974/ac2c08ff-bccd-4894-9a7d-9d6c0fa6fb93"
      }, {
        name: "Délirium",
        picture: "https://github.com/GDG-Nantes/Devfest2023/assets/525974/d1f25689-25c3-4fce-8f19-2b41c6f90dff"
      }]} />
      <TalkTitle title={"Prolongez la soirée dans les bars ! Réduction avec votre badge"}
                 style={{bottom: "unset", top: "200px", fontSize: "30px"}} isTotemDisplayMode={true}/>
    </Sequence>

    <Sequence from={firstSequenceDuration} durationInFrames={DEFAULT_DURATION_IN_FRAMES - firstSequenceDuration}>
      <TalkTitle title={"Contactez un taxi pour rentrer chez vous en toute sécurité !"}
                 style={{bottom: "unset", top: "300px", fontSize: "40px"}} isTotemDisplayMode={true}/>
      <TalkTitle title={"AlloTaxi: 06.47.82.07.39"} style={{bottom: "unset", top: "450px", fontSize: "30px"}} isTotemDisplayMode={true}/>
      <TalkTitle title={"Taxi AC: 06.98.53.33.39"} style={{bottom: "unset", top: "550px", fontSize: "30px"}} isTotemDisplayMode={true}/>
    </Sequence>
  </DevfestNantesCustomContent>
}
