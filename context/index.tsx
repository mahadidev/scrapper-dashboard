"use client";
import React, { createContext, useContext } from "react";
import lanSlice from "./lanSlice";
import emailSlice from "./emailSlice";
import navSlice from "./navSlice";

const State = () => {
  // nav
  const nav = navSlice();

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
    ...nav,
    ...lan,
    ...email,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
