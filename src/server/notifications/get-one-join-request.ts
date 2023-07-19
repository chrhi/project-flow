import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const getJoinRequest  = protectedProcedure
.input(z.object({ 
    id: z.string() ,
  }) )
.query( async ({ input , ctx }) => {

    
    const joinRequest = await ctx.prisma.joinRequest.findFirst({
        where :{
            id : input.id
        }
    })
    
    return joinRequest
})






