"use client";
import Button from "@/components/button";
import CheckBox from "@/components/input/checkBox";
import TextInput from "@/components/input/textInput";
import Link from "next/link";
import React, { useState } from "react";
import { useStateContext } from "@/context";
import { inputField, singin } from "@/string";

const SingInForm = () => {
  // context
  const { selectedLan } = useStateContext();
  // state
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#">
        <TextInput
          label={inputField.email[selectedLan.tag]}
          placeholder="name@company.com"
          value=""
          name="email"
        />
        <TextInput
          label={inputField.password[selectedLan.tag]}
          placeholder="••••••••"
          value=""
          name="password"
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
        <Button>
          {isLoading ? "sing in..." : singin.submit[selectedLan.tag]}
        </Button>
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
