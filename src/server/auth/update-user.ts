import { z } from "zod";
import { publicProcedure } from "../api/trpc";




export const updateUser = publicProcedure
.input(z.object({ text: z.string() }) )
.query(({ input }) => {
  return {
    greeting: `Hello ${input.text}`,
  };
})