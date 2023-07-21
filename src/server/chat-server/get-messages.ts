import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const get_messages  = protectedProcedure
.input(z.object({ 
    receiverId : z.string(),
  }) )
.query( async ({ input , ctx }) => {

    const message = await ctx.prisma.message.findMany({
        where :{
            receiverId : input.receiverId , 
            senderId : ctx.session.user.id
        }
    }).catch(err => {
      throw new TRPCError({
        code :"INTERNAL_SERVER_ERROR" ,
        message :`faild to send the message and ${err.message}`
        })
    })

    return message
   
})