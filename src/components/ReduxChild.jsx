import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './slice/textSlice'

export default function ReduxChild() {
    const [typedText, setTypedText] = useState('')

    const dispatch = useDispatch()
    const dispFun = (e)=>{
        setTypedText(e.target.value)
        dispatch(add(typedText))
    }

  return (
    <div>
        
        <input type="text" value={typedText} onChange={(e)=>dispFun(e)}/>
        <button onClick={dispFun}>show text</button>
    </div>
  )
}
