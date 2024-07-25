import { createContext, useState } from "react";



export const ContextCreator = createContext()

export const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    return (
        <ContextCreator.Provider value={{ count, increment, decrement }}>
            {children}
        </ContextCreator.Provider>
    )
}