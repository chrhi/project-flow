import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "../auth";
import { StakeHolderRouter } from "./routers/stakeholders";
import { projectRouter } from "./routers/project";
import { resourcesRouter } from "./routers/Resources";
import { riskRouter } from "./routers/risk";
import { tasksRouter } from "./routers/tasks-route";
import { mileStoneRouter } from "./routers/mileStones";
import { ProjectObjectivesRouter } from "./routers/project-objectives";
import { comunicationsRouter } from "./routers/comunications";
import { notificatioRouter } from "../notifications";
import { organizationRouter } from "./routers/organization";



export const appRouter = createTRPCRouter({
    userRouter,
    StakeHolderRouter,
    projectRouter,
    resourcesRouter,
    riskRouter,
    tasksRouter,
    mileStoneRouter,
    ProjectObjectivesRouter,
    comunicationsRouter,
    notificatioRouter,
    organizationRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
