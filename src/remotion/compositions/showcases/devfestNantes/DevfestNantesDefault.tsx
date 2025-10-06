import {Img, staticFile} from "remotion";

import {DevfestNantesCustomContent} from "./DevfestNantesCustomContent.tsx";

export const DevfestNantesDefault = () => {
  return (
    <DevfestNantesCustomContent>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Img
          src={staticFile(
            "/images/showcases/devfestNantes/logo-devfest-2025.png"
          )}
          width={"600px"}
          height="auto"
        />
      </div>
    </DevfestNantesCustomContent>
  );
};
