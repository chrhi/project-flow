import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {v4 as uuidV4} from "uuid"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {  baseModel } from "~/server/model/BaseModel";

export const scopeRouter = createTRPCRouter({
  createProjectScope: publicProcedure
    .input(z.object({ 
        ScopeStatementDevelopment : z.string(),
        WBSStructure : z.string() ,
        WBSDictionary : z.string() ,
        ScopeBaselineMaintenance : z.string() ,
        ScopeChange : z.string() ,
        DeliverableAcceptance : z.string() ,
        ScopeAndRequirementsIntegration : z.string(),
        project_id : z.string()
     }))
    .mutation(async ({ input }) => {
        const id:string  = uuidV4()
        const {  error } = await baseModel.provider.from('scope').insert([  {
            ScopeStatementDevelopment : input.ScopeStatementDevelopment,
            WBSStructure : input.WBSStructure ,
            WBSDictionary : input.WBSDictionary ,
            ScopeBaselineMaintenance : input.ScopeBaselineMaintenance ,
            ScopeChange : input.ScopeChange ,
            DeliverableAcceptance : input.DeliverableAcceptance ,
            ScopeAndRequirementsIntegration : input.ScopeAndRequirementsIntegration ,
            project_id : input.project_id,
            id
        }])
  
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
    }),
    getProjectScope: publicProcedure
    .input(z.object({ 
        project_id : z.string()
     }))
    .query(async ({ input }) => {
        const { data ,  error } = await baseModel.provider.from('scope').select("*").eq("project_id" , input.project_id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
         return {
            ScopeStatementDevelopment : data[0]?.ScopeStatementDevelopment as string,
            WBSStructure : data[0]?.WBSStructure as string,
            WBSDictionary : data[0]?.WBSDictionary as string,
            ScopeBaselineMaintenance : data[0]?.ScopeBaselineMaintenance as string,
            ScopeChange : data[0]?.ScopeChange as string,
            DeliverableAcceptance : data[0]?.DeliverableAcceptance as string ,
            ScopeAndRequirementsIntegration : data[0]?.ScopeAndRequirementsIntegration as string ,
            project_id : data[0]?.project_id as string
         }
    }),
    updateProjectScope: publicProcedure
    .input(z.object({ 
        ScopeStatementDevelopment : z.string(),
        WBSStructure : z.string() ,
        WBSDictionary : z.string() ,
        ScopeBaselineMaintenance : z.string() ,
        ScopeChange : z.string() ,
        DeliverableAcceptance : z.string() ,
        ScopeAndRequirementsIntegration : z.string(),
        project_id : z.string()
     }))
    .mutation(async ({ input }) => {
        const {  error } = await baseModel.provider.from('scope').update([  {
            ScopeStatementDevelopment : input.ScopeStatementDevelopment,
            WBSStructure : input.WBSStructure ,
            WBSDictionary : input.WBSDictionary ,
            ScopeBaselineMaintenance : input.ScopeBaselineMaintenance ,
            ScopeChange : input.ScopeChange ,
            DeliverableAcceptance : input.DeliverableAcceptance ,
            ScopeAndRequirementsIntegration : input.ScopeAndRequirementsIntegration 
            
        }]).eq("project_id" , input.project_id)
  
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
    }),
});
