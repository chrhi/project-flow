import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { UploadProjectDetails } from "~/server/model/projectDetails";

// This code exports a startupRouter object which is created using the createTRPCRouter function. The router defines a single public procedure called uploadProjectDetails.

// The uploadProjectDetails procedure is defined as a mutation which takes an input object. The input object is expected to have the following properties: title, NeedForOrganization, ProjectRequirements, ProductDescription, ThePojectDoesNotInclude, and PreApprovedResources.

// When uploadProjectDetails is called, it invokes the UploadProjectDetails function with the values of the input object properties as arguments. If an error occurs during the execution of the UploadProjectDetails function, a TRPCError is thrown with the error code INTERNAL_SERVER_ERROR and an error message.

// Overall, it appears that this code is defining a server-side endpoint that allows clients to upload project details. The createTRPCRouter function and publicProcedure indicate that this code is likely using the TRPC library for server-side communication.

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
});