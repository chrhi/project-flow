import { z } from "zod";
import { publicProcedure } from "../api/trpc";




export const getAllUser = publicProcedure
.input(z.object({ text: z.string() }) )
.query(({ input }) => {
  return {
    greeting: `Hello ${input.text}`,
  };
})