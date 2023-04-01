import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {v4 as uuidV4} from "uuid"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {  baseModel } from "~/server/model/BaseModel";

export const MettingRouter = createTRPCRouter({
  createMetting: publicProcedure
    .input(z.object({ 
        STAKEHOLDER : z.string().array(),
        INFORMATION : z.string() ,
        METHOD : z.string() ,
        "TIMING OR FREQUENCY" : z.date() ,
        SENDER : z.string() ,
        
        project_id : z.string()
     }))
    .mutation(async ({ input }) => {
        const id:string  = uuidV4()
        const {  error } = await baseModel.provider.from('meetings').insert([  {
            STAKEHOLDER : input.STAKEHOLDER,
            INFORMATION : input.INFORMATION,
            METHOD : input.METHOD ,
            "TIMING OR FREQUENCY" : input["TIMING OR FREQUENCY"],
            SENDER : input.SENDER ,
            project_id : input.project_id,
            id
        }])
  
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
    }),
    getAllMettings: publicProcedure 
    .input(z.object({ 
        project_id : z.string()
     }))
    .query(async ({ input }) => {
        const { data ,  error } = await baseModel.provider.from('meetings').select("*").eq("project_id" , input.project_id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
         return data
        
    }),
    deleteAMetting : publicProcedure 
    .input(z.object({ 
        id : z.string()
     }))
    .mutation(async ({ input }) => {
        const {   error } = await baseModel.provider.from('meetings').delete().eq("id" , input.id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
       
        
    }),
   
});
