import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const get_recent_messages  = protectedProcedure

.query( async ({ input , ctx }) => {

  

    const message = await ctx.prisma.message.findMany({
        where :{
            senderId : ctx.session.user.id
        }
    })

    const myArray = [...message].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

   

    return myArray.slice(0, 7);
   
})