import { createContext, useContext } from "react";

export const ContexParentData = createContext();
export const ContexStaticData = createContext({ data: 'default value' });