import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { UploadProjectDetails , gatProjectDetails , updateProjectDetails } from "~/server/model/startup/projectDetails";
import { UploadConsiderationsProject , gatConsiderationsProject , updateConsiderationsProject} from "~/server/model/startup/ConsiderationsProject";



export const startupRouter = createTRPCRouter({
  uploadProjectDetails: publicProcedure
    .input(z.object({
         id: z.string(),
         title: z.string(),
         NeedForOrganization: z.string(),
         ProjectRequirements: z.string(),
         ProductDescription: z.string(),
         ThePojectDoesNotInclude: z.string(),
         PreApprovedResources: z.string()
        
     }))
    .mutation( async  ({ input }) => {
     
      await UploadProjectDetails(input.id ,input.title , input.NeedForOrganization , input.PreApprovedResources , input.ProductDescription , input.ProjectRequirements , input.ThePojectDoesNotInclude)
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     
    }),
    updateProjectDetails: publicProcedure
    .input(z.object({
     id: z.string(),
         title: z.string(),
         NeedForOrganization: z.string(),
         ProjectRequirements: z.string(),
         ProductDescription: z.string(),
         ThePojectDoesNotInclude: z.string(),
         PreApprovedResources: z.string()
        
     }))
    .mutation( async  ({ input }) => {
     
      await updateProjectDetails( input.id ,input.title , input.NeedForOrganization , input.PreApprovedResources , input.ProductDescription , input.ProjectRequirements , input.ThePojectDoesNotInclude , )
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     
    }),
    updateConsiderationsProject: publicProcedure
    .input(z.object({
     id: z.string(),
     HighLevelRisks: z.string(),
     AcceptanceCriteria: z.string(),
     Hypotheses: z.string(),
     Constraints: z.string(), 
        
     }))
    .mutation( async  ({ input }) => {
     
     await updateConsiderationsProject(input.id  ,input.HighLevelRisks , input.AcceptanceCriteria , input.Hypotheses , input.Constraints )
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     
    }),

    gatProjectDetails :  publicProcedure
    .input(z.object({id: z.string()}))
    .query(async ({input})=> {
     const data =  await gatProjectDetails(input.id)
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     return {data}
    }),
    UploadConsiderationsProject :  publicProcedure
    .input(z.object({
     id: z.string(),
         HighLevelRisks: z.string(),
         AcceptanceCriteria: z.string(),
         Hypotheses: z.string(),
         Constraints: z.string(),    
     }))
    .mutation( async  ({ input }) => {
     
      await UploadConsiderationsProject(input.id  ,input.HighLevelRisks , input.AcceptanceCriteria , input.Hypotheses , input.Constraints )
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     
    }),
    gatConsiderationsProject  :  publicProcedure
    .input(z.object({id: z.string()}))
    .query(async ({ input })=> {
      const data =  await gatConsiderationsProject(input.id)
       .catch(error =>{ 
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
     })
      return {data}
     }),
});