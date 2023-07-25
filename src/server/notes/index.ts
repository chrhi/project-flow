import { createTRPCRouter } from "../api/trpc";
import { create_note } from "./create-note";


export const noteRouter = createTRPCRouter({
    create_note
});
