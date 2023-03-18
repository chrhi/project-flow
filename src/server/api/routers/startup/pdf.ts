import {z} from "zod"
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createPDFS } from "~/server/controller/createPDFS";

export const pdfRouter = createTRPCRouter({
  createPdfFiles: publicProcedure
  .input(z.object({id : z.string()}))
  .mutation(async ({input})=> {
    await createPDFS(input.id).catch(error => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
    })
  })
   
});
