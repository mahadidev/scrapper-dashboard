"use client";
import React, { createContext, useContext } from "react";
import lanSlice from "./lanSlice";
import navSlice from "./navSlice";
import sizingSlice from "./sizingSlice";
import authSlice from "./authSlice";

const State = () => {
  // sizing
  const size = sizingSlice();

  // nav
  const nav = navSlice();

  // lan
  const lan = lanSlice();

  // auth
  const auth = authSlice();

  // call default
  const contextDefaultCall = () => {
    size.useEffect();
    auth.useEffect();
  };

  return {
    contextDefaultCall,
    ...size,
    ...nav,
    ...lan,
    ...auth,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
