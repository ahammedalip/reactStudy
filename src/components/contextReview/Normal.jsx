import React from 'react'
import NormalChild from './NormalChild'

export default function NormalParent() {
  return (
    <div>
        <h2>the text from the context is {}</h2>

        <NormalChild></NormalChild>
    </div>
  )
}
