import { useState } from "react"
import { ContexParentData } from "./contex"
import { Parent } from "./Parent"

export const Component = () => {
  const [value, setValue] = useState('');
  return (
    <ContexParentData.Provider value={{ value, setValue }}>
      <Parent />
    </ContexParentData.Provider>
  )
}