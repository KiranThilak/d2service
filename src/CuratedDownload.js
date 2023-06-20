import React from "react";

const CuratedDownload = () => {
  return (
    <div
      style={{
        backgroundColor: "#0767b6",
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "0",
          borderBottom: "20vh solid transparent",
          borderRight: "20vw solid #69C5FF",
          transform: "skewX(-0deg)",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      ></div>
      <div
        style={{
          width: "0",
          height: "0",
          borderTop: "30vh solid transparent",
          borderRight: "35vw solid #0767b6",
          transform: "skewX(0deg)",
          position: "absolute",
          bottom: "0",
          right: "0",
        }}
      ></div>
      <div
        style={{
          width: "80vh",
          height: "50vh",
          backgroundColor: "#69C5FF",
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "100vh",
          transform: "skewX(-70deg)",
          transformOrigin: "bottom right",
        }}
      ></div>
    </div>
  );
};

export default CuratedDownload;
