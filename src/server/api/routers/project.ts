import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Create TRPC router for project
export const projectRouter = createTRPCRouter({

  // Define create_project procedure
  create_project: publicProcedure
    .input(z.object({
      user_id: z.string(),
      title: z.string(),
      startAt: z.date(),
      endsAt: z.date()
    }))
    .mutation(async ({ input, ctx }) => {
      // Create a new project using Prisma
      await ctx.prisma.project.create({
        data: {
          userId: input.user_id,
          title: input.title,
          startAt: input.startAt,
          endsAt: input.endsAt
        }
      }).catch(err => { throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: err,}) })
      
    }),

  // Define get_project procedure
  get_project: publicProcedure
    .input(z.object({
      user_id: z.string()
    }))
    .query(async ({ input, ctx }) => {
      // Find the first project matching the user ID using Prisma
      const project = await ctx.prisma.project.findFirst({
        where: {
          userId: input.user_id,
        }
      });
      return project;
    }),

  // Define delete_project procedure
  delete_project: publicProcedure
    .input(z.object({
      project_id: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      // Delete a project with the given project ID using Prisma
      await ctx.prisma.project.delete({
        where: {
          id: input.project_id,
        }
      });
    }),

  // Define update_project procedure
  update_project: publicProcedure
    .input(z.object({
      project_id: z.string(),
      title: z.string(),
      startAt: z.string(),
      endsAt: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      // Update a project with the given project ID using Prisma
      await ctx.prisma.project.update({
        data: {
          title: input.title,
          startAt: input.startAt,
          endsAt: input.endsAt
        },
        where: {
          id: input.project_id
        }
      });
    }),
});
