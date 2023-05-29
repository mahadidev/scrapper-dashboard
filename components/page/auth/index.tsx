"use client";
import React from "react";
import { LanSwitch, SingInForm, SingupForm } from "@/components";
import { useStateContext } from "@/context";
import { inputField, singin, singup } from "@/string";

const Auth = ({ type }: { type: "singin" | "singup" }) => {
  // context
  const { selectedLan, authUser } = useStateContext();

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <LanSwitch className="mb-4 hover:!bg-transparent" />
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
