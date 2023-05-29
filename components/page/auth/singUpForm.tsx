"use client";
import Button from "@/components/button";
import CheckBox from "@/components/input/checkBox";
import TextInput from "@/components/input/textInput";
import Link from "next/link";
import React, { useState } from "react";
import { useStateContext } from "@/context";
import { apiResponse, inputField, singin, singup } from "@/string";
import { Api } from "@/library";
import { ApiErrorType, ApiResponseType, ApiTextType } from "@/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SingUpForm = () => {
  // context
  const { selectedLan, login } = useStateContext();
  // state
  const [isLoading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
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
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };
    Api({
      path: "/register",
      data: userCredentials,
      method: "POST",
      onSuccess: (response: ApiResponseType) => {
        if (response.status === 1) {
          setResponseStatus(1);
          login({
            user: response.data,
            onSuccess: () => {
              push("/dashboard");
              toast.success(singup.success[selectedLan.tag]);
            },
          });
        } else {
          if (response.errors) {
            if (response.message) {
              setResponseMessage({ text: response.message });
            }
            setNameError(response.errors?.name);
            setEmailError(response.errors?.email);
            setPasswordError(response.errors?.password);
            setConfirmPasswordError(response.errors?.password_confirmation);
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
          label={inputField.name[selectedLan.tag]}
          placeholder="Mahadi Hasan"
          value={name}
          name="name"
          onChange={(val: string) => {
            setName(val);
            setNameError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          type="text"
          error={nameError}
        />
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
        <TextInput
          label={inputField.confirmPassword[selectedLan.tag]}
          placeholder="••••••••"
          value={confirmPassword}
          name="confirmPassword"
          onChange={(val: string) => {
            setConfirmPassword(val);
            setConfirmPasswordError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          type="password"
          error={confirmPasswordError}
        />
        <Button onClick={onSubmit} type="button" disable={isLoading}>
          {isLoading
            ? singup.loading[selectedLan.tag]
            : singup.submit[selectedLan.tag]}
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
          {singup.alreadyAccount[selectedLan.tag]}{" "}
          <Link
            href="/"
            className="font-medium text-primary-600 hover:underline"
          >
            {singup.alreadyAccountLabel[selectedLan.tag]}{" "}
          </Link>
        </p>
      </form>
    </>
  );
};

export default SingUpForm;
