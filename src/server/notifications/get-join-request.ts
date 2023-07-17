import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const getJoinRequestsOfUser  = protectedProcedure

.query( async ({ input , ctx }) => {

  const {email } = ctx.session.user

  if(!email  ){
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
    
    const joinRequests = await ctx.prisma.joinRequest.findMany({
     where :{
        targetEmail : email
     }
    })
    return joinRequests
})