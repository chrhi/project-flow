import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";


export const schemaValidators = z.object({ 
 
  organization_id : z.string(),
  tag : z.string(),
  tagColor : z.string(),
  description : z.string(),
  image : z.string(),
  imagetype : z.string(),
  title  : z.string(),
  dueDate : z.date(),
  isOnGoing  : z.boolean(),
  type   : z.string(),
  team : z.string().array()})


export const create_project  = protectedProcedure
.input(schemaValidators)
  .mutation( async ({ input , ctx }) => {


    const selectedTeamMembers = await Promise.all(
      input.team.map( async (id) => {
        const person = await ctx.prisma.user.findFirst({
          where :{
            id 
          }
        })
        return person
      } )
    )

    const project = await ctx.prisma.project.create({
      data :{
        OrganizationId : input.organization_id,
        description : input.description,
        image : input.image,
        imagetype : input.imagetype,
        team : JSON.stringify(selectedTeamMembers),
        title : input.title,
        type : "SIMPLE",
        dueDate : input.dueDate , 
        isOnGoing : input.isOnGoing , 
        tag : input.tag , 
        tagColor : input.tagColor , 

        createdBy : ctx.session.user.id,
        currentPhase :"business case"
      }
    })

    
    return project
})