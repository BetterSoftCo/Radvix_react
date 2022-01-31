import axios from "axios";
import { toast } from "react-toastify";
import { AppConstants } from "../../core/constants";
export const HTTP = axios.create({
  baseURL: AppConstants.base_url_api,
  headers: {
    "content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "'http://localhost:3000'",
    "Access-Control-Allow-Credentials": "true",
  },
});

HTTP.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

HTTP.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 401) {
        toast.error(
          `StatusError:${error.response.status} You do not have access to this action !`,
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
    }

    return Promise.reject(error);
  }
);
