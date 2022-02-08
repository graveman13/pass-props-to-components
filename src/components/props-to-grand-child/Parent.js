import { useContext, useState } from "react"
import { Child1 } from "./Child1"
import { Child2 } from "./Child2";
import { ContexParentData, ContexStaticData } from "./contex"

export const Parent = () => {
  const { setValue } = useContext(ContexParentData);
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  }
  return (
    <div className="parent">
      <p>Parent  component</p>
      <p>Data</p>
      <input type='text' onChange={e => handleChange(e)} />
        <Child1 />
        <Child2 />
    </div>
  )
}