import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const send_message  = protectedProcedure
.input(z.object({ 
    receiverId : z.string(),
    text : z.string().max(2000),
    type : z.string().optional(),
    url : z.string().optional()
  }) )
.mutation( async ({ input , ctx }) => {

    const message = await ctx.prisma.message.create({
      data :{
        senderId: ctx.session.user.id,
        receiverId : input.receiverId,
        text: input.text,
        type :input.type || "TEXT", 
        url : input.url || "",
      }
    }).catch(err => {
      throw new TRPCError({code :"INTERNAL_SERVER_ERROR" , message :`faild to send the message and ${err.message}`})
    })

    return message
   
})