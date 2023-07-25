import { z } from "zod";
import { protectedProcedure } from "../api/trpc";

export const delete_project = protectedProcedure
  .input(
    z.object({
      project_id: z.string(),
    
    })
  )
  .mutation(async ({ input, ctx }) => {
    const project = await ctx.prisma.project.delete({
      where: {
        id: input.project_id,
      },
    });

    return project;
  });
