"use client";
import { ProfileTabs, Breadcrumb } from "@/components";
import React from "react";
import { HiHome } from "react-icons/hi";

const ProfilePage = () => {
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
            label: "Profile",
            slug: "/dashboard/profile",
          },
        ]}
      />
      <ProfileTabs />
    </>
  );
};

export default ProfilePage;
