

import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { getUserOrganization } from "./get-user-organization";
import { getUserSelectedOrg } from "./get-user-selected-org";
import { updateUserSelectedOrg } from "./update-user-selected-org";
import { getOrgById } from "./get-org-by-id";


export const organizationRouter = createTRPCRouter({
    getUserOrganization,
    getUserSelectedOrg,
    updateUserSelectedOrg,
    getOrgById
});
