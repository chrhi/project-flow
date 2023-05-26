import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "../auth";


export const appRouter = createTRPCRouter({
    userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
