"use client";
import { TextInput, Button } from "@/components";
import { useStateContext } from "@/context";
import { Api } from "@/library";
import { ApiErrorType, ApiResponseType, ApiTextType } from "@/types";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditDetails = () => {
  // context
  const { authUser, authRefresh } = useStateContext();

  // state
  const [name, setName] = useState<string>(authUser?.name ? authUser.name : "");
  const [nameError, setNameError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<ApiTextType | null>(
    null
  );
  const [responseStatus, setResponseStatus] = useState<number | null>(null);

  // on submit
  const onSubmit = () => {
    // set loader
    setLoading(true);

    const object = {
      name: name,
    };

    Api({
      path: "/user/update",
      data: object,
      method: "POST",
      token: authUser?.token,
      onSuccess: (response: ApiResponseType) => {
        if (response.status === 1) {
          setResponseStatus(1);
          toast.success(response.message);
          authRefresh(response.data);
        } else {
          if (response.errors) {
            if (response.message) {
              setResponseMessage({ text: response.message });
            }
            setNameError(response.errors?.name);
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
      <div className="w-full">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-2 hidden">
          Profile Picture:
        </p>
        <div className="w-full  bg-white rounded-md hidden">
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
            <input type="file" name="file_upload" className="hidden" onChange={(e) => {
              console.log(e.target.value)
            }} />
          </label>
        </div>
        <TextInput
          label="Your Name:"
          onChange={(val: string) => {
            setName(val);
            setNameError(null);
            setResponseMessage(null);
            setResponseStatus(null);
          }}
          value={name}
          placeholder="Your Name"
        />

        <Button className="!w-full mt-2" onClick={onSubmit}>
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </div>
    </>
  );
};

export default EditDetails;
