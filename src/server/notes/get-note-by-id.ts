import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";


export const getNoteById  = protectedProcedure
.input(z.object({
    noteId : z.string()
}))
.query(async ({ input , ctx }) => {

  const {email } = ctx.session.user

  if(!email  ){
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
    
    const note = await ctx.prisma.note.findUnique({
     where :{
      id : input.noteId
     }
    })
    return note
})