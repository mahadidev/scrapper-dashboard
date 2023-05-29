"use client";
import Button from "@/components/button";
import CheckBox from "@/components/input/checkBox";
import TextInput from "@/components/input/textInput";
import Link from "next/link";
import React, { useState } from "react";
import { useStateContext } from "@/context";
import { apiResponse, inputField, singin } from "@/string";
import { Api } from "@/library";
import { ApiErrorType, ApiResponseType, ApiTextType } from "@/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SingInForm = () => {
  // context
  const { selectedLan, login } = useStateContext();
  // state
  const [isLoading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<ApiTextType | null>(
    null
  );
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  // navigator
  const { push } = useRouter();
  // on submit
  const onSubmit = () => {
    // set loader
    setLoading(true);

    const userCredentials = {
      email: email,
      password: password,
    };
    Api({
      path: "/login",
      data: userCredentials,
      method: "POST",
      onSuccess: (response: ApiResponseType) => {
        if (response.status === 1) {
          setResponseStatus(1);
          login({
            user: response.data,
            onSuccess: () => {
              push("/dashboard");
              toast.success(singin.success[selectedLan.tag]);
            },
          });
        } else {
          if (response.errors) {
            if (response.message) {
              setResponseMessage({ text: response.message });
            }
            setEmailError(response.errors?.email);
            setPasswordError(response.errors?.password);
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
      <form className="space-y-4 md:space-y-6" action="#">
        <TextInput
          label={inputField.email[selectedLan.tag]}
          placeholder="name@company.com"
          value={email}
          name="email"
          onChange={(val: string) => {
            setEmail(val);
            setEmailError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          type="email"
          error={emailError}
        />
        <TextInput
          label={inputField.password[selectedLan.tag]}
          placeholder="••••••••"
          value={password}
          name="password"
          onChange={(val: string) => {
            setPassword(val);
            setPasswordError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          type="password"
          error={passwordError}
        />
        <div className="flex items-center justify-between">
          <CheckBox label={singin.remember[selectedLan.tag]} />
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline"
          >
            {singin.forget[selectedLan.tag]}
          </a>
        </div>
        <Button onClick={onSubmit} type="button" disable={isLoading}>
          {isLoading
            ? singin.loading[selectedLan.tag]
            : singin.submit[selectedLan.tag]}
        </Button>
        {responseMessage && (
          <p
            className={`${
              responseStatus && responseStatus === 1
                ? "text-primary-500"
                : "text-red-500"
            } text-sm !mt-1`}
          >
            {apiResponse[responseMessage.text] &&
              apiResponse[responseMessage.text][selectedLan.tag]}
          </p>
        )}
        <p className="text-sm font-light text-gray-500">
          {singin.singup[selectedLan.tag]}{" "}
          <Link
            href="/singup"
            className="font-medium text-primary-600 hover:underline"
          >
            {singin.singupLabel[selectedLan.tag]}
          </Link>
        </p>
      </form>
    </>
  );
};

export default SingInForm;
