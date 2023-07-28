import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";


export const getOrgById  = protectedProcedure
.input(z.object({
    orgId : z.string()
}))
.query(async ({ input , ctx }) => {

  const {email } = ctx.session.user

  if(!email  ){
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
    
    const org = await ctx.prisma.organization.findUnique({
     where :{
      id : input.orgId
     }
    })
    return org
})