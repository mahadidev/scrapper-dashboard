"use client";
import React from "react";
import { LanSwitch, SingInForm, SingupForm } from "@/components";
import { useStateContext } from "@/context";
import { inputField, singin, singup } from "@/string";

const Auth = ({ type }: { type: "singin" | "singup" }) => {
  // context
  const { selectedLan } = useStateContext();

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <LanSwitch className="mb-4 hover:!bg-transparent" />
          {/* <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            MScrapper
          </a> */}
          <div className="w-full bg-white rounded-lg shadow-box md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {type === "singin" ? (
                <>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    {singin.title[selectedLan.tag]}
                  </h1>
                  <SingInForm />
                </>
              ) : (
                <>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    {singup.title[selectedLan.tag]}
                  </h1>
                  <SingupForm />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
