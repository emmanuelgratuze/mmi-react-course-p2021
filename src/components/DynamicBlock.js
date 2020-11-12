import React, { useState } from 'react';


const DynamicBlock = (props) => {
  const { children } = props
  const [blockIsVisible, setBlockIsVisible] = useState(true);

  const toggleBlock = () => {
    setBlockIsVisible(!blockIsVisible)
    // if (blockIsVisible === true) {
    //   setBlockIsVisible(false)
    // }
    // else if (blockIsVisible === false) {
    //   setBlockIsVisible(true)
    // }
  }

  return (
    <div>
      <button onClick={toggleBlock}>
        Toggle block
      </button>
      
      {blockIsVisible && (
        <div style={{ border: '1px solid gray', 'padding': '10px' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default DynamicBlock