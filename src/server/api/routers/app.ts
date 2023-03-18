import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { pdfStatus, uploadProjectStatus } from "~/server/model/application";
import {z} from "zod"
import { hasProjectStarted } from "~/server/model/application";

export const statusRoute = createTRPCRouter({
  pdfStatus: publicProcedure
    .input(z.object({id : z.string()}))
    .query(async ({input}) => {

        const data = await pdfStatus (input.id).catch(error => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
        })

      return {
        has_pdf_exist : data?.has_pdf_exist as boolean
      };
    }),
  makeProjectStatus : publicProcedure 
  .input(z.object({id : z.string()}))
  .mutation(async ({input}) => {
    await uploadProjectStatus(input.id).catch(error => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
})
  }),
  getProjectStatus :  publicProcedure 
  .input(z.object({id : z.string()}))
  .query(async({input}) => {
   const data =  await hasProjectStarted(input.id).catch(error => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
   })
   return{
    has_project_started : data[0]?.has_the_project_started as boolean,
    current_stage : data[0]?.current_stage as string
   }
  })
});
