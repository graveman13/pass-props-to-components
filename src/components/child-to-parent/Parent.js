import { useState } from "react"
import { Child } from "./Child"

export const Parent = () => {
  const [data, setData] = useState('');

  const handleChangeData = (data) => {
    setData(data);
  }
  return (
    <div className="parent">
      <p>Parent  component</p>
      <p>Data is:{data}</p>
      <Child handleChangeData={handleChangeData}/>
    </div>
  )
}