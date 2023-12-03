import { AxiosPromise } from "axios";
import httpRequest, { httpRequestGssp } from "config/httpRequest";
import { useHttpRequest } from "hook/useHtttpRequest";

export const CartApi = {
  addProductInCard: (
    data: Cart.AddProductInCardRequest
  ): AxiosPromise<boolean> => httpRequest.post("/cart", data),
  getAll: (token?: string) => httpRequestGssp({ token }).get("/cart"),
};

export const useCartApi = () => {
  const httpRequest = useHttpRequest();
  return {
    getAll: (): AxiosPromise<
      {
        image: string;
        price: number;
        name: string;
        size: string;
        taste: string;
        amount: number;
      }[]
    > => httpRequest.get("/cart"),
    addProductInCard: (
      data: Cart.AddProductInCardRequest
    ): AxiosPromise<boolean> => httpRequest.post("/cart", data),
  };
};
