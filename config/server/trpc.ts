import { createTRPCReact } from "@trpc/react-query";
import { initTRPC } from "@trpc/server";
import axios from "axios";

const t = initTRPC.create({
  isServer: true,
  allowOutsideOfServer: true,
});

export const trpcRouter = t.router;

export const trpcProcedure = t.procedure;

export const appRouter = trpcRouter({
  hello: trpcProcedure.query(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return data;
  }),
});

export const trpc = createTRPCReact<AppRouter>();

export type AppRouter = typeof appRouter;
