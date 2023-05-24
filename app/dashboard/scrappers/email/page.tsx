"use client";
import { EmailsTable, Breadcrumb } from "@/components";
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
      <EmailsTable />
    </>
  );
};

export default Email;
