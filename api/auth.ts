import { AxiosPromise } from "axios";
import httpRequest from "config/httpRequest";
import httpRequestGssp from "config/httpRequestGssp";

export const loginApi = (
  data: any
): AxiosPromise<{ access_token: string; refresh_token: string }> =>
  httpRequest.post("auth/login", data);

export const getAuthInfo = (token?: string) =>
  httpRequestGssp({ token }).get("/auth/info");
