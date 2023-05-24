"use client";
import React, { useState } from "react";

const navSlice = () => {
  // state
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const [isSidebarCollapse, setSidebarCollapse] = useState<boolean>(true);

  return {
    navbarHeight,
    setNavbarHeight,
    isSidebarCollapse,
    setSidebarCollapse,
    sidebarWidth,
    setSidebarWidth,
  };
};

export default navSlice;
