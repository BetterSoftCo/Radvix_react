import axios from "axios";
import { toast } from "react-toastify";
import { AppConstants, AppRoutes } from "./constants";
export const HTTP = axios.create({
  baseURL: AppConstants.base_url_api,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "'http://localhost:3000'",
    "Access-Control-Allow-Credentials": "true",
  },
});
let token = localStorage.getItem("token");
if (token) {
  HTTP.defaults.headers.common["authorization"] = `Bearer ${token}`;
}
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
    if (response.status >= 200 || response.status <= 299) {
      if (response.config.method !== "get") {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
          // dev code
          console.log(response.data.message);
        } else {
          // production code
          return response;
        }
      }
    }

    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status) {
        if (error.response.status === 401) {
          console.log(error.response.status);

          window.location.replace(AppRoutes.login);
          localStorage.clear();
        }
        toast.error(
          `StatusError:${error.response.status} : ${error.response.data.message}`,
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
    }

    return Promise.reject(error);
  }
);
