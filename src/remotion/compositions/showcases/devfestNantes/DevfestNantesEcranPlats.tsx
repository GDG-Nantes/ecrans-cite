import { loadFont } from "@remotion/google-fonts/CrimsonText";
import { AbsoluteFill, Img, staticFile } from "remotion";

const { fontFamily } = loadFont();

export const DevfestNantesEcranPlat = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#e4595c",
        overflow: "hidden",
        fontFamily,
        textTransform: "uppercase",
        boxShadow:
          "inset 0 0px 200px rgba(0, 0, 0, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
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
            "/images/showcases/devfestNantes/logo-devfest-2024.svg"
          )}
          height={"500px"}
          width="auto"
        />
      </div>
    </AbsoluteFill>
  );
};
