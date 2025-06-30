import React, { useState, useEffect } from "react";

export default function RedTriangleQuestion({ onAnswer }) {
  const [showImage, setShowImage] = useState(false);

  const image = "ac4_0.png"; // Image must be inside "public" folder
  const hasRedTriangle = false;

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (!showImage) return;
      if (e.key.toLowerCase() === "y") onAnswer(true, hasRedTriangle);
      if (e.key.toLowerCase() === "n") onAnswer(false, hasRedTriangle);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showImage]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {!showImage && (
        <div className="question-container">
          <h1 className="question-text">Is there a red triangle?</h1>
          <p className="instruction-text">Press Y = Yes, N = No</p>
        </div>
      )}

      {showImage && (
        <>
          <img src={image} alt="test" width="300" />
          <p>Press Y or N</p>
        </>
      )}
    </div>
  );
}
