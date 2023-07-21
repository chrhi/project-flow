import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const get_messages  = protectedProcedure
.input(z.object({ 
  partnerId : z.string(),
  }) )
.query( async ({ input , ctx }) => {

    const message = await ctx.prisma.message.findMany({
        where :{
          OR :[
            {
                ChatId : `${input.partnerId}-${ctx.session.user.id}`
            },
            {
              ChatId : `${ctx.session.user.id}-${input.partnerId}`
            }
          ]    
        }
    }).catch(err => {
      throw new TRPCError({
        code :"INTERNAL_SERVER_ERROR" ,
        message :`faild to send the message and ${err.message}`
        })
    })

    return message
   
})