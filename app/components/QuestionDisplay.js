
function QuestionDisplay({ question = "Is there a red triangle?" }) {
  return (
    <div className="question-container">
      <h1 className="question-text">{question}</h1>
      <div className="instruction-text">Y = Yes, N = No</div>
      <div className="timer-bar">
        <div className="timer-fill"></div>
      </div>
    </div>
  );
}

export default QuestionDisplay;


