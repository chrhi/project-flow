import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {v4 as uuidV4} from "uuid"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {  baseModel } from "~/server/model/BaseModel";

export const tasksRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(z.object({ 
       name : z.string(),
       parent_id : z.string(),
       due_date : z.date().optional(),
       start_at : z.date().optional(),
       on_going : z.boolean(),
       assign_to : z.string().array().optional(),
       cost : z.number(),
       project_id : z.string()
     }))
    .mutation(async ({ input }) => {
        const id:string  = uuidV4()
        const {  error } = await baseModel.provider.from('tasks').insert([  {
            name : input.name,
            parent_id : input.parent_id ,
            due_date : input.due_date ,
            start_at : input.start_at ,
            on_going : input.on_going,
            assign_to : input.assign_to || null,
            cost : input.cost ,
            project_id : input.project_id,
            id
        }])
  
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
    }),
    getOneTask: publicProcedure
    .input(z.object({ 
        id : z.string()
     }))
    .query(async ({ input }) => {
        const { data ,  error } = await baseModel.provider.from('tasks').select("*").eq("id" , input.id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
         return {
            name : data[0]?.name as string,
            parent_id : data[0]?.parent_id  as string ,
            due_date : data[0]?.due_date  as string ,
            start_at : data[0]?.start_at   as string,
            on_going : data[0]?.on_going  as string,
            assign_to : data[0]?.assign_to  as string ,
            cost : data[0]?.cost  as string ,
           
         }
    }),
    getAllTasks: publicProcedure
    .input(z.object({ 
        project_id : z.string()
     }))
    .query(async ({ input }) => {
        const { data ,  error } = await baseModel.provider.from('tasks').select("*").eq("project_id" , input.project_id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
         return data
         
    }),
    updateTask: publicProcedure
    .input(z.object({ 
        name : z.string(),
        due_date : z.date(),
        start_at : z.date(),
        on_going : z.boolean(),
        assign_to : z.string().array().optional(),
        cost : z.number().optional(),
        id : z.string()
     }))
    .mutation(async ({ input }) => {
        const {  error } = await baseModel.provider.from('tasks').update([  {
            name : input.name,
            due_date : input.due_date ,
            start_at : input.start_at ,
            on_going : input.on_going,
            assign_to : input.assign_to,
            cost : input.cost ,
          
            
        }]).eq("id" , input.id)
  
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
    }),

    deleteTasks : publicProcedure
             .input(z.object({
                id : z.string()
             }))
             .mutation(async({input}) => {
                const {  error } = await baseModel.provider.from('tasks').delete().eq("id" , input.id)
          
                if(error){
                    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
                 }
             }),
    assignStakholders : publicProcedure
                .input(z.object({
                    id : z.string(),
                    assign_to : z.string().array()
                }))
                .mutation(async ({ input }) => {
                    const {  error } = await baseModel.provider.from('tasks').update([  {
                        assign_to : input.assign_to
                    }]).eq("id" , input.id)
              
                    if(error){
                        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
                     }
                }),
    

});
