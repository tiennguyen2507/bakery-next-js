import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "config/server/trpc";

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
