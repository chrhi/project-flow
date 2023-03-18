import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {z} from "zod"
import { gatProjectDetails } from "~/server/model/startup/projectDetails";
import { gatConsiderationsProject } from "~/server/model/startup/ConsiderationsProject";




export const CharterRouter = createTRPCRouter({
  getProjectCharterInfo: publicProcedure
  .input(z.object({ id : z.string()}))
  .query(async ({input})=> {
   const projectDetails =  await gatProjectDetails(input.id).catch(error => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
  })
//    const ConsiderationsProject=  await gatConsiderationsProject(input.id).catch(error => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
//   })
  return {
    titre : projectDetails[0]?.titre as string ,
    NeedForOrganization : projectDetails[0]?.NeedForOrganization as string,
    ProjectRequirements : projectDetails[0]?.ProjectRequirements as string,
    ProductDescription : projectDetails[0]?.ProductDescription as string ,
    ThePojectDoesNotInclude : projectDetails[0]?.ThePojectDoesNotInclude as string ,
    PreApprovedResources : projectDetails[0]?.PreApprovedResources as string,
  }
  
  })
   
});
