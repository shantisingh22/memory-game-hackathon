// import "./visualSearch.css";

function VisualSearch({ onStart }) {
  return (
    <div className="container">
      <div className="content">
        <h2>Visual Search</h2>
        <p>
          Your task is to decide if there is a <span className="highlight">red triangle</span> amongst the other shapes.
        </p>
        <p>If yes, press Y.</p>
        <p>If no, press N.</p>
        <p>We'll start with some practice.</p>

        <button className="start-button" onClick={onStart}>
          START PRACTICE
        </button>
      </div>
    </div>
  );
}
export default VisualSearch;
