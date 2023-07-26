import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const update_note = protectedProcedure
  .input(z.object({
    content: z.any(),
    title: z.string(),
    noteId: z.string()
  }))
  .mutation(async ({ input, ctx }) => {
    const { email, id, name } = ctx.session.user;

    if (!email || !id || !name) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "the email or the id or the name is missing is not in the session"
      });
    }

    const note = await ctx.prisma.note.update({
      data: {
        content: input.content,
        title: input.title,
      },
      where :{
        id : input.noteId
      }
    });
    return note;
  });
