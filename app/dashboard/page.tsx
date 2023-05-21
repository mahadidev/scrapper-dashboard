"use client";
import { OverViewBoxes, Tutorials } from "@/components";
import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 hidden">
        <div className="container">
          <Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
          >
            <Breadcrumb.Item href="#" icon={HiHome}>
              Home
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <OverViewBoxes />
      <Tutorials />
    </>
  );
};

export default Home;
