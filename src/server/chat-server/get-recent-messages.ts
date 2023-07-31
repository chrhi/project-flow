import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const get_recent_messages  = protectedProcedure

.query( async ({ input , ctx }) => {

    const message = await ctx.prisma.chatMessageProject.findMany({
        where :{
            senderId : ctx.session.user.id
        }
    }).catch(err => {
      throw new TRPCError({
        code :"INTERNAL_SERVER_ERROR" ,
        message :`faild to send the message and ${err.message}`
        })
    })

    const projectMessages = await ctx.prisma.message.findMany({
        where :{
            senderId : ctx.session.user.id
        }
    })

    const myArray = [...message, ...projectMessages].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

   

    return myArray.slice(0, 7);
   
})