import { z } from "zod";
import { protectedProcedure } from "../api/trpc";






export const reduceNotifications  = protectedProcedure
.input(z.object({ 
   
    type : z.string(),
  }) )
.mutation( async ({ input , ctx }) => {

    const joinRequest = await ctx.prisma.notifications.update({
        where :{
            userId : ctx.session.user.id
        },
        data :{
            invites : 0
        }
    })
    
    return joinRequest
})