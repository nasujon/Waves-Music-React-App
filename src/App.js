import React, {useState} from 'react';
//addng components
import Song from './Components/Song';
import Player from './Components/Player';
//adding data
import data from './util';
//adding styles
import './Styles/master.scss';

function App() {
  
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [songPlay, setSongPlay] = useState(false);

  return(

    <div className="app">
      
      <Song currentSong={currentSong} />
      <Player songPlay={songPlay} setSongPlay={setSongPlay} currentSong={currentSong} />

    </div>
  )
}

export default App;