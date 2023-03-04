import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { startupRouter } from "./routers/startup";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  startup: startupRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
