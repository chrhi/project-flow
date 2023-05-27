import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const riskRouter = createTRPCRouter({
  riskAdd : publicProcedure
    .input(z.object({ 
      project_id: z.string().uuid(),
      name : z.string(),
      description : z.string(),
      solutions : z.string(),
      levelOfDanger : z.string()
     }))
    .mutation( async({ input  , ctx }) => {

      await ctx.prisma.risk.create({
        data:{
            projectId : input.project_id,
            name : input.name , 
            description : input.description,
            solutions : input.solutions ,
            levelOfDanger : input.levelOfDanger
        }
      })
    }),
    getRisks : publicProcedure
    .input(z.object({ 
      projectId: z.string().uuid(),
     
     }))
    .query( async({ input  , ctx }) => {

      const resources =  await ctx.prisma.risk.findMany({
        where:{
            projectId : input.projectId,  
        }
      })
    return resources
    }),
});
