import { z } from "zod";
import {  protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";
import { pusherServer } from "~/lib/pusher";
import { toPusherKey } from "~/lib/utils";





export const send_message  = protectedProcedure
.input(z.object({ 
    partnerId : z.string() ,
    receiverId : z.string(),
    text : z.string().max(2500),
    type : z.string().optional(),
    url : z.string().optional()
  }) )
.mutation( async ({ input , ctx }) => {

//toPusherKey(`chat:${input.partnerId}-${ctx?.session?.user.id}`)   

  
    const message = await ctx.prisma.message.create({
      data :{
        senderId: ctx?.session?.user.id || "",
        receiverId : input.receiverId,
        ChatId : `${ctx?.session?.user.id}-${input.partnerId}`,
        text: input.text,
        type :input.type || "TEXT", 
        url : input.url || "",
      }
    }).catch(err => {
      throw new TRPCError({code :"INTERNAL_SERVER_ERROR" , message :`faild to send the message and ${err.message}`})
    })
    
    

    await pusherServer.trigger( toPusherKey(`chat:${input.partnerId}`), 'incoming-message', message).catch(err => {
      throw new TRPCError({code :"INTERNAL_SERVER_ERROR" , message :`faild to send the message pucher error and ${err.message}`})
    })
  



     

     
    
   

   

    return message
   
})