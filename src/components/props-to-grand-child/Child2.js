import { useContext } from "react";
import { ContexParentData, ContexStaticData } from "./contex";
import { GrandChild } from "./GrandChild";

export const Child2 = () => {
  const { value } = useContext(ContexParentData);
  const { data } = useContext(ContexStaticData);

  return (
    <div className="child second-child">
      <p>Child 2 component</p>
      <p>Data is(ContexParentData): {value}</p>
      <p>Data is(ContexStaticData): {data}</p>
    </div>
  )
}