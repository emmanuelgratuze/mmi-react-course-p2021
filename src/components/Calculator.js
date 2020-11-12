import React, { useEffect, useState } from 'react'

// List
// const liste = [1, 2, 3, 'coucou']

const Calculator = () => {
  const [number1, setNumber] = useState(0)
  const [number2, setNumber2] = useState(0)

  // comportement à l'entrée et sortie du DOM
  useEffect(() => {
    console.log('Calculatrice dans le DOM !')

    return () => {
      console.log('Calculatrice n\'est plus dans le DOM !')
    }
  }, [])

  useEffect(() => {
    document.title = `calculator with ${number1}`
  }, [number1])

  const incrementNumber1 = () => {
    setNumber(number1 + 1)
  }
  const incrementNumber2 = () => {
    setNumber2(number2 + 1)
  }

  // const [articles, setArticles] = useState({});
  // const category = 1
  // useEffect(() => {
  //   const articles = fetch(category)
  //   setArticles(articles)
  // }, [category])

  return (
    <div>
      Calculator !

      <br /><br />
      <button onClick={incrementNumber1}>
        Increment number 1 and change title
      </button>
      <br />
      <button onClick={incrementNumber2}>
        Increment number 2
      </button>

      <br />
      <br />
      Number 1 : {number1}
      <br />
      <br />
      Number 2 : {number2}
    </div>
  )
}

export default Calculator
