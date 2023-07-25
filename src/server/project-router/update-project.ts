import { z } from "zod";
import { protectedProcedure } from "../api/trpc";

export const update_project = protectedProcedure
  .input(
    z.object({
      project_id: z.string(),
      description: z.string(),
      image: z.string(),
      imagetype: z.string(),
      title: z.string(),
      type: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const project = await ctx.prisma.project.update({
      data: {
        description: input.description,
        image: input.image,
        imagetype: input.imagetype,
        title: input.title,
        type: "SIMPLE",
        createdBy: ctx.session.user.id,
        currentPhase: "business case",
      },
      where: {
        id: input.project_id,
      },
    });

    return project;
  });
