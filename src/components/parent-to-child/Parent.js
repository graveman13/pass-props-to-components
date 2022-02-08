import { useState } from "react"
import { Child } from "./Child"

export const Parent = ({ data }) => {

  const [value, setValue] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  }
  return (
    <div className="parent">
      <p>Parent  component</p>
      <p>Data</p>
      <input type='text' value={value} onChange={e => handleChange(e)} />
      <Child value={value} />
    </div>
  )
}