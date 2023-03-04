import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const startupRouter = createTRPCRouter({
  firstForm: publicProcedure
    .input(z.object({
         title: z.string(),
         Description: z.string(),
         ObjectifSduProjet: z.string(),
         exigencEdeHautNiveau: z.string(),
         exigenceApprobationDeProjet: z.string(),
         Budget: z.number(),
        chefProjetName:z.string(),
        chefProjetEmail:z.string(),
        chefProjetPhone:z.string(),
     }))
    .mutation(({ input }) => {
        console.log(`this is in the server from trpc rout ${input.Description}`)
      return {
        greeting: `Hello from the server this is  ${input.title}`,
        something: `Hello from the server this is  ${input.Description}`,
        somethingelse: `Hello from the server this is  ${input.exigenceApprobationDeProjet}`,
      };
    }),
});