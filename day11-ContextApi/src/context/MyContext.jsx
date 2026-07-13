import { createContext, useState } from "react";
// setup out blank store---
export const MyStore = createContext();

//make a provider pf our storewho handle data and serves to the customers

export const ContextProvider = ({ children }) => {
  const [centralValue, setCentralValue] = useState("mai context mai hu");
  return <MyStore.Provider value={centralValue}>{children}</MyStore.Provider>;
};
