import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function useSum(a, b) {

    let [sum, setSum] = useState(a + b)

    useEffect(() => {
        setSum (a + b)
    }, [a, b])

    return sum
}





export default function Samplecustom() {

    const [a, setA] = useState(5)
    const [b, setB] = useState(10)

    const total = useSum(a,b)
    return (
        <div>
            <h2>{total}</h2>
            <input type="text" onChange={(e)=>setA(e.target.value)}/>
            <input type="text" onChange={(e)=>setB(e.target.value)}/>

            <button onClick={total}>add</button>
        </div>
    )
}
