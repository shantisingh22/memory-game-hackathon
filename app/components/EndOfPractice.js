import React from "react";
function EndOfPractice({ onStart }) {
  return (
    <div className="end-container">
      <div className="text-box">
        <h2 className="end-title">End of practice</h2>
        <p className="end-text">Good!</p>
        <p className="end-text">Now let's do the actual test.</p>
        <p className="end-text">Sometimes there will be more shapes, sometimes less.</p>
        <p className="end-text">In all cases, your task is to find the red triangle.</p>
        <p className="end-text">Please prioritize accuracy over speed.</p>
        <button className="start-buttonbox" onClick={onStart}>START TEST</button>
      </div>
    </div>
  );
}

export default EndOfPractice;
