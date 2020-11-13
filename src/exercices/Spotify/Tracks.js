import React, { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../../components/SpotifyProvider';


/* 
{
  key: 'value',
}

const liste = [
  'value1',
  'value2'
]
liste[0] // => 'value1'
liste[&] // => 'value 2'
*/


const Tracks = () => {
  const { spotifyApi, deviceId } = useContext(SpotifyContext)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const loadTracks = async () => {
      const results = await spotifyApi.searchTracks('vulfpeck', { limit: 5 })
      setTracks(results.tracks.items)
    }
    loadTracks();
  }, [spotifyApi])

  const playSound = (uri) => {
    const data = {
      "device_id": deviceId,
      "uris": [ uri ]
    }

    spotifyApi.play(data)
      .then(function() {
        console.log('play')
      })
  }

  return (
    <div>
      Tracks
      <ul>
        {tracks.map((track) => {
          return (
            <li key={track.id}>
              <h3>{track.name}</h3>
              <h4>{track.album.name}</h4>
              <img
                src={track.album.images[1].url}
                alt={`Cover of ${track.album.name}`}
              />
              <br/>
              <button onClick={() => { playSound(track.uri) }}>
                Play
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tracks
