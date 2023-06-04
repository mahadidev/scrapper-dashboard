"use client";
import { Breadcrumb, DataTable } from "@/components";
import { ScrappersInterface } from "@/components";
import React from "react";
import { HiHome } from "react-icons/hi";

const ScrapperPage = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            label: "Home",
            icon: <HiHome />,
            slug: "/dashboard",
          },
          {
            label: "Scrappers",
            slug: "/dashboard/scrappers",
          },
        ]}
      />
      <ScrappersInterface />
    </>
  );
};

export default ScrapperPage;
