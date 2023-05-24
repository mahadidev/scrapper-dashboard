"use client";
import React, { createContext, useContext } from "react";
import lanSlice from "./lanSlice";
import emailSlice from "./emailSlice";
import navSlice from "./navSlice";
import sizingSlice from "./sizingSlice";

const State = () => {
  // sizing
  const size = sizingSlice();

  // nav
  const nav = navSlice();

  // lan
  const lan = lanSlice();

  // email
  const email = emailSlice();

  // call default
  const contextDefaultCall = () => {
    size.useEffect();
  };

  return {
    contextDefaultCall,
    ...size,
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
