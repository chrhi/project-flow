import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";





//update tasks 

//remoce tasks 

//store wbd json 

// get wbd json

export const tasksRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(z.object({
        projectId : z.string().uuid(),
       title   : z.string(),
       description : z.string() , 
       startAt : z.date() ,
       endsAt : z.date(),
       cost : z.number() , 
       AssignTo : z.string().array(),
       AlocatedRessources : z.string().array(),
         }))
    .mutation( async ({ input , ctx }) => {

        const AssignToJson = JSON.stringify(input.AssignTo)
        const AlocatedRessourcesJson = JSON.stringify(input.AssignTo)

        await ctx.prisma.tasks.create({
            data :{
                projectId : input.projectId , 
                title : input.title , 
                description : input.description , 
                StartAt : input.startAt , 
                EndsAt : input.endsAt,
                cost : input.cost,
                AssignedTo : AssignToJson, 
                AlocatedRessources : AlocatedRessourcesJson,
                Status : "TODO"
            }
        })
    }),

    getTasks: publicProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ input , ctx }) => {
        const tasks = await  ctx.prisma.tasks.findMany({
            where:{
                projectId : input.projectId
            }
        })
        return tasks
    }),

    updateTask: publicProcedure
    .input(z.object({
       id : z.string().uuid(),
       title   : z.string(),
       description : z.string() , 
       startAt : z.date() ,
       endsAt : z.date(),
       cost : z.number() , 
       AssignTo : z.string().array(),
       Status : z.string(),
       AlocatedRessources : z.string().array(),
      
         }))
    .mutation( async ({ input , ctx }) => {

        const AssignToJson = JSON.stringify(input.AssignTo)
        const AlocatedRessourcesJson = JSON.stringify(input.AssignTo)

        await ctx.prisma.tasks.update({
            data :{
                title : input.title , 
                description : input.description , 
                StartAt : input.startAt , 
                EndsAt : input.endsAt,
                cost : input.cost,
                AssignedTo : AssignToJson, 
                AlocatedRessources : AlocatedRessourcesJson,
                Status : input.Status
            },
            where:{
                id : input.id
            }
        })
    }),

    completeTask : publicProcedure
    .input(z.object({
        id : z.string().uuid(),
       EndedAt : z.date() , 
       RealCost : z.number(),
       Status : z.string(),
         }))
    .mutation( async ({ input , ctx }) => {

 
        await ctx.prisma.tasks.update({
            data :{
             
                EndedAt : input.EndedAt , 
                RealCost : input.RealCost , 
                Status : input.Status
            },
            where:{
                id : input.id
            }
        })
    }),
    
  


});
