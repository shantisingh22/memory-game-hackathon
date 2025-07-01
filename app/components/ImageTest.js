"use client";
import React, { useState, useEffect } from "react";
import AnswerBook from "./AnswerBook";
import EndOfPractice from "./EndOfPractice";

const images = [
  { name: "assets/ac4_1.png", hasRed: true },
  { name: "assets/ac4_2.png", hasRed: false },
  { name: "assets/ac4_3.png", hasRed: true },
  { name: "assets/ac4_4.png", hasRed: false },
  { name: "assets/ac4_5.png", hasRed: true },

  { name: "assets/ac8_1.png", hasRed: true },
  { name: "assets/ac8_2.png", hasRed: false },
  { name: "assets/ac8_3.png", hasRed: true },
  { name: "assets/ac8_4.png", hasRed: false },
  { name: "assets/ac8_5.png", hasRed: true },

  { name: "assets/ac16_1.png", hasRed: true },
  { name: "assets/ac16_2.png", hasRed: false },
  { name: "assets/ac16_3.png", hasRed: true },
  { name: "assets/ac16_4.png", hasRed: false },
  { name: "assets/ac16_5.png", hasRed: true },

  { name: "assets/ac32_1.png", hasRed: true },
  { name: "assets/ac32_2.png", hasRed: false },
  { name: "assets/ac32_3.png", hasRed: true },
  { name: "assets/ac32_4.png", hasRed: false },
  { name: "assets/ac32_5.png", hasRed: true },

  { name: "assets/af4_1.png", hasRed: true },
  { name: "assets/af4_2.png", hasRed: false },
  { name: "assets/af4_3.png", hasRed: true },
  { name: "assets/af4_4.png", hasRed: false },
  { name: "assets/af4_5.png", hasRed: true },

  { name: "assets/af8_1.png", hasRed: true },
  { name: "assets/af8_2.png", hasRed: false },
  { name: "assets/af8_3.png", hasRed: true },
  { name: "assets/af8_4.png", hasRed: false },
  { name: "assets/af8_5.png", hasRed: true },

  { name: "assets/af16_1.png", hasRed: true },
  { name: "assets/af16_2.png", hasRed: false },
  { name: "assets/af16_3.png", hasRed: true },
  { name: "assets/af16_4.png", hasRed: false },
  { name: "assets/af16_5.png", hasRed: true },

  { name: "assets/af32_1.png", hasRed: true },
  { name: "assets/af32_2.png", hasRed: false },
  { name: "assets/af32_3.png", hasRed: true },
  { name: "assets/af32_4.png", hasRed: false },
  { name: "assets/af32_5.png", hasRed: true },

  { name: "assets/pc4_1.png", hasRed: true },
  { name: "assets/pc4_2.png", hasRed: false },
  { name: "assets/pc4_3.png", hasRed: true },
  { name: "assets/pc4_4.png", hasRed: false },
  { name: "assets/pc4_5.png", hasRed: true },

  { name: "assets/pc8_1.png", hasRed: true },
  { name: "assets/pc8_2.png", hasRed: false },
  { name: "assets/pc8_3.png", hasRed: true },
  { name: "assets/pc8_4.png", hasRed: false },
  { name: "assets/pc8_5.png", hasRed: true },

  { name: "assets/pc16_1.png", hasRed: true },
  { name: "assets/pc16_2.png", hasRed: false },
  { name: "assets/pc16_3.png", hasRed: true },
  { name: "assets/pc16_4.png", hasRed: false },
  { name: "assets/pc16_5.png", hasRed: true },

  { name: "assets/pc32_1.png", hasRed: true },
  { name: "assets/pc32_2.png", hasRed: false },
  { name: "assets/pc32_3.png", hasRed: true },
  { name: "assets/pc32_4.png", hasRed: false },
  { name: "assets/pc32_5.png", hasRed: true },

  { name: "assets/pf4_1.png", hasRed: true },
  { name: "assets/pf4_2.png", hasRed: false },
  { name: "assets/pf4_3.png", hasRed: true },
  { name: "assets/pf4_4.png", hasRed: false },
  { name: "assets/pf4_5.png", hasRed: true },

  { name: "assets/pf8_1.png", hasRed: true },
  { name: "assets/pf8_2.png", hasRed: false },
  { name: "assets/pf8_3.png", hasRed: true },
  { name: "assets/pf8_4.png", hasRed: false },
  { name: "assets/pf8_5.png", hasRed: true },

  { name: "assets/pf16_1.png", hasRed: true },
  { name: "assets/pf16_2.png", hasRed: false },
  { name: "assets/pf16_3.png", hasRed: true },
  { name: "assets/pf16_4.png", hasRed: false },
  { name: "assets/pf16_5.png", hasRed: true },

  { name: "assets/pf32_1.png", hasRed: true },
  { name: "assets/pf32_2.png", hasRed: false },
  { name: "assets/pf32_3.png", hasRed: true },
  { name: "assets/pf32_4.png", hasRed: false },
  { name: "assets/pf32_5.png", hasRed: true },
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
