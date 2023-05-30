"use client";
import { Api } from "@/library";
import { ApiResponseType, UserType } from "@/types";
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
    onSuccess?: CallableFunction;
  }) => {
    setAuthUser(user);
    localStorage.setItem("authUser", JSON.stringify(user));

    if (onSuccess) {
      onSuccess();
    }
  };

  // logout
  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("authUser");
  };

  // use effect
  const useEffect = () => {
    var users = localStorage.getItem("authUser");
    if (users) {
      login({ user: JSON.parse(users) });
      Api({
        method: "POST",
        path: "/user/check",
        data: {
          token: JSON.parse(users) ? JSON.parse(users).token : null,
        },
        token: JSON.parse(users) ? JSON.parse(users).token : null,
        onSuccess: (response: ApiResponseType) => {
          if (response.status === 1) {
            login({ user: response.data, onSuccess: () => {} });
          } else {
            logout();
          }
        },
      });
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
