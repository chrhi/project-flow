

import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { create_invitaion } from "./createInvitation";


export const notificatioRouter = createTRPCRouter({
  create_invitaion
});
