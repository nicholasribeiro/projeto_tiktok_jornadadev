import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooterMusic__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img 
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/tiktok---jornada-2ad6e.appspot.com/o/vinil.png?alt=media&token=754b4d6d-9254-4452-85df-cf8f30c5c578"
      />
    </div>
  );
}

export default VideoFooter;
