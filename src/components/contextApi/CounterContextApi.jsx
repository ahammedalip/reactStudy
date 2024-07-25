import { useContext } from "react"
import { ContextCreator } from "./CounterContext"

export const ContextCounter = ()=>{
    const {increment, decrement, count} = useContext(ContextCreator)


    return(
        <div style={{background: 'grey'}}>
        <h1>this is context api counter </h1>
        <h2>{count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
    )
}