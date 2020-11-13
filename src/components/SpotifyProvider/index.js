import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useDevice from './useDevice'
import useLoadSdk from './useLoadSdk'
import useToken from './useToken'
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const SpotifyProvider = ({ clientId, redirectUri, children }) => {
  useLoadSdk()
  const [isReady, setIsReady] = useState(false)
  const token = useToken({ clientId, redirectUri })
  const { deviceId, player } = useDevice({ token })
  const contextValue = useMemo(() => ({
    deviceId,
    token,
    player,
    spotifyApi,
    isReady
  }), [token, deviceId, player])

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token)
      setIsReady(true)
    }
  }, [token])

  return (
    <Context.Provider value={contextValue}>
      {(isReady && deviceId) && children}
    </Context.Provider>
  )
}

SpotifyProvider.propTypes = {
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired
}

export const SpotifyContext = Context

export default SpotifyProvider
