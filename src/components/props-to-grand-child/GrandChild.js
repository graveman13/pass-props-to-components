import { useContext } from "react";
import { ContexParentData, ContexStaticData } from "./contex";

export const GrandChild = () => {
  const { value } = useContext(ContexParentData);
  const { data } = useContext(ContexStaticData);
  return (
    <div className="child">
      <p>GrandChild component</p>
      <p>Data is(ContexParentData):{value}</p>
      <p>Data is(ContexStaticData):{data} </p>
    </div>
  )
}