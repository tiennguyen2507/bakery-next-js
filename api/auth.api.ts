import { AxiosPromise } from "axios";
import httpRequest, { httpRequestGssp } from "config/httpRequest";
import { LoginRequest, LoginResponse, RegisterResponse } from "types/auth.type";

export const AuthApi = {
  login: (data: LoginRequest): AxiosPromise<LoginResponse> =>
    httpRequest.post("auth/login", data),

  register: (data: RegisterResponse): AxiosPromise<RegisterResponse> =>
    httpRequest.post("auth/register", data),

  getInfo: (token?: string) => httpRequestGssp({ token }).get("/auth/info"),
};
