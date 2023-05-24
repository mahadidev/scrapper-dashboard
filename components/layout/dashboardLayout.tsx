"use client";
import React from "react";
import { Navigation, Sidebar } from "@/components";
import { useStateContext } from "@/context";

const LayoutDashboard = ({ children }: { children: any }) => {
  // context
  const { sidebarWidth, navbarHeight } = useStateContext();

  return (
    <>
      <Navigation />
      <div className="w-full flex relative">
        <div
          className="w-max h-screen bg-white shadow-sm fixed top-0 left-0"
          style={{
            paddingTop: `${navbarHeight}px`,
          }}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full ml-auto`}
          style={{
            maxWidth: `calc(100% - ${sidebarWidth}px)`,
            paddingTop: `${navbarHeight}px`,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
