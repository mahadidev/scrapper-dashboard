"use client";
import { DataTable, Breadcrumb } from "@/components";
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
      <DataTable
        columns={[
          {
            label: "ID",
            value: "id",
          },
          {
            label: "Phone",
            value: "value",
          },
          {
            label: "URL",
            value: "url",
          },
          {
            label: "Created",
            value: "created_at",
          },
        ]}
        searchKey="url"
        apiPath="/scrapped-data/fetch/phone"
        exportApiPath="/scrapped-data/phone"
      />
    </>
  );
};

export default Phone;
