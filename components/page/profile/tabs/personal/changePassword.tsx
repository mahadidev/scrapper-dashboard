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
        />
        <TextInput
          label="Password:"
          onChange={setEmail}
          value={email}
          placeholder=""
        />
        <TextInput
          label="Confirm Password:"
          onChange={setEmail}
          value={email}
          placeholder=""
        />
        <Button className="!w-full mt-2">Change Password</Button>
      </div>
    </>
  );
};

export default ChangePassword;
