import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const delete_org = protectedProcedure
  .input(
    z.object({
      orgId: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
     // we updated the organization of the user so it includes it's name 
   const org = await ctx.prisma.organization.delete({
      where :{
         id : input.orgId
      }
   })

   return org
  });
