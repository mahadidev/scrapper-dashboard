"use client";
import { SupportTimeline } from "@/components";
import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

const Support = () => {
  return (
    <>
      <div className="bg-white border-t">
        <div className="container">
          <Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-transparent py-3 px-5"
          >
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item>Support</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <SupportTimeline />
    </>
  );
};

export default Support;
