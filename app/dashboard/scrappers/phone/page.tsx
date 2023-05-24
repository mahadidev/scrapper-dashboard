"use client";
import { PhonesTable, Breadcrumb } from "@/components";
import React from "react";
import { HiHome } from "react-icons/hi";

const Phone = () => {
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
          {
            label: "Phone",
            slug: "/dashboard/scrappers/phone",
          },
        ]}
      />
      <PhonesTable />
    </>
  );
};

export default Phone;
