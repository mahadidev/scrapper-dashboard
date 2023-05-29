"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Redirect = (path: string) => {
  // navigator
  const { push } = useRouter();

  return push(path);
};

export default Redirect;
