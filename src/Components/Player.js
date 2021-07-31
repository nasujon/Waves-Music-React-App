import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faAngleRight, 
  faAngleLeft,
  faPause
} from '@fortawesome/free-solid-svg-icons';


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

  const getTime = (time)=>{
    return(
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }
  

  //state
  const [songInfo, setSongInfo] = useState({
    runningTime: 0,
    totalTime: 0
  })

  const timeUpdateHandler = (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, runningTime:currentTime, totalTime: duration })
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
          max={songInfo.totalTime} 
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
      
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
      />
    </div>
  )
}

export default Player
