import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReduxChild from './ReduxChild'

export default function ReduxCounter() {
  const showText = useSelector((state) => state.text.value)


  return (
    <div style={{background: 'grey'}}>

      <h3>text showed is <span style={{background: 'red'}}>{showText}</span></h3>
      <ReduxChild />
    </div>
  )
}
