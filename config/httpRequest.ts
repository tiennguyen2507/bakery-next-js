import Cookies from "js-cookie";
import axios from "axios";

const baseURL = "https://bakery-nest-be-production.up.railway.app";
const httpRequest = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpRequest.interceptors.request.use((requestConfig) => {
  const token = Cookies.get("token");
  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return requestConfig;
});

httpRequest.interceptors.response.use(
  (responseConfig) => {
    return responseConfig;
  },
  (err) => {
    window.location.href = "/sign-in";
    return err;
  }
);

export const httpRequestGssp = ({ token }: { token?: string }) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};

export default httpRequest;
