
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "~/lib/prisma";

type CreateContextOptions = Record<string, never>;


const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {
    prisma
  };
};


export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return createInnerTRPCContext({});
};


import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});


export const createTRPCRouter = t.router;


export const publicProcedure = t.procedure;
