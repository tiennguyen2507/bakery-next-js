import httpRequest from "./httpRequest";

const httpRequestGssp = ({ token }: { token?: string }) => {
  httpRequest.interceptors.request.use((requestConfig) => {
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  });

  httpRequest.interceptors.response.use((responseConfig) => {
    return responseConfig;
  });

  return httpRequest;
};

export default httpRequestGssp;
