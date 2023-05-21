"use client";
import Button from "@/components/button";
import CheckBox from "@/components/input/checkBox";
import TextInput from "@/components/input/textInput";
import Link from "next/link";
import React, { useState } from "react";
import { Api } from "@/library";
import { useStateContext } from "@/context";
import { inputField, singin, singup } from "@/string";

const SingupForm = () => {
  // context
  const { selectedLan } = useStateContext();

  // state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    Api({
      path: "/singup",
      method: "post",
      data: {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
      onSuccess: (response: any) => {
        console.log(response);
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
        <TextInput
          label={inputField.email[selectedLan.tag]}
          placeholder="name@company.com"
          value={email}
          onChange={setEmail}
          name="email"
        />
        <TextInput
          label={inputField.password[selectedLan.tag]}
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
          name="password"
          type="password"
        />
        <TextInput
          label={inputField.confirmPassword[selectedLan.tag]}
          placeholder="••••••••"
          value={confirmPassword}
          onChange={setConfirmPassword}
          name="password"
          type="password"
        />
        <div className="flex items-center justify-between">
          <CheckBox label="terms-condition">
            {singup.accept[selectedLan.tag]}{" "}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              {singup.terms[selectedLan.tag]}
            </a>
          </CheckBox>
        </div>
        <Button type="submit" disable={isLoading}>
          {isLoading ? "creating..." : singup.submit[selectedLan.tag]}
        </Button>
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

export default SingupForm;
