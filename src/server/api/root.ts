import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "../auth";
import { StakeHolderRouter } from "./routers/stakeholders";
import { projectRouter } from "./routers/project";


export const appRouter = createTRPCRouter({
    userRouter,
    StakeHolderRouter,
    projectRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
