/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projectDetailsTable } from "~/server/model/projectDetails";

export const ProjectDetailsRouter = createTRPCRouter({
        createProjectDetails : publicProcedure 
                    .input(z.object({
                        projectObjectOpportunity : z.string() ,
                       projectDescription : z.string() ,
                       highLevelRequirement : z.string() ,
                      hightLevelRisks : z.string(),
                    project_id : z.string() 

                    }))
                    .mutation(async ({input}) => {
                        await projectDetailsTable.create(input.projectObjectOpportunity , input.projectDescription , input.highLevelRequirement , input.hightLevelRisks , input.project_id).catch(error => { 
                            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                    }),
                    updateProjectDetailsNow : publicProcedure 
                        .input(z.object({
                            projectObjectOpportunity : z.string() ,
                       projectDescription : z.string() ,
                       highLevelRequirement : z.string() ,
                      hightLevelRisks : z.string(),
                    project_id : z.string() 
                        }))
                        .mutation(async ({input}) => {
                            await projectDetailsTable.update(input.projectObjectOpportunity , input.projectDescription , input.highLevelRequirement , input.hightLevelRisks , input.project_id ).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                        }),
        getProjectDetails : publicProcedure
                          .input(z.object({
                          project_id : z.string() 
                          }))
                          .query(async ({input}) =>{
                            const data = await projectDetailsTable.get(input.project_id).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                            return {
                                projectObjectOpportunity : data[0]?.projectObjectOpportunity ,
                                projectDescription : data[0]?.projectDescription ,
                                highLevelRequirement :data[0]?.highLevelRequirement ,
                               hightLevelRisks : data[0]?.hightLevelRisks,
                             project_id : data[0]?.project_id
                            }
                          })

})