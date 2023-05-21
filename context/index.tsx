"use client";
import React, { createContext, useContext } from "react";
import lanSlice from "./lanSlice";

const State = () => {
  // lan
  const lan = lanSlice();

  // call default
  const contextDefaultCall = () => {
    console.log("Default context called");
  };

  return {
    contextDefaultCall,
    ...lan,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
