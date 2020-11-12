import React from 'react'
import Player from '../Player';

import './styles.css'

const Page = (props) => {
  const { children } = props;

  return (
    <div className="layout">      
      <Player />
      {children}
    </div>
  )
}

export default Page
