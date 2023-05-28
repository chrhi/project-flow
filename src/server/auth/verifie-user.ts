import { TRPCError } from "@trpc/server"
import bcrypt from "bcrypt"
import {sign } from "jsonwebtoken"
import { z } from "zod";
import { publicProcedure } from "../api/trpc";




export const verifyUser = publicProcedure
.input(z.object({ email: z.string() , password : z.string() }) )
.mutation(async ({ input  , ctx}) => {
   //get the user from prisma

   const user = await ctx.prisma.user.findFirstOrThrow({
    where:{
      email : input.email
    }
  }).catch(error => {
    throw new Error(error)
  })
  if(!user.password) throw new Error("user dont have password")
  // see if user password is currect
  bcrypt.compare(input.password, user?.password, (err:Error | undefined , res:any) => {
    //if error than throw error
    if (res)  {
      throw new TRPCError({code: 'UNAUTHORIZED',message: "password is not currect",})
      return 
    }    
  })
  const jwt = sign({
    id : user?.id  , 
    email :  user?.email ,
   }, process.env.JWT_SECRET_KEY_SUPABASE!)

  return {...user , jwt} 
 
})


