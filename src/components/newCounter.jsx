import React from 'react'
import { useReducer } from 'react'
import count from './UseReducer'

function reducers(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
  }
}

export default function newCounter() {

  const [state, dispatch] = useReducer(reducers, { count: 0 })
  return (
    <div>

      <h1>counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </div>

  )
}

