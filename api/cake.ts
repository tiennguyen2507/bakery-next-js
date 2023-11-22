import { httpRequestGssp } from "config/httpRequest";
import { ListCake, Cake } from "types/cake.type";

export const getAllCakesApi = (token?: string): Promise<ListCake> =>
  httpRequestGssp({ token })
    .get("/product")
    .then((res) => res.data.data)
    .catch(() => null);

export const getOneCakeApi = (
  token: string | undefined,
  id: string | string[] | undefined
): Promise<Cake> =>
  httpRequestGssp({ token })
    .get(`product/${id}`)
    .then((res) => res.data)
    .catch(() => null);
