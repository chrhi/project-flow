import { z } from "zod";
import { getProjectCharter } from "~/pdfs/integrations/paject-charter";
import { generatePdf } from "~/lib/puppeteer";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const integrationsRouter = createTRPCRouter({
  ProjectCharter: publicProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ input , ctx }) => {
     
        const buffer = await  generatePdf(getProjectCharter())

       const {data , error} = await  ctx.supabase.storage.from("documents").upload("NewprojectCharter88.pdf" , buffer , { contentType: 'application/pdf' } )

        if(error){
            throw new Error("failed to laod the document")
        }
      
    }),
});
