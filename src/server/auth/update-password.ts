import { z } from "zod";
import { publicProcedure } from "../api/trpc";
import bcrypt from "bcryptjs"
import { TRPCError } from "@trpc/server"


export const updateUserPassword = publicProcedure
.input(z.object({ 
  userId : z.string().uuid(),
  newPassword : z.string(),
  password : z.string()
}) )
.mutation( async ({ input , ctx  }) => {

    //verifie user 
    const user = await  ctx.prisma.user.findUniqueOrThrow({
        where : {
            id : input.userId
        }
    })
    if(!user.password) throw new Error("user dont have password")

    const passwordMatches = await bcrypt.compare(input.password, user.password);
    if (!passwordMatches) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: "password is not correct" });
    }

    const hashedPassword: string = await bcrypt.hash(input.newPassword, 10);
      // hash password
      const user2 = await ctx.prisma.user.update({
        data: {
          password : hashedPassword
        },
        where : {
           id : input.userId
        }
  })
  return user2
})