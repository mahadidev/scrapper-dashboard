import React from "react";

const Layout = ({ children }: { children: any }) => {
  return <main className="w-full min-h-screen bg-blue-50">{children}</main>;
};

export default Layout;
