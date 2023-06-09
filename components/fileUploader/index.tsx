"use client";
import { Button } from "@/components";
import { useStateContext } from "@/context";
import { Api } from "@/library";
import { ApiErrorType, ApiResponseType } from "@/types";
import { Tooltip } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";

const FileUploader = () => {
  // context
  const { authUser } = useStateContext();
  // state
  const [file, setFile] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const onSubmit = () => {
    if (file) {
      setLoading(true);
      Api({
        path: "/scrapper/email",
        method: "POST",
        token: authUser?.token,
        data: {
          sheet: file[0],
          type: "email",
        },
        onSuccess: (response: ApiResponseType) => {
          console.log(response);
        },
        onError: (error: ApiErrorType) => {
          console.log(error);
        },
        onResponse: () => {
          setLoading(false);
        },
      });
    }
  };
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="w-full py-4 px-4  bg-white rounded-md">
            <label className="flex justify-center w-full h-32 px-4 mb-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or{" "}
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input
                type="file"
                name="file_upload"
                className="hidden"
                onChange={(e: any) => {
                  setFile(e.target.files);
                }}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
            </label>
            <div className="w-full flex justify-between">
              <div>
                <Tooltip
                  content="Watch tutorial - How it's work."
                  style="light"
                >
                  <Button className="!bg-gray-200 !text-gray-700 hover:!bg-gray-300 !outline-none !ring-0 !border-0">
                    Watch Tutorial
                  </Button>
                </Tooltip>
              </div>

              <Button onClick={onSubmit} disable={isLoading}>
                {isLoading ? "Scrapping" : "Scrape"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FileUploader;
