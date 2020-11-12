import React, { useState } from 'react'
import ContextsPage from '../pages/ContextsPage'

import AppContext from './Context'

const App = () => {
  const [trackName, setTrackName] = useState();

  const contextValue = {
    appVersion: '1.0',
    trackName: trackName,
    setTrackName: setTrackName,
  }
  
  return (
    <AppContext.Provider value={contextValue}>
      <ContextsPage />
    </AppContext.Provider>
  )
}

export default App

