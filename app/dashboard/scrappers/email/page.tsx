"use client";
import { Breadcrumb, DataTable } from "@/components";
import EmailsInterface from "@/components/page/emailsInterface";
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
      <EmailsInterface />
    </>
  );
};

export default Email;
