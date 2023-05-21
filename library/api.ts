import axios from "axios";

const Api = ({
  method = "GET",
  path,
  data,
  onSuccess,
  onError,
}: {
  method?: string;
  path: string;
  data: any;
  onSuccess?: CallableFunction;
  onError?: CallableFunction;
}) => {
  axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}${path}`,
    responseType: "stream",
    data: data,
  })
    .then(function (response: any) {
      response = response.data;
      if (onSuccess) {
        onSuccess(response);
      }
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
    });
};

export default Api;
