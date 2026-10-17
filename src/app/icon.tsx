import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#70e0a8",
        borderRadius: 9,
        color: "#082016",
        display: "flex",
        fontFamily: "sans-serif",
        fontSize: 17,
        fontWeight: 800,
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      FJ
    </div>,
    size,
  );
}
