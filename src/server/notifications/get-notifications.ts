import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";


export const getUserNotifications  = protectedProcedure

.query(async ({ ctx }) => {

  const {email } = ctx.session.user

  if(!email  ){
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
    
    const notifications = await ctx.prisma.notifications.findUnique({
     where :{
        userId : ctx.session.user.id
     }
    })
   
    return notifications
})