import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const create_invitation = protectedProcedure
  .input(z.object({
    OrganizationName: z.string(),
    targetEmail: z.string(),
    typeRelation: z.string(),
    OrganizationId: z.string(),
  }))
  .mutation(async ({ input, ctx }) => {
    const { email, image, id, name } = ctx.session.user;

    if (!email || !id || !name) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "The email, id, or name is missing" });
    }

    if (input.typeRelation === "CO_LEADER" || input.typeRelation === "ELDER" || input.typeRelation === "MEMBER") {
      const invitation = await ctx.prisma.joinRequest.create({
        data: {
          OrganizationName: input.OrganizationName,
          OrganizationId: input.OrganizationId,
          senderAvatar: image || "https://cdna.artstation.com/p/assets/images/images/056/671/852/large/nooarth-pilotanimegirl.jpg?1669822674",
          senderEmail: email,
          senderId: id,
          senderName: name,
          targetEmail: input.targetEmail,
          typeRelation: input.typeRelation,
        },
      });

      const target = await ctx.prisma.user.findUnique({
        where: {
          email: input.targetEmail,
        },
      });

      const oldValue = await ctx.prisma.notifications.findFirst({
        where: {
          userId: target?.id,
        },
      });

      await ctx.prisma.notifications.update({
        where: {
          userId: target?.id,
        },
        data: {
          invites: (oldValue?.invites || 0) + 1,
        },
      });

      return invitation;
    }

    throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid role. Please select a valid role to continue" });
  });
