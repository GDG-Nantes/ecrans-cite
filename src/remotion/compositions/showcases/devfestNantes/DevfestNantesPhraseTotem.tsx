import {Img, Sequence, staticFile} from "remotion";

import {DefaultProps} from "../../../types/defaultProps.types";
import {Details} from "./Details";
import {TalkTitle} from "./TalkTitle";
import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";

export const DevfestNantesPhraseTotem = ({
                                             title,
                                             time,
                                             location,
                                             image
                                         }: DefaultProps) => {


    return (
        <DevfestNantesCustomContent>
            <Sequence name="Speakers" from={30}>
                <TalkTitle
                    title={title}
                    style={{
                        top: image ? "30%" : "50%",
                        fontSize: "55px"
                    }}
                    isTotemDisplayMode={true}
                />
                {image && <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                ><Img
                    src={staticFile(image)}
                    width={"300px"}
                    height="auto"
                    style={{borderRadius: "20px"}}
                /></div>}
            </Sequence>
            <Sequence from={70}>
                <Details time={time} location={location}/>
            </Sequence>
        </DevfestNantesCustomContent>
    );
};
