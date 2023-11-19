import { httpRequestGssp } from "config/httpRequest";
import { ListCake, Cake } from "types/cake.type";

export const getAllCakesApi = (token?: string): Promise<ListCake> =>
  httpRequestGssp({ token })
    .get("/bakery")
    .then((res) => res.data.data);

export const getOneCakeApi = (
  token: string | undefined,
  id: string | string[] | undefined
): Promise<Cake> =>
  httpRequestGssp({ token })
    .get(`bakery/${id}`)
    .then((res) => res.data);
