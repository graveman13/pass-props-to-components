import { useState } from "react";

export const Child = ({ handleChangeData }) => {

  const handleChange = ({ target: { value } }) => {
    handleChangeData(value);
  }
  return (
    <div className="child">
      <p>Child component</p>
      <input type='text' onChange={e => handleChange(e)} />
    </div>
  )
}