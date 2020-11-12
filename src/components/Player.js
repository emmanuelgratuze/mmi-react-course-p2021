import React, { useContext } from 'react'
import AppContext from '../App/Context';

const Player = () => {
  const { trackName } = useContext(AppContext)

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'grey',
        padding: '10px'
      }}
    >
      Player

      {trackName && (
        <div>
          Current track: {trackName}
        </div>
      )}
    </div>
  )
}

export default Player
