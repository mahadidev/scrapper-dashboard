"use client";
import { ApiResponseType, ApiErrorType } from "@/types";
import axios from "axios";

const Api = ({
  method = "GET",
  path,
  data,
  onSuccess,
  onError,
  onResponse,
  token,
}: {
  method?: string;
  path: string;
  data?: any;
  onSuccess?: CallableFunction;
  onError?: CallableFunction;
  onResponse?: CallableFunction;
  token?: string;
}) => {
  axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}${path}`,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (response: ApiResponseType | any) {
      response = response.data;
      if (onSuccess) {
        onSuccess(response);
      }
      if (onResponse) {
        onResponse();
      }
    })
    .catch((error: ApiErrorType | any) => {
      if (error.response && error.response.data) {
        if (onSuccess) {
          onSuccess(error.response.data);
        }
      } else {
        if (onError) {
          onError(error);
        }
      }
      if (onResponse) {
        onResponse();
      }
    });
};

export default Api;
