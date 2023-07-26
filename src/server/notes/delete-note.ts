import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const delete_note = protectedProcedure
  .input(z.object({
    noteId: z.any(),
  }))
  .mutation(async ({ input, ctx }) => {
    const { email, id, name } = ctx.session.user;

    if (!email || !id || !name) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "the email or the id or the name is missing is not in the session"
      });
    }

    const note = await ctx.prisma.note.delete({
     where :{
        id : input.noteId
     }
    });
    return note;
  });
