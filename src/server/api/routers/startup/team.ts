/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { teamTable } from "~/server/model/team";

export const teamRouter = createTRPCRouter({
  updateteaMumber: publicProcedure
    .input(z.object({ 
        name : z.string(),
        id : z.string() ,
        email : z.string(),
        phone : z.string(),
        address :  z.string(),
        note :  z.string(),
        skills  :  z.string() ,
        availability :  z.string() ,
        performancehistory  :  z.string() ,
        tasks :  z.string(),
        meet : z.string(),

     }))
    .mutation(async ({ input }) => {
     
   await teamTable.update( input.name , input.id , input.email , input.phone , input.address , input.note , input.skills , input.availability, [input.performancehistory] , [input.tasks] ,[input.meet]).catch(error => { 
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
}),

createteamMumber : publicProcedure .input(z.object({
    name : z.string(),
    id : z.string(),
    email : z.string(),
    phone :z.string(),
    address : z.string(),
    note : z.string(),
    skills  :z.string(),
    availability : z.string(),
    performancehistory  : z.string(),
    tasks :z.string(),
    meet : z.string(),
    project_id :z.string(),
}))
                    .mutation(async ({input}) => {
                            await teamTable.create(input.name , input.id , input.email , input.phone , input.address , input.note , input.skills , input.availability, [input.performancehistory] , [input.tasks] ,[input.meet], input.project_id).catch(error => { 
                                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
}),

 getOnlyOneTeamMumber: publicProcedure 
 .input(z.object({id : z.string()}))
 .query (async ({input}) => {
    const data = await teamTable.getOne({id : input.id}).catch(error => { 
        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})


        return{
            name : data[0]?.name ,
            
    id :data[0]?.id,
    email : data[0]?.email,
    phone :data[0]?.phone,
    address : data[0]?.address,
    note :data[0]?.note,
    skills  :data[0]?.skills,
    availability : data[0]?.availability,
    performancehistory  : data[0]?.performancehistory,
    tasks :data[0]?.tasks,
    meet :data[0]?.meet,
    project_id :data[0]?.project_id,
        }
 }),
 getAllTeamMumbers : publicProcedure 
 .input(z.object({project_id : z.string()}))
 .query(async ({input}) => {
    const data = await teamTable.get(input.project_id).catch(error => { 
        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
    return data
 })


})
