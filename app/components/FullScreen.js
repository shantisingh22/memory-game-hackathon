"use client";
import React from "react";

export default function FullScreenButton({ onClick }) {
  const handleFullScreen = () => {
    // Yeh pura page fullscreen karega
    document.documentElement.requestFullscreen()
      .then(() => {
        // Fullscreen ke baad next step chalu karo
        onClick();
      })
      .catch((error) => {
        // Agar permission error aaye to console me dikhao
        console.log("Fullscreen error:", error);
      });
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gray"
    }}>
      <button
        onClick={handleFullScreen}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Go Fullscreen
      </button>
    </div>
  );
}
