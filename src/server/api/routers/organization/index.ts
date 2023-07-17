

import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { getUserOrganization } from "./get-user-organization";


export const organizationRouter = createTRPCRouter({
    getUserOrganization
});
