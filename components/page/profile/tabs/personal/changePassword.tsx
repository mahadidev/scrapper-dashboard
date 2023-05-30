"use client";
import { TextInput, Button } from "@/components";
import { useStateContext } from "@/context";
import { Api } from "@/library";
import { ApiErrorType, ApiResponseType, ApiTextType } from "@/types";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  // context
  const { authUser } = useStateContext();

  // state
  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [oldPasswordError, setOldPasswordError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<ApiTextType | null>(
    null
  );
  const [responseStatus, setResponseStatus] = useState<number | null>(null);

  // on submit
  const onSubmit = () => {
    // set loader
    setLoading(true);

    const object = {
      old_password: password,
      password: password,
      password_confirmation: confirmPassword,
    };

    Api({
      path: "/user/reset-password",
      data: object,
      method: "POST",
      token: authUser?.token,
      onSuccess: (response: ApiResponseType) => {
        if (response.status === 1) {
          setResponseStatus(1);
          toast.success(response.message);
        } else {
          if (response.errors) {
            if (response.message) {
              setResponseMessage({ text: response.message });
            }
            setOldPasswordError(response.errors?.old_password);
            setPasswordError(response.errors?.password);
            setConfirmPasswordError(response.errors?.confirm_password);
          }
        }
      },
      onError: (response: ApiErrorType) => {
        console.log(response);
      },
      onResponse: () => {
        // set loader
        setLoading(false);
      },
    });
  };

  return (
    <>
      <div className="w-full">
        <TextInput
          label="Old Password:"
          value={oldPassword}
          error={oldPasswordError}
          placeholder="********"
          onChange={(val: string) => {
            setOldPassword(val);
            setOldPasswordError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
        />
        <TextInput
          label="Password:"
          onChange={(val: string) => {
            setPassword(val);
            setPasswordError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          value={password}
          error={passwordError}
          placeholder="********"
        />
        <TextInput
          label="Confirm Password:"
          onChange={(val: string) => {
            setConfirmPassword(val);
            setConfirmPasswordError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          value={confirmPassword}
          error={confirmPasswordError}
          placeholder="********"
        />
        <Button className="!w-full mt-2" onClick={onSubmit}>
          {isLoading ? "Changing..." : "Change"}
        </Button>
      </div>
    </>
  );
};

export default ChangePassword;
