import axios from "axios";
import { trpcProcedure, trpcRouter } from "service/trpc";

export const authRouter = () =>
  trpcRouter({
    hello: trpcProcedure.query(async () => {
      const { data } = await axios.get("http://localhost:3000/user");
      return data;
    }),
  });
