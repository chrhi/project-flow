/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { documentTable } from "~/server/model/Document";

export const inisiatorRouter = createTRPCRouter({
createNewDocument: publicProcedure
    .input(z.object({ 
        name : z.string() ,
        status : z.boolean(),
        public_url :  z.string() ,
        project_id :  z.string() ,
        id :  z.string()

     }))
    .mutation(async ({ input }) => {
     
        await documentTable.create(
          input.name , 
          input.status ,
          input.public_url ,
          input.project_id , 
          input.id 
        ).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
  
}),
 updateDocument: publicProcedure
     .input(z.object({ 
        name : z.string() ,
        status : z.boolean(),
        public_url :  z.string() ,
       
        id :  z.string()
        
 
      }))
     .mutation(async ({ input }) => {
      
         await documentTable.update(
             input.name,
             input.status ,
             input.public_url ,
             
             input.id
         ).catch(error => { 
             throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
   
}),

getDocuments : publicProcedure .input(z.object({project_id : z.string()}))
     .query(async ({input}) => {
         const data = await documentTable.get(input.project_id).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
            return {
     
         name : data[0]?.name ,
         status : data[0]?.status,
         public_url :  data[0]?.public_url,
         project_id :  data[0]?.project_id ,
         id : data[0]?.id
            }
}),

deleteDocument : publicProcedure .input(z.object({id : z.string()}))
.mutation(async ({input}) => {
   await documentTable.delete(input.id).catch(error => { 
        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
})



})