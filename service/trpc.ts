import { createTRPCReact } from "@trpc/react-query";
import { initTRPC } from "@trpc/server";
import { authRouter } from "./trpc-route/auth";

const t = initTRPC.create({
  isServer: true,
  allowOutsideOfServer: true,
});

export const trpcRouter = t.router;

export const trpcProcedure = t.procedure;

export const appRouter = trpcRouter({
  auth: authRouter(),
});

export const trpc = createTRPCReact<AppRouter>();

export type AppRouter = typeof appRouter;
