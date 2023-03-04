import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { create_flow } from "~/server/model/test";

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
    .mutation(async ({ input }) => {
        console.log(`this is in the server from trpc rout ${input.Description}`)
     await create_flow("ce130c77-182c-4c79-a023-ddcc3c7e263e" ,input.title , input.Description,true , input.Description ,"Thu Feb 16 2023","Thu Feb 16 2023",["171ca249-ff5e-4617-a0d1-13fd3273893e"])
      return {
        greeting: `Hello from the server this is  ${input.title}`,
        something: `Hello from the server this is  ${input.Description}`,
        somethingelse: `Hello from the server this is  ${input.exigenceApprobationDeProjet}`,
      };
    }),
});