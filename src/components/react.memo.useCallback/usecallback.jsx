import React, { useCallback, useState } from 'react'
import ChildComponent from './child'

export default function CallbackParent() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const increment = useCallback(() => {
    console.log('this is inside the callback function')
    setCount(prev => prev + 1)
  }, [count])

  const textSet = useCallback((data) => {
    console.log('this is in text')

    setText(data)
  },[text])

  return (
    <div style={{ background: 'yellow' }}>

      <h3>hello this is from parent component in usecallback</h3>
      <h1>count is {count} </h1>
      <h2>text is {text}</h2>
      <ChildComponent onIncrement={increment}  showText = {textSet}/>

    </div>
  )
}
