import { ApiResponseType, ApiErrorType } from "@/types";
import axios from "axios";

const Api = ({
  method = "GET",
  path,
  data,
  onSuccess,
  onError,
  onResponse,
}: {
  method?: string;
  path: string;
  data?: any;
  onSuccess?: CallableFunction;
  onError?: CallableFunction;
  onResponse?: CallableFunction;
}) => {
  axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}${path}`,
    data: data,
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
