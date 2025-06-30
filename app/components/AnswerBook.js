import React from "react";

function AnswerBook({ userAnswer, correctAnswer, onNext }) {
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="answerbook-container">
      <h3 className="answerbook-message" style={{ color: isCorrect ? "black" : "black" }}>
      {isCorrect ? ("Great, you got it ✅ right") : ( <>❌ Incorrect <br />The Red triangle was there, so the correct answer is: Y</>
)}
      </h3>
      <button onClick={onNext} className="answerbook-button">Next</button>
    </div>
  );
}

export default AnswerBook;
