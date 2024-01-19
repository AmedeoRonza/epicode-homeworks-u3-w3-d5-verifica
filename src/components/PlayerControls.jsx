import React from 'react';
import "../Assets/Style.css";

function PlayerControls() {
  return (
    <div className="col-6 col-md-4 playerControls">
      <div className="d-flex">
        <a href="#">
          <img className="playerControlsImg" src="assets/playerbuttons/shuffle.png" alt="shuffle" />
        </a>
        {/* ... Altri controlli */}
      </div>
      <div className="progress mt-3">
        <div role="progressbar"></div>
      </div>
    </div>
  );
}

export default PlayerControls;

