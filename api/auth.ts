import { AxiosPromise } from "axios";
import httpRequest from "config/httpRequest";

export const loginApi = (
  data: any
): AxiosPromise<{ access_token: string; refresh_token: string }> =>
  httpRequest.post("auth/login", data);
