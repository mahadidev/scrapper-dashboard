"use client";
import { TextInput, Button } from "@/components";
import React, { useState } from "react";

const ChangePassword = () => {
  // state
  const [name, setName] = useState<string>("Mahadi Hasan");
  const [email, setEmail] = useState<string>("mahadi.dev.pm@gmail.com");

  return (
    <>
      <div className="w-full">
        <TextInput
          label="Old Password:"
          onChange={setName}
          value={name}
          placeholder=""
          className="focus:!ring-gray-600 focus:!border-gray-600"
        />
        <TextInput
          label="Password:"
          onChange={setEmail}
          value={email}
          placeholder=""
          className="focus:!ring-gray-600 focus:!border-gray-600"
        />
        <TextInput
          label="Confirm Password:"
          onChange={setEmail}
          value={email}
          placeholder=""
          className="focus:!ring-gray-600 focus:!border-gray-600"
        />
        <Button className="!w-full mt-2 !bg-gray-700 hover:!bg-gray-600 !text-white">
          Change Password
        </Button>
      </div>
    </>
  );
};

export default ChangePassword;
