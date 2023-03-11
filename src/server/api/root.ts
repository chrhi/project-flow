import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { startupRouter } from "./routers/startup";
import { stakeholdersRouter } from "./routers/stakeholders";
import { pdfRouter } from "./routers/pdf";
import { statusRoute } from "./routers/app";
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  startup: startupRouter,
  stakeholder : stakeholdersRouter,
  pdf : pdfRouter,
  status : statusRoute
});

// export type definition of API
export type AppRouter = typeof appRouter;
