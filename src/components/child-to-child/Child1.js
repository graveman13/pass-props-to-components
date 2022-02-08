import { useState } from "react";

export const Child1 = ({ handleChange }) => {

  const handleChangeData = ({ target: { value } }) => {
    handleChange(value);
  }
  return (
    <div className="child">
      <p>Child component</p>
      <input type='text' onChange={e => handleChangeData(e)} />
    </div>
  )
}