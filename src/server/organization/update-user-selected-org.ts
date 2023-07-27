import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";
import { prisma } from "~/lib/prisma";




export const updateUserSelectedOrg = protectedProcedure
.input(z.object({
     selected_organization_id: z.string()
     }))
.mutation( async ({ input ,  ctx }) => {

    if(!ctx.session.user.id)  throw new TRPCError({ code: "UNAUTHORIZED" });

    const org = await ctx.prisma.organization.findUniqueOrThrow({
        where :{
            id : input.selected_organization_id
        }
    }).catch (err => {
        throw new TRPCError({code :"NOT_FOUND" , message :"the provided id does not have an organization"})
    })

    if(!org) return

    const updated_user = await prisma.user.update({
        data :{
            selectedOrganizationId : input.selected_organization_id,
            OrganizationName : org.name
        },
        where :{
            id : ctx.session.user.id
        }
    }).catch (err => {
        throw new TRPCError({code :"INTERNAL_SERVER_ERROR" , message :"some thing went wrong while updating the user"})
    })



    return {
        user : updated_user ,
        org
    }

})