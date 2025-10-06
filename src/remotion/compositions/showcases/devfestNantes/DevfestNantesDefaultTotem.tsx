import {Img, staticFile} from "remotion";
import {DevfestNantesCustomContentTotem} from "./DevfestNantesCustomContentTotem.tsx";

export const DevfestNantesDefaultTotem = () => {
  return (
    <DevfestNantesCustomContentTotem>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "75%",
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
    </DevfestNantesCustomContentTotem>
  );
};
