import React, { createContext } from 'react'

export const textContextCreator = createContext()

export const textContextProv = ({ children }) => {

  const [text, setText] = useState('')


  return (

    <textContextCreator.Provider value={{ text, setText }}>
      {children}
    </textContextCreator.Provider>
  )
}
