import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';


const Player = ({currentSong}) => {

  const audioRef = useRef(null);

  const playBtnHandler = ()=>{
    console.log(audioRef.current)
  }
  return (
    <div className="player-container">
      <div className="time-controll">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-controll">

        <FontAwesomeIcon className="angle-left" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playBtnHandler} className="play" icon={faPlay} />
        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />

      </div>
      
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player
