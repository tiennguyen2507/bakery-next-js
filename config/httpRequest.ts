import axios from "axios";

const baseURL = "https://bakery-nest-be-production.up.railway.app";
const httpRequest = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpRequest.interceptors.request.use((requestConfig) => {
  return requestConfig;
});

httpRequest.interceptors.response.use((responseConfig) => {
  return responseConfig;
});

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
