"use client";
import { Breadcrumb, DataTable } from "@/components";
import React from "react";
import { HiHome } from "react-icons/hi";

const Email = () => {
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
            label: "Email",
            slug: "/dashboard/scrappers/email",
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
            label: "Email",
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
        apiPath="/scrapped-data/fetch/email"
        exportApiPath="/scrapped-data/email"
      />
    </>
  );
};

export default Email;
