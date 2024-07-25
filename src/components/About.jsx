import React, { useEffect, useState } from 'react'

export default function About() {
  const [state, setState] = useState(0)

  // useEffect(() => {
  //   console.log('this is mounting', state)
  //   return ()=>{
  //     console.log('unmounting', state)
  //   }
  // }, [state])


  const handleIncrement = () => {
    setState(prev => prev + 1)
    // console.log('state is', state)
  }
  return (
    <>
      <div>this is about</div>
      <h1>{state}</h1>
      <button onClick={handleIncrement}>+</button>
      <h1> </h1>
    </>
  )
}
