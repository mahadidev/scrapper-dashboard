"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Papa from "papaparse";
import { Api } from "@/library";
import { ApiResponseType } from "@/types";
import { useStateContext } from "@/context";
import { Progress, Toast } from "flowbite-react";
import { toast } from "react-toastify";

const Uploader = ({ label, type }: { label?: string; type?: string }) => {
  // context
  const { authUser } = useStateContext();
  // state
  const [isUploading, setUploading] = useState<boolean>(false);
  const [uploadingProcess, setUploadingProcess] = useState<number>(45);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [completedItems, setCompletedItems] = useState<number>(0);
  const [dataFound, setDataFound] = useState<number>(0);
  const [completedPar, setCompletedPar] = useState<number>(0);

  // on upload
  const onUpload = (files: any) => {
    // set uploading state
    setUploading(true);

    Papa.parse(files, {
      skipEmptyLines: true,
      complete: function (results) {
        var data: any = results.data;
        data = data;
        var counter = 0;

        // total file
        setTotalItems(data.length);

        function sendApiReq() {
          if (counter <= data.length && data[counter]) {
            Api({
              path: `/scrapper`,
              method: "POST",
              token: authUser?.token,
              data: {
                type: type,
                url: data[counter][0],
              },
              timeout: 5000,
              onSuccess: (response: ApiResponseType) => {
                if (response.status === 1) {
                  setDataFound((prevFoundData: number) => prevFoundData + 1);
                }
              },
              onResponse: () => {
                sendApiReq();
                counter = counter + 1;
                var completedPar = Math.floor((100 / data.length) * counter);
                // set completed par
                setCompletedPar(completedPar);
                setCompletedItems(
                  (prevCompletedItem: number) => prevCompletedItem + 1
                );
              },
            });
          } else {
            setUploading(false);
            setCompletedPar(0);
            setTotalItems(0);
            setDataFound(0);
            setCompletedItems(0);
            setUploadingProcess(0);

            toast.success("Sheet has successfully grabbed.");
          }
        }
        sendApiReq();
      },
    });
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-box p-3">
        <h2 className="text-gray-700 font-semibold mb-0">{label}</h2>
        <p className="text-gray-600 text-sm">
          Upload sheet and collect email. see{" "}
          <a href="#" target="_blank" className="text-blue-600 underline">
            example{" "}
          </a>{" "}
          sheet
        </p>
        <div className="w-full py-4 px-3 bg-primary-50/50 transition border-[1px] border-primary-200 hover:border-blue-600 border-dashed rounded-md cursor-pointer mt-4">
          {!isUploading && (
            <Dropzone onDrop={(acceptedFiles) => onUpload(acceptedFiles[0])}>
              {({ getRootProps, getInputProps }) => (
                <div className="relative" {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    type="file"
                    className="w-full h-full absolute top-0 left-0 right-0 bottom-0 opacity-0"
                  />
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-16 h-16 block mx-auto"
                  >
                    <g>
                      <g>
                        <path
                          fill="#E5E1E5"
                          d="M163.033,1011.756L2.746,191.353c-4.863-24.879,11.365-48.991,36.245-53.852l124.042-24.234l194.642-42.82
l279.663,941.308H163.033V1011.756z"
                        ></path>
                      </g>
                      <path
                        fill="#99E6FC"
                        d="M163.033,680.979L68.355,196.393l94.678-18.501l143.802-23.615l62.994,584.599L163.033,680.979z"
                      ></path>
                      <g id="XMLID_159_">
                        <g>
                          <path
                            fill="#F9F7F8"
                            d="M1014.357,64.9v957.461c0,25.351-20.549,45.899-45.899,45.899H208.93
c-25.351,0-45.901-20.549-45.901-45.899V64.9c0-25.35,20.551-45.9,45.901-45.9h759.528C993.809,19,1014.357,39.551,1014.357,64.9
z"
                          ></path>
                        </g>
                        <path
                          fill="#EFEDEF"
                          d="M574.473,971.206c-90.848,0-164.495-73.646-164.495-164.493V19H208.93
c-25.351,0-45.901,20.551-45.901,45.9v957.461c0,25.351,20.551,45.899,45.901,45.899h759.528
c25.351,0,45.899-20.549,45.899-45.899v-51.155H574.473z"
                        ></path>
                        <path
                          fill="#FEC165"
                          d="M950.933,737.554V234.861c0-7.122-5.774-12.896-12.897-12.896H239.354c-7.12,0-12.896,5.774-12.896,12.896
v502.692H950.933z"
                        ></path>
                        <path
                          fill="#FDB441"
                          d="M409.978,221.965H239.354c-7.12,0-12.896,5.774-12.896,12.896v502.692h183.52V221.965z"
                        ></path>
                        <circle
                          fill="#FEE903"
                          cx="588.693"
                          cy="600.309"
                          r="246.948"
                        ></circle>
                        <path
                          fill="#F4D902"
                          d="M409.978,770.729V429.889c-42.274,44.316-68.229,104.339-68.229,170.419
C341.748,666.391,367.703,726.41,409.978,770.729z"
                        ></path>
                        <g>
                          <path
                            fill="#99E6FC"
                            d="M902.813,668.316c-57.591-25.393-122.604-28.267-182.203-8.034l-51.163,17.336
c-52.369,17.759-109.135,17.759-161.505,0l-51.163-17.336c-59.602-20.232-124.611-17.358-182.182,8.034l-48.142,21.226v105.269
l80.12,33.354h599.658l44.699-33.354V689.542L902.813,668.316z"
                          ></path>
                          <path
                            fill="#62DBFB"
                            d="M409.978,828.165V649.264c-45.72-6.239-92.605,0.184-135.379,19.053l-48.141,21.226v105.269
l80.119,33.354H409.978z"
                          ></path>
                          <path
                            fill="#62DBFB"
                            d="M950.933,794.811v61.709c0,5.452-4.424,9.878-9.879,9.878H236.332c-5.453,0-9.877-4.426-9.877-9.878
v-61.709l48.142-21.229c57.57-25.39,122.58-28.268,182.182-8.055l51.163,17.358c52.37,17.759,109.136,17.759,161.505,0
l51.163-17.358c59.6-20.213,124.612-17.335,182.203,8.055L950.933,794.811z"
                          ></path>
                          <path
                            fill="#01D0FB"
                            d="M236.332,866.397h184.86c-7.214-18.51-11.215-38.625-11.215-59.685v-52.188
c-45.72-6.231-92.605,0.192-135.379,19.061l-48.141,21.226v61.71c-0.003,5.451,4.421,9.875,9.874,9.875V866.397z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p className="text-center text-gray-600 mt-2 text-sm">
                    Click or drag file to upload
                  </p>
                </div>
              )}
            </Dropzone>
          )}
          {isUploading && (
            <>
              <div className="relative">
                <p className="text-center text-gray-600 mt-2 text-sm">
                  data is collecting from the sheet...
                </p>
              </div>
              <Progress
                className="mt-2"
                color="indigo"
                progress={completedPar}
                labelProgress
                size="lg"
              />
              <p className="text-gray-500 mt-2 text-sm ">
                total url {totalItems} / completed url {completedItems}
              </p>
            </>
          )}
        </div>
      </div>{" "}
    </>
  );
};

export default Uploader;
