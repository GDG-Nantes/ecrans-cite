import {loadFont} from "@remotion/google-fonts/CrimsonText";
import {AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame,} from "remotion";

import {DefaultProps} from "../../../types/defaultProps.types";
import {BackgroundFiller} from "../../../design/atoms/BackgroundFiller";
import {Logo} from "./Logo";
import {Details} from "./Details";
import {TalkTitle} from "./TalkTitle";
import {GhostBackground} from "./GhostBackground";
import {Moon} from "./Moon";
import {Trees} from "./Trees";
import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";

const {fontFamily} = loadFont();

export const DevfestNantesPhraseTotem = ({
                                           title,
                                           time,
                                           location,
                                         }: DefaultProps) => {


  return (
    <DevfestNantesCustomContent>
      <Sequence name="Speakers" from={30}>
        <TalkTitle
          title={title}
          style={{
            fontSize: "55px"
          }}
          isTotemDisplayMode={true}
        />
      </Sequence>
      <Sequence from={70}>
        <Details time={time} location={location}/>
      </Sequence>
    </DevfestNantesCustomContent>
  );
};
