"use client";
import { useStateContext } from "@/context";
import React from "react";

const Details = () => {
  // context
  const { authUser } = useStateContext();
  return (
    <>
      <div className="w-full h-auto mx-auto relative rounded overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Extra large avatar"
        />
      </div>
      <div className="w-full mt-4 flex flex-col gap-1 items-center">
        <h2 className="text-base text-gray-600 font-semibold">
          {authUser?.name}
        </h2>
        <h2 className="text-base text-gray-600 font-semibold flex gap-1 items-center">
          {authUser?.email}
        </h2>
        <div className="px-2 py-1 bg-gray-200 mt-2 rounded-md">{authUser?.plan?.requests_available} try left</div>
      </div>
    </>
  );
};

export default Details;
