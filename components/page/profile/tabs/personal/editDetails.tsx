"use client";
import { TextInput, Button } from "@/components";
import React, { useState } from "react";

const EditDetails = () => {
  // state
  const [name, setName] = useState<string>("Mahadi Hasan");
  const [email, setEmail] = useState<string>("mahadi.dev.pm@gmail.com");

  return (
    <>
      {/* <div className="w-full max-w-[300px] h-auto mx-auto relative rounded overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Extra large avatar"
        />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-end">
          <button className="text-3xl bg-white text-gray-800 rounded-full overflow-hidden relative mb-4 p-3">
            <MdCameraAlt />
            <input
              type="file"
              className="w-full h-full absolute top-0 left-0 opacity-0"
            />
          </button>
        </div>
      </div> */}
      <div className="w-full">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
          Profile Picture:
        </p>
        <div className="w-full  bg-white rounded-md">
          <label className="flex justify-center w-full h-32 px-4 mb-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                Drop files to Attach, or{" "}
                <span className="text-blue-600 underline">browse</span>
              </span>
            </span>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>
        <TextInput
          label="Your Name:"
          onChange={setName}
          value={name}
          placeholder=""
          className="focus:!ring-gray-600 focus:!border-gray-600"
        />

        <Button className="!w-full mt-2 !bg-gray-700 hover:!bg-gray-600 !text-white">
          Update
        </Button>
      </div>
    </>
  );
};

export default EditDetails;
