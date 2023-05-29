import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "../auth";
import { StakeHolderRouter } from "./routers/stakeholders";
import { projectRouter } from "./routers/project";
import { resourcesRouter } from "./routers/Resources";
import { riskRouter } from "./routers/risk";
import { startupRouter } from "./inputs/startup";
import { projectManagmentPlanRouter } from "./inputs/management-plan/projectManagmentPlan";
import { scopePlanningRouter } from "./inputs/management-plan/scope";
import { riskPlanningRouter } from "./inputs/management-plan/risk-managment-plan";
import { changePlanningRouter } from "./inputs/management-plan/change-managment";
import { scheduelPlanningRouter } from "./inputs/management-plan/scheduel-management";
import { integrationsRouter } from "./pdf-generater/integrations";

export const appRouter = createTRPCRouter({
    userRouter,
    StakeHolderRouter,
    projectRouter,
    resourcesRouter,
    riskRouter,
    startupRouter, 
    projectManagmentPlanRouter,
    scopePlanningRouter,
    riskPlanningRouter,
    changePlanningRouter,
    scheduelPlanningRouter,
    integrationsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
