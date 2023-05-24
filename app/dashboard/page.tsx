"use client";
import { OverViewBoxes, Tutorials } from "@/components";
import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <OverViewBoxes />
      <Tutorials />
    </>
  );
};

export default Home;
