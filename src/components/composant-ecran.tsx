import {Footer} from "src/components/footer.tsx"
import React, {useState} from "react";
import {useCurrentDate} from "src/helpers.ts";
import {format} from "date-fns";
import {ConfigEcran, Talk} from "src/types.ts";
import {AFFICHES_ZONE} from "src/data/configsAffichagesZones.ts";
import {
  ASCENSEUR_EFFRAYANT,
  ECRAN_ESCALIER_TITAN,
  ECRANS_ASCENSEUR_SPEAKER,
  ECRANS_COULOIR_GRANDE_HALL,
  estParmisEcrans
} from "src/data/Ecrans.ts";
import {TalkRemotion} from "src/remotion/components/talk-remotion.tsx";
import {PhraseRemotion} from "src/remotion/components/phrase-remotion.tsx";
import {DirectionRemotion} from "src/remotion/components/direction-remotion.tsx";
import {DefaultRemotion} from "src/remotion/components/default-remotion.tsx";
import {GrandEcranTitanRemotion} from "src/remotion/components/grand-ecran-titan-remotion.tsx";
import {EcranPlatGrandeGalerieRemotion} from "src/remotion/components/ecran-plat-grande-galerie-remotion.tsx";
import {AffichageZoneRemotion} from "src/remotion/components/affichage-zone-remotion.tsx";
import {ScaryElevatorRemotion} from "src/remotion/components/scary-elevator-remotion.tsx";
import {PlanningCitd} from "src/remotion/components/planning-citd.tsx";

export const ComposantEcran: React.FC<{ planning?: Talk[] } & ConfigEcran> = ({planning, ...configEcran}) => {

  const currentDate = useCurrentDate()

  // Permet de ne pas s'abonner à currentDate qui change trop souvent
  const [refreshInterval, setRefreshInterval] = useState(new Date())
  React.useEffect(() => {
    const interval = setInterval(() => setRefreshInterval(new Date()), 10000)
    return () => clearInterval(interval)
  }, [])

  const isSalle = configEcran.tags?.includes("room");
  const estPremierJour = currentDate.getDate() == 17;
  const estDeuxiemeJour = currentDate.getDate() == 18;
  const heure = format(currentDate, "HH:mm");

  const body = React.useMemo(() => {

      const isPortrait = configEcran.orientation === "portrait";
      if (configEcran.id == ECRAN_ESCALIER_TITAN.id) {
        return <GrandEcranTitanRemotion/>
      }
      if (estParmisEcrans(configEcran.id, ECRANS_COULOIR_GRANDE_HALL)) {
        return <EcranPlatGrandeGalerieRemotion/>
      }
      if (estParmisEcrans(configEcran.id, ECRANS_ASCENSEUR_SPEAKER)) {
        return <PhraseRemotion title={"Level 1:  Speaker Room"}/>
      }
      if (configEcran.id == ASCENSEUR_EFFRAYANT.id) {
        return <ScaryElevatorRemotion/>
      }
      if (configEcran.directions) {
        return <DirectionRemotion directions={configEcran.directions} portrait={isPortrait}/>
      }
      if (configEcran.tags?.includes("vestiaire")) {
        return EcranVestiaire(estPremierJour, currentDate, isPortrait, estDeuxiemeJour);
      }
      if (configEcran.nom == 'Code In The Dark') {
        return <PlanningCitd portrait={isPortrait}/>
      }

      if (heure > "18:30" && estPremierJour) {
        return <PhraseRemotion
          title={"Rendez-vous à l'After Party !\nPrenez toutes vos affaires !"}
          location={"Galerie Jules Verne"}
          time={"18h30"}
          portrait={isPortrait}
        />
      } else if (heure >= '12' && heure < "13:30") {
        return <PhraseRemotion
          title={"Bon appétit !"}
          location={"Buffet par La Maison Hebel"}
          time={"12h - 14h"}
          portrait={isPortrait}
        />
      } else if (heure >= '18' && estDeuxiemeJour) {
        return <PhraseRemotion
          title={"À l'année prochaine !"}
          portrait={isPortrait}/>
      } else if (heure > "17:10" && estDeuxiemeJour && configEcran.nom !== "Jules Verne") {
        return <PhraseRemotion
          title={"Rendez-vous à la Keynote de clôture !\nPrenez vos affaires !"}
          location={"Jules Verne"}
          time={"17h20"}
          portrait={isPortrait}/>
      } else if (estPremierJour && heure < "09:40" && configEcran.nom !== "Jules Verne") {
        return <PhraseRemotion
          title={"Rendez-vous en Jules Verne pour la Keynote !"}
          portrait={isPortrait}/>
      }

      if (isSalle) {
        const {talkEnCours, prochainTalk} = calculerTalksSalle(configEcran, currentDate, planning);

        if (talkEnCours) {
          return <TalkRemotion talk={talkEnCours} portrait={isPortrait} displayName={configEcran.displayName}/>
        } else if (prochainTalk) {
          return <TalkRemotion talk={prochainTalk} portrait={isPortrait} displayName={configEcran.displayName}/>
        }
      }

      return <DefaultRemotion portrait={isPortrait}/>
    },
    [refreshInterval, planning]
  )

  return <>
    {body}
    <Footer room={isSalle ? configEcran.displayName ?? configEcran.nom : undefined}/>
  </>
}


function calculerTalksSalle(configEcran: ConfigEcran, currentDate: Date, planning?: Talk[]) {
  const talksSalle = planning?.filter(talk => talk.room?.name === configEcran.nom)
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
  const talkEnCours = talksSalle?.find(talk =>
    new Date(talk.startsAt) <= currentDate &&
    new Date(talk.endsAt) >= currentDate)

  const prochainTalk = talksSalle?.find(talk =>
    (new Date(talk.startsAt).getDate() === currentDate.getDate() || configEcran.nom === 'Jules Verne') &&
    new Date(talk.startsAt) > currentDate)
  return {talkEnCours, prochainTalk};
}

function EcranVestiaire(estPremierJour: boolean, currentDate: Date, isPortrait: boolean, estDeuxiemeJour: boolean) {
  if (estPremierJour) {
    if (format(currentDate, "HH:mm") > "21:00") {
      return <AffichageZoneRemotion configAffiche={AFFICHES_ZONE.afterBars} portrait={isPortrait}/>
    } else if (format(currentDate, "HH:mm") > "18:15") {
      return <AffichageZoneRemotion configAffiche={AFFICHES_ZONE.afterAnnonce} portrait={isPortrait}/>
    } else {
      return <AffichageZoneRemotion configAffiche={AFFICHES_ZONE.vestiaireJ1} portrait={isPortrait}/>
    }
  } else if (estDeuxiemeJour) {
    return <AffichageZoneRemotion configAffiche={AFFICHES_ZONE.vestiaireJ2} portrait={isPortrait}/>
  }
  return <PhraseRemotion
    title={"Vestiaire"}
    location={"Galerie Jules Verne"}
    portrait={isPortrait}
  />
}