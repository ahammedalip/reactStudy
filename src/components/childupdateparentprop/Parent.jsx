import React from 'react'
import { useState } from 'react'
import Child from './Child'

export default function ParentToChildPropUpdate() {
    const [count, setCount] = useState(0)

    const updateCounter = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div style={{ background: 'red' }}>
            <h4>this is for studying parent to child prop passing and updating from child</h4>
            <h3>this is parent</h3>
            <h1>{count}</h1>
            <Child counterUpdate={updateCounter} />
        </div>
    )
}
