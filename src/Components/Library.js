import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({songs, setCurrentSong, audioRef, songPlay}) => {
  return(
    <div className="library">
      <h2>Library</h2>
      <div className="library-list">
        {
          songs.map(song=>(
            <LibrarySong 
              song={song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              key={song.id}
              id={song.id}
              audioRef={audioRef}
              songPlay={songPlay}
             />
          ))
        }
        
        
      </div>
    </div>
  )
}

export default Library;