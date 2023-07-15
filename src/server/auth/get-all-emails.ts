import { z } from "zod";
import { publicProcedure } from "../api/trpc";




export const getAllEmails = publicProcedure
.input(z.object({ email : z.string() }) )
.query( async ({ input , ctx }) => {
  const user = await ctx.prisma.user.findMany({})

  const emailList = user.map(item => item.email)

  const filteredEmailList = emailList.filter(item => item !== input.email)
  return filteredEmailList
})