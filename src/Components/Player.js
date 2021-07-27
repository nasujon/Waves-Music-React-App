import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
const Player = () => {
  return (
    <div className="player-container">
      <div className="time-controll">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-controll">

        <FontAwesomeIcon className="angle-left" icon={faAngleLeft} />
          <FontAwesomeIcon className="play" icon={faPlay} />
        <FontAwesomeIcon className="angle-right" icon={faAngleRight} />

      </div>
    </div>
  )
}

export default Player
