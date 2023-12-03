import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { GetServerSidePropsContext } from "next";

const baseURL = "https://bakery-nest-be-production.up.railway.app";

export const useHttpRequest = () => {
  const router = useRouter();
  const instant = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });

  instant.interceptors.request.use((requestConfig) => {
    const token = Cookies.get("token");
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  });

  instant.interceptors.response.use(
    (responseConfig) => {
      return responseConfig;
    },
    (error: AxiosError<{ statusCode: number; message: string }>) => {
      if (error.response?.data?.statusCode) {
        router.push("/sign-in");
      }

      return Promise.reject<{ message: string }>(error.response?.data);
    }
  );

  return instant;
};

export const useHttpRequestGssp = (context?: GetServerSidePropsContext) => {
  const token = context?.req.cookies["token"];
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
  });
};
