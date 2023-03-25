import { createTRPCRouter } from "~/server/api/trpc";
import { userManagment } from "./routers/auth/userManagment";

export const appRouter = createTRPCRouter({
  userRouter : userManagment 

});

// export type definition of API
export type AppRouter = typeof appRouter;
