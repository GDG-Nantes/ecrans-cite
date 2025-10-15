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
            "/images/showcases/devfestNantes/logo-devfest-2025.svg"
          )}
          width={"600px"}
          height="auto"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.5))'
          }}
        />
      </div>
    </DevfestNantesCustomContentTotem>
  );
};
