import React from "react";
import {Player} from "@remotion/player";
import {
  DevfestNantesCustomContentTotem
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesCustomContentTotem.tsx";
import {
  DevfestNantesCustomContent
} from "src/remotion/compositions/showcases/devfestNantes/DevfestNantesCustomContent.tsx";
import {TalkTitle} from "src/remotion/compositions/showcases/devfestNantes/TalkTitle.tsx";
import {useCurrentDate} from "src/helpers.ts";
import {format} from "date-fns";
import classnames from "classnames";
import {QRCodeSVG} from "qrcode.react";

export const PlanningCitd: React.FC<{ portrait?: boolean }> = ({portrait}) => {

  const currentTemplate = portrait ? {
    compositionName: 'DevfestNantesPlanningCitdTotem',
    component: DevfestNantesPlanningCitdTotem,
    width: 720,
    height: 1280,
    durationInFrames: 350,
  } : {
    compositionName: 'DevfestNantesPlanningCitd',
    component: DevfestNantesPlanningCitd,
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

const DevfestNantesPlanningCitdTotem = () => {
  const currentDate = useCurrentDate()
  const estPremierJour = currentDate.getDate() == 17;
  const estDeuxiemeJour = currentDate.getDate() == 18;
  const heure = format(currentDate, "HH:mm");
  return <DevfestNantesCustomContentTotem>
    <TalkTitle title={"Code In The Dark"} style={{bottom: "unset", top: "300px", fontSize: "30px"}}
               isTotemDisplayMode={true}/>
    {estDeuxiemeJour && heure > '12:00' ?
      <>
        <TalkTitle style={{fontSize: "20px", top: "400px"}}
                   isTotemDisplayMode={true}>
          <p>C'est fini pour cette année</p>
          <p>Mais essayez chez vous !</p>
          <QRCodeSVG value={"https://citd.gdgnantes.com"} size={300} bgColor={"#e4585cba"}/>
        </TalkTitle>

      </>
      :
      <TalkTitle isTotemDisplayMode={true} style={{textAlign: "left", width: "80%"}}>
        <p>Prochaines séances:</p>
        <ul>
          <li className={classnames(estDeuxiemeJour || (estPremierJour && heure >= '12:00') && 'crossed')}>Jeudi 11h10
          </li>
          <li className={classnames(estDeuxiemeJour || (estPremierJour && heure >= '16:00') && 'crossed')}>Jeudi 15h10
          </li>
          <li>Vendredi 11h10</li>
        </ul>
      </TalkTitle>
    }
  </DevfestNantesCustomContentTotem>
}

const DevfestNantesPlanningCitd = () => {
  const currentDate = useCurrentDate()
  const estPremierJour = currentDate.getDate() == 17;
  const estDeuxiemeJour = currentDate.getDate() == 18;
  const heure = format(currentDate, "HH:mm");
  return <DevfestNantesCustomContent>
    <TalkTitle title={"Code In The Dark"} style={{bottom: "unset", top: "150px", fontSize: "30px"}}
               isTotemDisplayMode={true}/>
    {estDeuxiemeJour && heure > '12:00' ?
      <>
        <TalkTitle style={{fontSize: "20px", top: "250px"}}
                   isTotemDisplayMode={true}>
          <p>C'est fini pour cette année</p>
          <p>Mais essayez chez vous !</p>
          <QRCodeSVG value={"https://citd.gdgnantes.com"} size={200} bgColor={"#e4585cba"}/>
        </TalkTitle>

      </>
      :
      <TalkTitle isTotemDisplayMode={true} style={{top: "250px", width: "60%"}}>
        <p>Prochaines séances:</p>
        <ul>
          <li className={classnames(estDeuxiemeJour || (estPremierJour && heure >= '12:00') && 'crossed')}>Jeudi 11h10
          </li>
          <li className={classnames(estDeuxiemeJour || (estPremierJour && heure >= '16:00') && 'crossed')}>Jeudi 15h10
          </li>
          <li>Vendredi 11h10</li>
        </ul>
      </TalkTitle>
    }
  </DevfestNantesCustomContent>
}