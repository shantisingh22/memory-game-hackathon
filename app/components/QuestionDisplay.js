
function QuestionDisplay({ question = "Is there a red triangle?" }) {
  return (
    <div className="question-container">
      <h1 className="question-text">{question}</h1>
      <p className="instruction-text">Y = Yes, N = No</p>
      <div className="timer-bar">
        <div className="timer-fill"></div>
      </div>
    </div>
  );
}

export default QuestionDisplay;


