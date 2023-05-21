"use client";
import { LanType } from "@/types";
import React, { useState } from "react";

const lanSlice = () => {
  const [selectedLan, setLan] = useState<LanType>({
    tag: "en",
    label: "English",
  });

  const selectLan = (lan: LanType) => {
    setLan(lan);
  };

  return {
    selectLan,
    selectedLan,
  };
};

export default lanSlice;
