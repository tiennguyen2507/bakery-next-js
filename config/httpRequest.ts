import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://bakery-nest-be-production.up.railway.app",
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

export default httpRequest;
