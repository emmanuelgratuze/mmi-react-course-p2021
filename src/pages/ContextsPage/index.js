import React, { useContext } from 'react'
import Page from '../../components/Page';

import AppContext from '../../App/Context'

const ContextsPage = () => {
  const { setTrackName } = useContext(AppContext)

  const onInputChange = (event) => {
    setTrackName(event.target.value)
  }

  return (
    <Page>
      Contexts page

      <br />
      <br />
      <br />

      <input
        type="text"
        placeholder="Global track name"
        onChange={onInputChange}
      />
      <br />
    </Page>
  )
}

export default ContextsPage;
