import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const leave_organization = protectedProcedure
  .input(
    z.object({ 
      organization_id: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const organization = await ctx.prisma.organization.findUnique({
      where: {
        id: input.organization_id,
      },
    });

    //@ts-ignore
    const oldArray = JSON.parse(organization?.Members) ;

    const newArray = oldArray.filter((item: { user: string; }) => item.user !== ctx.session.user.id);

    const updatedOrganization = await ctx.prisma.organization.update({
      where: {
        id: input.organization_id,
      },
      data: {
        Members: JSON.stringify(newArray),
      },
    });
    // add the member to the organization

    return updatedOrganization;
  });