import React from 'react';
import "../Assets/Style.css";

function MusicSection({ title, id }) {
  return (
    <div className="row">
      <div className="col-10">
        <div id={id}>
          <h2 className="mainPage">{title}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicSection;

