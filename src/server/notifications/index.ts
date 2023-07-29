

import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { create_invitaion } from "./createInvitation";
import { getJoinRequestsOfUser } from "./get-join-request";
import { rejectJoinRequest } from "./reject-join-request";
import { accept_join_request } from "./accept-join-request";
import { getJoinRequest } from "./get-one-join-request";
import { getUserNotifications } from "./get-notifications";
import { reduceNotifications } from "./reduce-to-zero";


export const notificatioRouter = createTRPCRouter({
  create_invitaion,
  getJoinRequest,
  rejectJoinRequest,
  accept_join_request,
  getJoinRequestsOfUser,
  getUserNotifications,
  reduceNotifications

});
