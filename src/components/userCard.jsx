import React, { useState } from 'react'

export default function UserCard({value, onChangeValue}) {

  const [newValue, setNewValue] = useState(value)
  const handleChange = (e) => {
    setNewValue(e.target.value)
  }

  const handleClick = () => {
    console.log(newValue)
    if (newValue !== null) {
      onChangeValue(newValue);
    }
  };
  return (
    <div>
      <h2>Child Component</h2>
      <input type="number" onChange={handleChange} />
      {/* <p>Value: {value} </p> */}
      <button onClick={handleClick}>Change Value</button>
    </div>
  )
}


