import { AxiosPromise } from "axios";
import httpRequest, { httpRequestGssp } from "config/httpRequest";

export const CartApi = {
  addProductInCard: (
    data: Cart.AddProductInCardRequest
  ): AxiosPromise<boolean> => httpRequest.post("/cart", data),
  getAll: (token?: string) => httpRequestGssp({ token }).get("/cart"),
};
