import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { getUserOrganization } from "./get-user-organization";
import { getUserSelectedOrg } from "./get-user-selected-org";
import { updateUserSelectedOrg } from "./update-user-selected-org";
import { getOrgById } from "./get-org-by-id";
import { updateOrganization } from "./update-organization";
import { remove_persone_from_org } from "./remove-memeber";
import { create_org } from "./create-organization";

export const organizationRouter = createTRPCRouter({
    getUserOrganization,
    getUserSelectedOrg,
    updateUserSelectedOrg,
    getOrgById,
    updateOrganization,
    remove_persone_from_org,
    create_org
});
