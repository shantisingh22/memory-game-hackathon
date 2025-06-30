import React from 'react';
function FullScreenButton({ onClick }) {
  const handleFullScreen = () => {
    document.documentElement.requestFullscreen()
      .then(() => {
        onClick();
      })
      .catch((error) => {
        console.log("Fullscreen error:", error);
      });
  };

  return (
    <div className="fullscreen-container">
      <button onClick={handleFullScreen} className="fullscreen-button">
        Go Fullscreen
      </button>
    </div>
  );
}
export default FullScreenButton;