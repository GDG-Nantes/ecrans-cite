import {Img, Sequence, staticFile} from "remotion";
import {DefaultProps} from "../../../types/defaultProps.types";
import {Details} from "./Details";
import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";
import {TalkTitle} from "./TalkTitle.tsx";

export const DevfestNantesPhrase = ({
                                        title,
                                        location,
                                        time,
                                        image
                                    }: DefaultProps) => {
    return (
        <DevfestNantesCustomContent>
            <Sequence name="Speakers" from={30}>
                <TalkTitle
                    title={title}
                    style={{
                        top: image ? "150px" : "300px",
                        fontSize: "55px"
                    }}
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
                    width={"200px"}
                    height="auto"
                    style={{borderRadius: "20px"}}
                /></div>}
            </Sequence>
            <Sequence from={70}>
                <Details time={time} location={location} isTotemDisplayMode={false}/>
            </Sequence>
        </DevfestNantesCustomContent>
    );
};
