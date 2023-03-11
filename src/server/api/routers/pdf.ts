

import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createPDFS } from "~/server/controller/createPDFS";

export const pdfRouter = createTRPCRouter({
  createPdfFiles: publicProcedure.mutation(async ()=> {
    await createPDFS().catch(error => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
  })
   
});
