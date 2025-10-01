import {Sequence} from "remotion";
import {DefaultProps} from "../../../types/defaultProps.types";
import {Details} from "./Details";
import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";
import {TalkTitle} from "./TalkTitle.tsx";

export const DevfestNantesPhrase = ({
                                      title,
                                      location,
                                      time,
                                    }: DefaultProps) => {
  return (
    <DevfestNantesCustomContent>
      <Sequence name="Speakers" from={30}>
        <TalkTitle
          title={title}
          style={{
            top: "300px",
            fontSize: "55px"
          }}
        />
      </Sequence>
      <Sequence from={70}>
        <Details time={time} location={location} isTotemDisplayMode={false}/>
      </Sequence>
    </DevfestNantesCustomContent>
  );
};
