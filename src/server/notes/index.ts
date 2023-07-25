import { createTRPCRouter } from "../api/trpc";
import { create_note } from "./create-note";
import { getNoteById } from "./get-note-by-id";
import { getProjectNotes } from "./get-project-notes";


export const noteRouter = createTRPCRouter({
    create_note , 
    getProjectNotes , 
    getNoteById
});
