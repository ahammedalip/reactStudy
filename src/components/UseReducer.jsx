
import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            if (state.count >0) {
                return { count: state.count - action.payload }
            } else return state

        default:
            throw new Error()
    }
}

export default function count() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h1>count is : {state.count}</h1>

            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>

        </div>
    )
}
