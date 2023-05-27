import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "../auth";
import { StakeHolderRouter } from "./routers/stakeholders";
import { projectRouter } from "./routers/project";
import { resourcesRouter } from "./routers/Resources";

export const appRouter = createTRPCRouter({
    userRouter,
    StakeHolderRouter,
    projectRouter,
    resourcesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
