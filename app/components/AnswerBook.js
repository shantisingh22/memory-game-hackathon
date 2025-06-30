import React from "react";

function AnswerBook({ userAnswer, correctAnswer, onNext }) {
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3 style={{ color: isCorrect ? "black" : "black" }}>
      {isCorrect ? ("Great, you got it ✅ right") : ( <>❌ Incorrect <br />The Red triangle was there, so the correct answer is: Y</>
)}
      </h3>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default AnswerBook;
