import { useContext } from "react";
import { ContexParentData, ContexStaticData } from "./contex";
import { GrandChild } from "./GrandChild";

export const Child1 = () => {
  const { value } = useContext(ContexParentData);
  const { data } = useContext(ContexStaticData);

  return (
    <div className="child">
      <p>Child 1 qcomponent</p>
      <p>Data is(ContexParentData): {value}</p>
      <p>Data is(ContexStaticData){data}</p>
      <ContexStaticData.Provider value={{data:'information'}}>
        <GrandChild />

      </ContexStaticData.Provider>
    </div>
  )
}