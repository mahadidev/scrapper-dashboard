"use client";
import { UserType } from "@/types";
import React, { useState } from "react";

const authSlice = () => {
  // state
  const [authUser, setAuthUser] = useState<UserType | null>(null);

  // login
  const login = ({
    user,
    onSuccess,
  }: {
    user: UserType;
    onSuccess: CallableFunction;
  }) => {
    setAuthUser(user);
    localStorage.setItem("authUser", JSON.stringify(user));

    onSuccess();
  };

  // logout
  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("authUser");
  };

  // use effect
  const useEffect = () => {
    const users = localStorage.getItem("authUser");
    if (users) {
      setAuthUser(JSON.parse(users));
    }
  };

  return {
    useEffect,
    login,
    logout,
    authUser,
  };
};

export default authSlice;
