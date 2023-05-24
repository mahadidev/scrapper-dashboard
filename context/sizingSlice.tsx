"use client";
import React, { useState } from "react";

const sizingSlice = () => {
  // state
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // on load
  const useEffect = () => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  };

  return { windowWidth, useEffect };
};

export default sizingSlice;
