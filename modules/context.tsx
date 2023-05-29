"use client";
import { useStateContext } from "@/context";
import React, { useEffect } from "react";

const Context = () => {
  // context
  const { contextDefaultCall } = useStateContext();

  useEffect(() => {
    contextDefaultCall();
  }, []);
  return <></>;
};

export default Context;
