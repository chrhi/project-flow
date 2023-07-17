

import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { create_invitaion } from "./createInvitation";
import { getJoinRequestsOfUser } from "./get-join-request";


export const notificatioRouter = createTRPCRouter({
  create_invitaion,
  getJoinRequestsOfUser
});
