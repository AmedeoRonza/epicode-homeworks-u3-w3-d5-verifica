import React from 'react';
import "../Assets/Style.css";

function AlbumCard({ songInfo }) {
  return (
    <div className="col text-center album-card" id={songInfo.id}>
      <img
        className="img-fluid"
        src={songInfo.album.cover_medium}
        alt="track"
      />
      <p className="album-info">
        Track: "{songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...`}"<br />
        Artist: {songInfo.artist.name}
      </p>
    </div>
  );
}

export default AlbumCard;

