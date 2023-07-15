import { createUser } from "./create-user";
import { updateUser } from "./update-user";
import { deleteUser } from "./delete-user";
import { getAllUser } from "./get-all-users";
import { getUser } from "./get-user";
import { PushUserMoreInformations } from "./create-user";

import {
  createTRPCRouter,
} from "~/server/api/trpc";
import { updateUserPassword } from "./update-password";
import { BlockUser, UnBlockUser } from "./block-unblock-user";
import { getAllEmails } from "./get-all-emails";

export const userRouter = createTRPCRouter({
  createUser , updateUser , deleteUser , getAllUser , getUser  , updateUserPassword,
  BlockUser , UnBlockUser,PushUserMoreInformations, getAllEmails
});
