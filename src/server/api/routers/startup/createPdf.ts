/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { ProjectCharter } from "~/utils/pdfTemplates/project_charter";
import { generatePdf } from "~/server/util/generatePDF";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { storage } from "~/server/model/bucket/fileStorage";
import { documentTable } from "~/server/model/Document";
import { get_publicUrl } from "~/utils/pdf/getPublicUrl";


export const CreatePdf = createTRPCRouter({
        buildProjectCharter : publicProcedure 
                    .input(z.object({
                       project_id : z.string()
                    }))
                    .mutation(async ({input}) => {
                        const template : string = await  ProjectCharter({project_id : input.project_id}).catch(error => { 
                            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                       const buffer = await generatePdf(template)
                    
                       await storage.updloadDocumant({name : "charter" , project_id : input.project_id , buffer }).catch(error => { 
                        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
                        const id = 1234567890
                        await documentTable.create("charter" , true , get_publicUrl(`${input.project_id}/charter.pdf`) , input.project_id , id )
                    }),
        buildProjectCharterAgain : publicProcedure 
        .input(z.object({
           project_id : z.string()
        }))
        .mutation(async ({input}) => {

            await storage.renoveFile({name : "charter" , project_id : input.project_id  }).catch(error => { 
                throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})

           
            const id = 1234567890
            await documentTable.delete(  id )
        }),
       
        

})