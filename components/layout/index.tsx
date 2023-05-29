import { Context, Middleware } from "@/modules";
import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Context />
      <Middleware type="frontend" />
      <main className="w-full min-h-screen bg-blue-50">{children}</main>
    </>
  );
};

export default Layout;
