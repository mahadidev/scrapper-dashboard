"use client";
import { TutorialTimeline, Breadcrumb } from "@/components";
import React from "react";
import { HiHome } from "react-icons/hi";

const TutorialsPage = () => {
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
            label: "Tutorials",
            slug: "/dashboard/tutorials",
          },
        ]}
      />
      <TutorialTimeline />
    </>
  );
};

export default TutorialsPage;
