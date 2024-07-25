import React from 'react'

export default function Child({ counterUpdate }) {
    const update = () => {
        counterUpdate()
    }
    return (

        <div>
            <button onClick={update}>+</button>
        </div>
    )
}
