import { z } from "zod";
import { protectedProcedure } from "../api/trpc";






export const rejectJoinRequest  = protectedProcedure
.input(z.object({ 
    id: z.string() ,
  }) )
.mutation( async ({ input , ctx }) => {

    
    const joinRequest = await ctx.prisma.joinRequest.delete({
        where :{
            id : input.id
        }
    })
    
    return joinRequest
})