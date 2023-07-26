import { createTRPCRouter } from "../api/trpc";
import { create_note } from "./create-note";
import { delete_note } from "./delete-note";
import { getNoteById } from "./get-note-by-id";
import { getProjectNotes } from "./get-project-notes";
import { update_note } from "./update-note";


export const noteRouter = createTRPCRouter({
    create_note , 
    getProjectNotes , 
    getNoteById , 
    update_note , 
    delete_note
});
