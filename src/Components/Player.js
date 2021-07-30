import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';


const Player = ({currentSong, songPlay, setSongPlay}) => {

  const audioRef = useRef(null);

  const playBtnHandler = ()=>{
    if(songPlay){
      audioRef.current.pause();
      setSongPlay(!songPlay)
    }
    else{
      audioRef.current.play();
      setSongPlay(!songPlay)
    }
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
