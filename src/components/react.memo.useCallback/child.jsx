import React, { memo, useState } from 'react'

const  ChildComponent = memo(({ onIncrement, showText })=>{
    const [temp,setTemp] = useState('')
    return (
        <div>

            <h1>this is child component</h1>
            <button onClick={onIncrement}>increment from child</button>
            <input type="text" onChange={(e)=>setTemp(e.target.value)} value={temp}/>
            <button onClick={()=>showText(temp)}>add</button>
        </div>
    )
})

export default ChildComponent

