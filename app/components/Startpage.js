import React from 'react';
const Startpage = ({ onDone }) => {
  return (
    <>
    <div className="startpage-header">👋 Welcome to page</div>
      <div className="startpage-container1">
        <div className="before-start-container">
          <h2>Before starting:</h2>

          <div>
            <div className='list-item'>
              1) set your browsing window to Full Screen (you can do this by pressing F11 on Windows and Linux or the key combination CTRL+CMD+f <br></br>on a Mac; if that does not work, in Chrome you can go to the View menu and click Enter Full Screen)

            </div>
            <div className='list-item1'>
              2) minimize possible distractions (TV, phone, etc.) that may affect your performance during the test
            </div>
            <div className='list-item2'>
              3) Position yourself at arm's length from the monitor and try to maintain this distance during the experiment.
            </div>
          </div>

          <div className= 'list-item2'>When these are done, click DONE.</div>

          <button onClick={onDone} className="done-button"><strong>DONE</strong></button>
        </div>
      </div>
      </>

  );
};

export default Startpage;