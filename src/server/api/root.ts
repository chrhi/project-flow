import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "../auth";
import { notificatioRouter } from "../notifications";
import { organizationRouter } from "../organization";
import { chatRouter } from "../chat-server";
import { newProjectRouter } from "../project-router";
import { noteRouter } from "../notes";




export const appRouter = createTRPCRouter({
    userRouter,
    notificatioRouter,
    organizationRouter,
    chatRouter,
    newProjectRouter,
    noteRouter,
 
});

// export type definition of API
export type AppRouter = typeof appRouter;
