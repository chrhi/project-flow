import { createTRPCRouter } from "~/server/api/trpc";
import { userManagment } from "./routers/auth/userManagment";
import { stakHolderRouter } from "./routers/startup/stakeholders";
import { inisiatorRouter } from "./routers/startup/inisiator";
import { ProjectRouter } from "./routers/startup/Project";
import { ProjectDetailsRouter } from "./routers/startup/ProjectDetails";
import { teamRouter } from "./routers/startup/team";
import { tableInfoRouter } from "./routers/startup/tableInfo";
import { documentRouter } from "./routers/startup/document";
import { CreatePdf } from "./routers/startup/createPdf";

export const appRouter = createTRPCRouter({
  userRouter : userManagment ,
  stakHolderRouter,
  inisiatorRouter ,
  ProjectRouter,
  ProjectDetailsRouter,
  teamRouter,
  tableInfoRouter,
  documentRouter,
  CreatePdf


});

// export type definition of API
export type AppRouter = typeof appRouter;
