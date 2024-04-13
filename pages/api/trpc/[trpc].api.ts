import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "service/trpc";

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
