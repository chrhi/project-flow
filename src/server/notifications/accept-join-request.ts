import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const rejectJoinRequest  = protectedProcedure
.input(z.object({ 
    id: z.string() ,
  }) )
.query( async ({ input , ctx }) => {

    
    const joinRequest = await ctx.prisma.joinRequest.delete({
        where :{
            id : input.id
        }
    })

    // add the memeber to the organization
    
    return joinRequest
})