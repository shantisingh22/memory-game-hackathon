"use client";
import React, { useState, useEffect } from "react";
import AnswerBook from "./AnswerBook";
import EndOfPractice from "./EndOfPractice";

const images = [
  { name: "assets/ac4_1.png", hasRed: true },
  { name: "assets/ac4_2.png", hasRed: false },
  { name: "assets/ac8_1.png", hasRed: true },
  { name: "assets/ac8_2.png", hasRed: false },
  { name: "assets/pf16_1.png", hasRed: true },
  { name: "assets/pf16_2.png", hasRed: false },
  { name: "assets/pf32_1.png", hasRed: true },
  { name: "assets/pf32_2.png", hasRed: false },
];

function ImageTest({ onComplete }) {
  const [index, setIndex] = useState(0);       
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");    

  const current = images[index];

  useEffect(() => {
    function handleKey(e) {
      if (showResult) return; 
      if (e.key === "y" || e.key === "Y") {
        checkAnswer("Yes");
      } else if (e.key === "n" || e.key === "N") {
        checkAnswer("No");
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showResult, current]);

  function checkAnswer(answer) {
    setUserAnswer(answer);
    setShowResult(true);
  }

  function nextImage() {
    if (index + 1 < images.length) {
      setIndex(index + 1);
      setUserAnswer("");
      setShowResult(false);
    } else {
      setIndex(images.length);
      if (onComplete) onComplete();
    }
  }

  if (index >= images.length) {
    return (
      <div>
        <h2>🎉 Test Complete</h2>
        <EndOfPractice onStart={() => window.location.reload()} />
      </div>
    );
  }

  return (
    <div className="image-containerbox">
      {!showResult ? (
        <>
          <p>Press <b>Y</b> for Yes, <b>N</b> for No</p>
          <img
            src={`/${current.name}`}
            alt="test"
            style={{ maxWidth: "400px", height: "auto" }}
          />
        </>
      ) : (
        <AnswerBook
          userAnswer={userAnswer}
          correctAnswer={current.hasRed ? "Yes" : "No"}
          onNext={nextImage}
        />
      )}
    </div>
  );
}

export default ImageTest;
