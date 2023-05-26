import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const mileStoneRouter = createTRPCRouter({
  add_milestone: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
