import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const create_note = protectedProcedure
  .input(z.object({
    content: z.any(),
    title: z.string(),
    projectId: z.string()
  }))
  .mutation(async ({ input, ctx }) => {
    const { email, id, name } = ctx.session.user;

    if (!email || !id || !name) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "the email or the id or the name is missing is not in the session"
      });
    }

    const note = await ctx.prisma.note.create({
      data: {
        content: input.content,
        title: input.title,
        projectId: input.projectId,
        authorEmail : email , 
        authorId : id , 
        authorName : name
      }
    });
    return note;
  });
