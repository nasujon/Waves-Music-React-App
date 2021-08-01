import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faAngleRight, 
  faAngleLeft,
  faPause
} from '@fortawesome/free-solid-svg-icons';


const Player = ({currentSong, songPlay, setSongPlay, audioRef, setSongInfo, songInfo}) => {



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

  const getTime = (time)=>{
    return(
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }
  




  const sliderHandler = (e)=>{
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }
  
  
  return (
    <div className="player-container">
      <div className="time-controll">
        <p>{getTime(songInfo.runningTime)}</p>

        <input 
          onChange={sliderHandler} 
          min={0} value={songInfo.runningTime} 
          max={songInfo.totalTime || 0} 
          type="range" 
        />

        <p>{getTime(songInfo.totalTime)}</p>

      </div>

      <div className="play-controll">

        <FontAwesomeIcon 
          className="angle-left" 
          icon={faAngleLeft} 
        />
        <FontAwesomeIcon 
          onClick={playBtnHandler} 
          className="play" 
          icon={songPlay ? faPause : faPlay} 
        />

        <FontAwesomeIcon 
          className="angle-right" 
          icon={faAngleRight}
         />

      </div>
      
      
    </div>
  )
}

export default Player
