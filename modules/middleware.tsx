"use client";
import React, { useEffect } from "react";
import { useStateContext } from "@/context";
import { useRouter } from "next/navigation";

const Middleware = ({
  type = "dashboard",
}: {
  type?: "dashboard" | "frontend";
}) => {
  // context
  const { authUser } = useStateContext();

  // navigator
  const { push } = useRouter();

  useEffect(() => {
    if (type === "dashboard") {
      if (!authUser) {
        push("/");
      }
    }
    if (type === "frontend") {
      if (authUser) {
        push("/dashboard");
      }
    }

    console.log(authUser);
  });

  return <></>;
};

export default Middleware;
