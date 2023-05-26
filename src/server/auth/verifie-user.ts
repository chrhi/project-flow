import { TRPCError } from "@trpc/server"
import { prisma } from "../db"
import bcrypt from "bcrypt"




export const verifieUser =  async ({email , password} :{email : string , password : string}) => {
  //get the user from prisma

  const user = await prisma.user.findFirstOrThrow({
    where:{
      email 
    }
  }).catch(error => {
    throw new Error(error)
  })
  if(!user.password) throw new Error("user dont have password")
  // see if user password is currect
  bcrypt.compare(password, user?.password, (err:Error | undefined , data:any) => {
    //if error than throw error
    if (err)  {throw new TRPCError({code: 'UNAUTHORIZED',message: "password is not currect",})}    
  })

  return user 

}