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
    return "hello world"
    }),

  // Define get_project procedure
  get_project: publicProcedure
    .input(z.object({
      user_id: z.string()
    }))
    .query(async ({ input, ctx }) => {
      // Find the first project matching the user ID using Prisma
      return "hello world"
    }),

  // Define delete_project procedure
  delete_project: publicProcedure
    .input(z.object({
      project_id: z.string()
    }))
    .mutation(async ({ input, ctx }) => {
      // Delete a project with the given project ID using Prisma
      return "hello world"
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
      return "hello world"
    }),
    setProjectBreakDown : publicProcedure
    .input(z.object({
      project_id: z.string(),
      projectWorkBreakDown : z.any()
    }))
    .mutation(async ({ input, ctx }) => {
      return "hello world"
    }),

});
