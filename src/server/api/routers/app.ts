import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { pdfStatus } from "~/server/model/application";

export const statusRoute = createTRPCRouter({
  pdfStatus: publicProcedure

    .query(async () => {

        const data = await pdfStatus ().catch(error => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
        })

      return {
       data
      };
    }),
});
