import { z } from "zod";
import { getProjectCharter } from "~/pdfs/integrations/paject-charter";
import { generatePdf } from "~/lib/puppeteer";
import {v4 as uuid} from "uuid"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const integrationsRouter = createTRPCRouter({
  ProjectCharter: publicProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ input , ctx }) => {
     
        const buffer = await  generatePdf(await getProjectCharter({projectId : input.projectId}))


        const fileName = uuid()

     

       const {data , error} = await  ctx.supabase.storage.from("documents").upload(`${input.projectId}/${fileName}.pdf` , buffer , { contentType: 'application/pdf' } )

          await ctx.prisma.document.create({
            data :{
             path : `${input.projectId}/${fileName}.pdf`,
             status : "build" , 
             name : "project charter",
             url : ""
            }
        })

        if(error){
            throw new Error("failed to laod the document")
        }
      
    }),
});
