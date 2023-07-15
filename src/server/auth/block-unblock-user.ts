import { z } from "zod";
import { publicProcedure } from "../api/trpc";




export const BlockUser = publicProcedure
.input(z.object({ ID: z.string() }) )
.mutation( async ({ input , ctx }) => {
  return "hello worlds"
})

export const UnBlockUser = publicProcedure
.input(z.object({ ID: z.string() }) )
.mutation( async ({ input , ctx }) => {
  return "hi there"
})