/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projectTable } from "~/server/model/Project";

export const ProjectRouter = createTRPCRouter({
        createProject : publicProcedure 
                    .input(z.object({
                        user_id : z.string(),
                        id : z.string() ,

                    }))
                    .mutation(async ({input}) => {
                        await projectTable.create(input.user_id , input.id , "Démarrage").catch(error => { 
                            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                     return {
                        project_id : input.id
                     }
                    }),
        updateproject : publicProcedure 
                        .input(z.object({
                            stage : z.string(),
                            id : z.string()
                        }))
                        .mutation(async ({input}) => {
                            await projectTable.update( input.id , input.stage).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                        }),
        getProjectStatus : publicProcedure 
                        .input(z.object({
                          user_id : z.string()
                         }))
                         .query(async ({input}) => {
                          const data =  await projectTable.get(input.user_id).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                                return {
                                    project_id : data[0]?.id,
                                    current_phase :  data[0]?.stage
                                }
                         })
        

})