import { z } from "zod";
import { protectedProcedure } from "../api/trpc";


export const getProjectOfOrg  = protectedProcedure

.input(z.object({ 
    org_id: z.string() ,
  }) )

.query(async ({ input , ctx }) => {

    const projects = await ctx.prisma.project.findMany({
     where :{
        OrganizationId : input.org_id
     }
    })
    return projects
})