import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";


export const getProjectNotes  = protectedProcedure
.input(z.object({
    projectId : z.string()
}))
.query(async ({ input , ctx }) => {

  const {email } = ctx.session.user

  if(!email  ){
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
    
    const notes = await ctx.prisma.note.findMany({
     where :{
       projectId : input.projectId
     }
    })
    return notes
})