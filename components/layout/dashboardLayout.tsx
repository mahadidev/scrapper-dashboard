import React from "react";
import { Navigation } from "@/components";

const LayoutDashboard = ({ children }: { children: any }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default LayoutDashboard;
