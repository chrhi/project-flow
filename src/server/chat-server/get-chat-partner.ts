import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const get_chat_partner  = protectedProcedure
.input(z.object({ 
    receiverId : z.string(),
  }) )
.query( async ({ input , ctx }) => {

    const user = await ctx.prisma.user.findUnique({
      where :{
        id : input.receiverId
      }
    })

    return user
   
})