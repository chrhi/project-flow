import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { UploadProjectDetails } from "~/server/model/projectDetails";
import { UploadConsiderationsProject } from "~/server/model/ConsiderationsProject";



export const startupRouter = createTRPCRouter({
  uploadProjectDetails: publicProcedure
    .input(z.object({
         title: z.string(),
         NeedForOrganization: z.string(),
         ProjectRequirements: z.string(),
         ProductDescription: z.string(),
         ThePojectDoesNotInclude: z.string(),
         PreApprovedResources: z.string()
        
     }))
    .mutation( async  ({ input }) => {
     
      await UploadProjectDetails(input.title , input.NeedForOrganization , input.PreApprovedResources , input.ProductDescription , input.ProjectRequirements , input.ThePojectDoesNotInclude)
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     
    }),
    UploadConsiderationsProject :  publicProcedure
    .input(z.object({
         HighLevelRisks: z.string(),
         AcceptanceCriteria: z.string(),
         Hypotheses: z.string(),
         Constraints: z.string(),    
     }))
    .mutation( async  ({ input }) => {
     
      await UploadConsiderationsProject(input.HighLevelRisks , input.AcceptanceCriteria , input.Hypotheses , input.Constraints )
      .catch(error =>{ 
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
     
    }),
});