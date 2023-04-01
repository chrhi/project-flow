/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MilestonesTable } from "~/server/model/milestones";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const MilestonesRouter = createTRPCRouter({
        createMileStone : publicProcedure 
                    .input(z.object({
                        project_id : z.string(),
                        id : z.string() ,
                        name : z.string(),
                        start_at : z.date(),
                        ends_at : z.date()

                    }))
                    .mutation(async ({input}) => {
                        await MilestonesTable.create(input.name , input.project_id , input.start_at, input.ends_at , input.id).catch(error => { 
                            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                     return {
                        project_id : input.id
                     }
                    }),
     
  getMileStones : publicProcedure 
                        .input(z.object({
                          project_id : z.string()
                         }))
                         .query(async ({input}) => {
                          const data =  await MilestonesTable.get(input.project_id).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                                return data
                         })
                        ,
deleteMileStones : publicProcedure 
                        .input(z.object({
                          id : z.string()
                         }))
                         .mutation(async ({input}) => {
                          const data =  await MilestonesTable.delete(input.id).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                                return data
                         })                       
        

})