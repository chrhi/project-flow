import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const create_project  = protectedProcedure
.input(z.object({ 
 
    organization_id : z.string(),
    description : z.string(),
    image : z.string(),
    imagetype : z.string(),
    title  : z.string(),
    type   : z.string(),
    team : z.string().array()}) )
  .mutation( async ({ input , ctx }) => {


    const project = await ctx.prisma.project.create({
      data :{
        OrganizationId : input.organization_id,
        description : input.description,
        image : input.image,
        imagetype : input.imagetype,
        team : JSON.stringify(input.team),
        title : input.title,
        type : "SIMPLE",
      }
    })

    return project
})