import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const DocumentsRouter = createTRPCRouter({
  getDocumnets: publicProcedure
    .input(z.object({ projectId: z.string() }))
    .query(({ input , ctx  }) => {
     return "hello world"
    }),
});
