"use client";
import React, { useState, useEffect } from "react";

const images = [
  { name: "assets/ac4_1.png", hasRed: 0 },
  { name: "assets/ac4_3.png", hasRed: 0 },
  { name: "assets/ac4_4.png", hasRed: 0 },
  { name: "assets/ac8_2.png", hasRed: 0 },
  { name: "assets/ac4_5.png", hasRed: 0},
  { name: "assets/ac4_2.png", hasRed: 0 },

  { name: "assets/ac8_1.png", hasRed: 0 },
  { name: "assets/ac8_3.png", hasRed: 0 },
  { name: "assets/ac8_4.png", hasRed: 0 },
  { name: "assets/ac16_4.png", hasRed: 0 },
  { name: "assets/ac8_5.png", hasRed: 0},

  { name: "assets/ac16_1.png", hasRed: 0 },
  { name: "assets/ac16_2.png", hasRed: 0 },
  { name: "assets/ac16_5.png", hasRed: 0 },
  { name: "assets/ac32_4.png", hasRed: 0 },


  { name: "assets/ac32_1.png", hasRed: 0 },
  { name: "assets/ac32_2.png", hasRed: 0 },
  { name: "assets/ac16_3.png", hasRed: 0 },
  { name: "assets/ac32_3.png", hasRed: 0 },
  { name: "assets/ac32_5.png", hasRed: 0 },

  { name: "assets/af4_1.png", hasRed: 0 },
  { name: "assets/af4_2.png", hasRed: 0 },
  { name: "assets/af4_3.png", hasRed:  0},
  { name: "assets/af4_4.png", hasRed: 0 },
  { name: "assets/af4_5.png", hasRed: 0 },

  { name: "assets/af8_1.png", hasRed: 0 },
  { name: "assets/af8_2.png", hasRed: 0 },
  { name: "assets/af8_3.png", hasRed: 0},
  { name: "assets/af8_4.png", hasRed: 0},
  { name: "assets/af8_5.png", hasRed: 0},

  { name: "assets/af16_1.png", hasRed: 0},
  { name: "assets/af16_2.png", hasRed: 0},
  { name: "assets/af16_3.png", hasRed: 0},
  { name: "assets/af16_4.png", hasRed: 0},
  { name: "assets/af16_5.png", hasRed: 0},

  { name: "assets/af32_1.png", hasRed: 0},
  { name: "assets/af32_2.png", hasRed: 0},
  { name: "assets/af32_3.png", hasRed: 0},
  { name: "assets/af32_4.png", hasRed: 0},
  { name: "assets/af32_5.png", hasRed: 0},

  { name: "assets/pc4_1.png", hasRed: 1 },
  { name: "assets/pc4_2.png", hasRed: 1 },
  { name: "assets/pc4_3.png", hasRed: 1 },
  { name: "assets/pc4_4.png", hasRed: 1 },
  { name: "assets/pc4_5.png", hasRed: 1 },

  { name: "assets/pc8_1.png", hasRed: 1 },
  { name: "assets/pc8_2.png", hasRed: 1 },
  { name: "assets/pc8_3.png", hasRed: 1 },
  { name: "assets/pc8_4.png", hasRed: 1 },
  { name: "assets/pc8_5.png", hasRed: 1 },

  { name: "assets/pc16_1.png", hasRed: 1 },
  { name: "assets/pc16_2.png", hasRed: 1 },
  { name: "assets/pc16_3.png", hasRed: 1 },
  { name: "assets/pc16_4.png", hasRed: 1 },
  { name: "assets/pc16_5.png", hasRed: 1 },

  { name: "assets/pc32_1.png", hasRed: 1 },
  { name: "assets/pc32_2.png", hasRed: 1 },
  { name: "assets/pc32_3.png", hasRed: 1 },
  { name: "assets/pc32_4.png", hasRed: 1 },
  { name: "assets/pc32_5.png", hasRed: 1 },

  { name: "assets/pf4_1.png", hasRed: 1 },
  { name: "assets/pf4_2.png", hasRed: 1 },
  { name: "assets/pf4_3.png", hasRed: 1 },
  { name: "assets/pf4_4.png", hasRed: 1 },
  { name: "assets/pf4_5.png", hasRed: 1 },

  { name: "assets/pf8_1.png", hasRed: 1 },
  { name: "assets/pf8_2.png", hasRed: 1 },
  { name: "assets/pf8_3.png", hasRed: 1 },
  { name: "assets/pf8_4.png", hasRed: 1 },
  { name: "assets/pf8_5.png", hasRed: 1 },

  { name: "assets/pf16_1.png", hasRed: 1 },
  { name: "assets/pf16_2.png", hasRed: 1 },
  { name: "assets/pf16_3.png", hasRed: 1 },
  { name: "assets/pf16_4.png", hasRed: 1 },
  { name: "assets/pf16_5.png", hasRed: 1 },

  { name: "assets/pf32_1.png", hasRed: 1 },
  { name: "assets/pf32_2.png", hasRed: 1 },
  { name: "assets/pf32_3.png", hasRed: 1 },
  { name: "assets/pf32_4.png", hasRed: 1 },
  { name: "assets/pf32_5.png", hasRed: 1 },
];


function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ImageTest({ onComplete }) {
  const [shuffledImages] = useState(shuffleArray(images));
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [disableInput, setDisableInput] = useState(false);

  const current = shuffledImages[index];
  const correctAnswer = current.hasRed ? "Yes" : "No";

  useEffect(() => {
    function handleKey(e) {
      if (disableInput) return;
      if (e.key === "y" || e.key === "Y") handleAnswer("Yes");
      else if (e.key === "n" || e.key === "N") handleAnswer("No");
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [disableInput, current]);

  function handleAnswer(answer) {
    setUserAnswer(answer);
    setDisableInput(true);

    const isCorrect = answer === correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (index + 1 < shuffledImages.length) {
        setIndex(index + 1);
        setUserAnswer("");
        setDisableInput(false);
      } else {
        if (onComplete) onComplete();
      }
    }, 1000); // 1 second delay before next image
  }

  if (index >= shuffledImages.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>🎉 Test Complete</h2>
        <p>✅ Your Score: {score} / {shuffledImages.length}</p>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  return (
    <div className="image-containerbox">
      <h1 className="question-text1">Is there a red triangle?</h1>
      <div className="image-containerbox22">Press Y = Yes, N = No</div>
      <img
        src={`/${current.name}`}
        alt="test"
        style={{ maxWidth: "950px", height: "auto" }}
      />
    </div>
  );
}

export default ImageTest;
