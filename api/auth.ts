import httpRequest from "config/httpRequest";

export const loginApi = (data: any): Promise<boolean> =>
  httpRequest.post("auth/login", data);
