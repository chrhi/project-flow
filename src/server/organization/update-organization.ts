import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";


const updateValidator = z.object({
    organization_id: z.string(),
    
    description : z.string(),
    name : z.string(),
    category : z.string()
    })


export const updateOrganization = protectedProcedure
.input(updateValidator)
.mutation( async ({ input ,  ctx }) => {

    if(!ctx.session.user.id)  throw new TRPCError({ code: "UNAUTHORIZED" });

    const org = await ctx.prisma.organization.update({
        where :{
            id : input.organization_id
        },
        data :{
          
            description : input.description,
            name : input.name,
            Category : input.category
        }
    }).catch (err => {
        throw new TRPCError({code :"NOT_FOUND" , message :"the provided id does not have an organization"})
    })

    return {
     
        org
    }

})