import { createUser } from "./create-user";
import { updateUser } from "./update-user";
import { deleteUser } from "./delete-user";
import { getAllUser } from "./get-all-users";
import { getUser } from "./get-user";
import {
  createTRPCRouter,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser , updateUser , deleteUser , getAllUser , getUser
});
