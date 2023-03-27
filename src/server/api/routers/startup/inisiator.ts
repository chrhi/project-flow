/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { projectStartupTable } from "~/server/model/ProjectStartup";

export const inisiatorRouter = createTRPCRouter({
  createProkectDetails: publicProcedure
    .input(z.object({ 
        project_id : z.string(),
        
        title :  z.string(),
        sponsor : z.string() , 
        projectManager : z.string() , 
        client : z.string() , 
        dateToStart :  z.date() ,
        dateToEnd :  z.date() , 
        projectManagerAuthority : z.string() , 
        staffDecision :  z.string(), 
        conflitManagment :  z.string() , 
        regionalDirector :  z.string() , 
        estimatedBudget :  z.number()

     }))
    .mutation(async ({ input }) => {
     
        await projectStartupTable.create(
            input.project_id ,
            input.title ,
            input.sponsor  , 
            input.projectManager  , 
            input.client  , 
            input.dateToStart  ,
            input.dateToEnd  , 
            input.projectManagerAuthority  , 
            input.staffDecision  , 
            input.conflitManagment  , 
            input.regionalDirector  , 
            input.estimatedBudget  
        ).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
  
     }),
 updateProkectDetails: publicProcedure
     .input(z.object({ 
         project_id : z.string(),
         
         title :  z.string(),
         sponsor : z.string() , 
         projectManager : z.string() , 
         client : z.string() , 
         dateToStart :  z.date() ,
         dateToEnd :  z.date() , 
         projectManagerAuthority : z.string() , 
         staffDecision :  z.string(), 
         conflitManagment :  z.string() , 
         regionalDirector :  z.string() , 
         estimatedBudget :  z.number()
 
      }))
     .mutation(async ({ input }) => {
      
         await projectStartupTable.update(
             input.project_id ,
             input.title ,
             input.sponsor  , 
             input.projectManager  , 
             input.client  , 
             input.dateToStart  ,
             input.dateToEnd  , 
             input.projectManagerAuthority  , 
             input.staffDecision  , 
             input.conflitManagment  , 
             input.regionalDirector  , 
             input.estimatedBudget  
         ).catch(error => { 
             throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
   
      }),

getprojectStartUp : publicProcedure .input(z.object({project_id : z.string()}))
     .query(async ({input}) => {
         const data = await projectStartupTable.get(input.project_id).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
            return {
         project_id  : data[0]?.project_id  ,
         title : data[0]?.title ,
         sponsor : data[0]?.sponsor , 
         projectManager : data[0]?.projectManager , 
         client : data[0]?.client , 
         dateToStart :  data[0]?.dateToStart ,
         dateToEnd : data[0]?.dateToEnd, 
         projectManagerAuthority : data[0]?.projectManagerAuthority , 
         staffDecision :  data[0]?.staffDecision, 
         conflitManagment : data[0]?.conflitManagment , 
         regionalDirector :  data[0]?.regionalDirector , 
         estimatedBudget :  data[0]?.estimatedBudget
            }
})



})
