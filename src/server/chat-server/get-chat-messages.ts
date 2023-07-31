import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const get_project_messages  = protectedProcedure
.input(z.object({ 
  projectId : z.string(),
  }) )
.query( async ({ input , ctx }) => {

    const message = await ctx.prisma.chatMessageProject.findMany({
        where :{
         ChatId :`chat:${input.projectId}`
        }
    }).catch(err => {
      throw new TRPCError({
        code :"INTERNAL_SERVER_ERROR" ,
        message :`faild to send the message and ${err.message}`
        })
    })

   

    return message
   
})