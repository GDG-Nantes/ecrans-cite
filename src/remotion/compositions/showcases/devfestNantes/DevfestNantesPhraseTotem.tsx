import {Sequence} from "remotion";

import {DefaultProps} from "../../../types/defaultProps.types";
import {Details} from "./Details";
import {TalkTitle} from "./TalkTitle";
import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";

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
