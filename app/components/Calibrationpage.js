import React, { useEffect } from 'react';

const CalibrationPage = ({ onOk, lineWidth, setLineWidth }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setLineWidth(prev => prev + 5);
      } else if (e.key === 'ArrowLeft') {
        setLineWidth(prev => Math.max(20, prev - 5));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setLineWidth]);

  return (
    <>
      <div className='calibration'>📏 Calibration</div>
      <div className='startpage-con'>
        <div className="calibration-container">
          <p>
            To ensure that stimuli and other visual elements in the study are presented at their intended size, it's crucial
            that you perform the following step. This is a standard screen calibration procedure, that does not involve any
            data collection from your card or other items. Please find an object that matches the size of a typical credit
            card, which could be anything from an actual debit or credit card to a driver's license or an ID card. The key is
            that the object's dimensions are <strong>identical</strong> to those of a standard credit card.
          </p>
          <p>
            Place the longer side of your card-sized object against the screen, aligning it with the orange line displayed.
            Next, use the left and right arrow keys on your keyboard to adjust the length of this orange line until it
            precisely matches the length of your card-sized item. When done, click the OK button.
          </p>

          <div
            className="orange-line"
            style={{ width: `${lineWidth}px` }}
          ></div>

          <button onClick={onOk} className="ok-button">OK</button>
        </div>
      </div>
    </>
  );
};

export default CalibrationPage;
