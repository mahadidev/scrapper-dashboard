"use client";
import React, { useEffect } from "react";
import { Navigation, Sidebar } from "@/components";
import { useStateContext } from "@/context";

const LayoutDashboard = ({ children }: { children: any }) => {
  // context
  const {
    sidebarWidth,
    navbarHeight,
    isSidebarCollapse,
    contextDefaultCall,
    windowWidth,
  } = useStateContext();

  // use effect
  useEffect(() => {
    contextDefaultCall();
  }, []);

  return (
    <>
      <Navigation />
      <div className="w-full flex relative">
        <div
          className="w-max h-screen bg-white shadow-sm fixed top-0 left-0  z-30"
          style={{
            paddingTop: `${navbarHeight}px`,
          }}
        >
          <Sidebar />
        </div>
        <div
          className={`w-full ml-auto ${
            windowWidth < 767 && isSidebarCollapse && "!max-w-full"
          }`}
          style={{
            paddingTop: `${navbarHeight}px`,
            maxWidth: `calc(100% - ${sidebarWidth}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
