import { z } from "zod";
import { protectedProcedure } from "../api/trpc";


export const getProjectById  = protectedProcedure

.input(z.object({ 
    id: z.string() ,
  }) )

.query(async ({ input , ctx }) => {

    const project = await ctx.prisma.project.findFirst({
     where :{
        id : input.id
     }
    })
    return project
})