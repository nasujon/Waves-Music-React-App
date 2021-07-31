import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({songs, setCurrentSong, id}) => {
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
             />
          ))
        }
        
        
      </div>
    </div>
  )
}

export default Library;