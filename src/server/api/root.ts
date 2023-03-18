import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { startupRouter } from "./routers/startup/startup";
import { stakeholdersRouter } from "./routers/startup/stakeholders";
import { pdfRouter } from "./routers/startup/pdf";
import { statusRoute } from "./routers/app";
import { CharterRouter } from "./routers/startup/charter";
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  startup: startupRouter,
  stakeholder : stakeholdersRouter,
  pdf : pdfRouter,
  status : statusRoute,
  Charter : CharterRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
