
import React, { useState, useEffect } from "react";

export default function RedTriangleQuestion({ image, hasRedTriangle, onAnswer }) {
  const [showImage, setShowImage] = useState(false);

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
  }, [showImage, hasRedTriangle]);

  return (
    <div style={{ textAlign: "center"}}>
      {!showImage && (
        <div className="question-container">
          <h1 className="question-text">Is there a red triangle?</h1>
          <p className="instruction-text">Press Y = Yes, N = No</p>
        </div>
      )}

      {showImage && (
        <div className="image-containerbox">
          <img className="image" src={image} alt="trial" width="300" />
        </div>
      )}
    </div>
  );
}
