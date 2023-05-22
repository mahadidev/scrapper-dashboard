"use client";
import React, { createContext, useContext } from "react";
import lanSlice from "./lanSlice";
import emailSlice from "./emailSlice";

const State = () => {
  // lan
  const lan = lanSlice();

  // email
  const email = emailSlice();

  // call default
  const contextDefaultCall = () => {
    console.log("Default context called");
  };

  return {
    contextDefaultCall,
    ...lan,
    ...email,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
