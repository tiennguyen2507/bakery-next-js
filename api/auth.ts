import { AxiosPromise } from "axios";
import httpRequest, { httpRequestGssp } from "config/httpRequest";

export const loginApi = (
  data: any
): AxiosPromise<{ access_token: string; refresh_token: string }> =>
  httpRequest.post("auth/login", data);

export const registerApi = (
  data: any
): AxiosPromise<{ access_token: string; refresh_token: string }> =>
  httpRequest.post("auth/register", data);

export const getAuthInfo = (token?: string) =>
  httpRequestGssp({ token }).get("/auth/info");
