import { z } from "zod";
import { protectedProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";




export const getUserOrganization = protectedProcedure
.query( async ({  ctx }) => {

    if(!ctx.session.user.id)  throw new TRPCError({ code: "UNAUTHORIZED" });
    
    const organization = await ctx.prisma.organization.findFirst({
        where :{
            userId : ctx.session.user.id
        }
    })

    return organization
})