import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [counter, setCounter] = useState (10)

  const handleClick = () => {
    setCounter (counter+1)
  }
  const handleReset = () => {
    setCounter (0)
  }

  
  return (
    <>
      <h1>This is Counter</h1>
      <button type="button" onClick={handleClick} className='button-4' style={{backgroundColor:"gray"}}>Increase</button>
      <button type="button" onClick={handleReset} className='button-4'>Reset</button>
      <p>The value of counter is {counter}</p>
    </>
  )
}
