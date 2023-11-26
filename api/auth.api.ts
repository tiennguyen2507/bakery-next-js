import { useHttpRequest, useHttpRequestGssp } from "hook/useHtttpRequest";
import { AxiosPromise } from "axios";
import { GetServerSidePropsContext } from "next";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "types/auth.type";

export const useAuthApi = () => {
  const httpRequest = useHttpRequest();
  return {
    authLogin: (data: LoginRequest): AxiosPromise<LoginResponse> =>
      httpRequest.post("auth/login", data),

    authRegister: (data: RegisterRequest): AxiosPromise<RegisterResponse> => {
      return httpRequest.post("auth/register", data);
    },
  };
};

export const userAuthGsspApi = (context?: GetServerSidePropsContext) => {
  const httpRequestGssp = useHttpRequestGssp(context);
  return {
    authGetInfo: () => httpRequestGssp.get("/auth/info"),
  };
};
