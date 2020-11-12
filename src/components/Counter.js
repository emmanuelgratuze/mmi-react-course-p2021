import React, { useState } from 'react'


// const fonction = (param1, param2, param3) => {
//   console.log(param1, param2, param3)
// }
// fonction('bonjour', 'hello', 'hola');
// fonction('rebonjour', 'rehello');
// fonction();
// const string = 'coucou'
// const number = 1
// const boolean = true

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      Counter !

      <br />
      <br />
      Valeur de mon compteur: {count}

      <br />
      <br />
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default Counter;
