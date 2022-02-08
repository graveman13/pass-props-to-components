import { useState } from "react"
import { Child1 } from "./Child1"
import { Child2 } from "./Child2"

export const Parent = () => {
  const [value, setValue] = useState('');

  const handleChange = (data) => {
    setValue(data);
  }

  return (
    <div className="parent">
      <p>Parent  component</p>
      <p>Data is</p>
      <Child1 handleChange={handleChange} />
      <Child2 value={value} />
    </div>
  )
}