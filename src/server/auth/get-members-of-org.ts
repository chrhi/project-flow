import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";




export const get_org_members = protectedProcedure
.input(z.object({ id: z.string() }) )
.query( async ({ input , ctx }) => {

  const org = await ctx.prisma.organization.findFirst({
    where : {
      id : input.id
    }
  }).catch(error => {
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
  })
  //@ts-ignore
  const members : MemberOrg[] = JSON.parse(org?.Members) as MemberOrg[]

  return members
})