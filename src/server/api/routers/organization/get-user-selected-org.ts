import { protectedProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";




export const getUserSelectedOrg = protectedProcedure
.query( async ({  ctx }) => {

    if(!ctx.session.user.id)  throw new TRPCError({ code: "UNAUTHORIZED" });

    const user = await ctx.prisma.user.findFirst({
        where :{
            id : ctx.session.user.id
        }
    })

    const userOrg = user?.selectedOrganizationId as string

    if(!userOrg) throw new TRPCError({code :"INTERNAL_SERVER_ERROR", message :"the user has no selected organization"})
    
    const organization = await ctx.prisma.organization.findFirst({
        where :{
            id : userOrg
        }
    })

    return organization

})