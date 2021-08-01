//import react
import React, {useRef, useState} from 'react';
//addng components
import Song from './Components/Song';
import Player from './Components/Player';
import Library from './Components/Library'
import Nav from './Components/Nav'
//adding data
import data from './util';
//adding styles
import './Styles/master.scss';

function App() {

  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [songPlay, setSongPlay] = useState(false);
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

  return(

    <div className="app">
      <Nav />
      <Song 
        currentSong={currentSong} 
      />

      <Player 
        audioRef={audioRef}
        songPlay={songPlay} 
        setSongPlay={setSongPlay} 
        currentSong={currentSong} 
        songInfo={songInfo}
        setSongInfo={setSongInfo}

      />

      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songPlay={songPlay}
        setSongs={setSongs}
      />

      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
      />

      
    </div>
  )
}

export default App;