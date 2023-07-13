import { z } from "zod";
import { publicProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt"



export const createUser = publicProcedure
.input(z.object({ 
  email: z.string() ,
  password : z.string()
    }) )
.mutation( async({ input  , ctx}) => {
  // hanle validate user input --if doblicated 
 const user =  await ctx.prisma.user.findUnique({
    where : {
      email : input.email
    }
  }).catch(error => {
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
  })
  if(user?.email === input.email) {
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: "user already exists",})
  }
  //handle hassing the password
  const hashedPassword  : string = await bcrypt?.hash(input.password, 10); // salt round
  const createdUser = await ctx.prisma.user.create({
    data : {
      email : input.email , 
      image : "",
      password : hashedPassword,
      emailVerified : new Date() ,
    }
  })

  const organization = await ctx.prisma.organization.create({
    data :{
      userId : createdUser.id
    }
  })
  //now i have to be able to create an acount in this level here
})


export const PushUserMoreInformations = publicProcedure
.input(z.object({ 
  confirmEmail : z.string().email() ,
  FirstName: z.string(),
  LastName : z.string(),
  OrganizationName : z.string(),
  userName : z.string() ,
  invitationCode : z.string()
    }) )
.mutation( async({ input  , ctx}) => {
  // hanle validate user input --if doblicated 
 const user =  await ctx.prisma.user.findUnique({
    where : {
      email : input.confirmEmail
    }
  }).catch(error => {
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
  })
  // after we found the user we update it's informations
  await ctx.prisma.user.update({
    where :{
      email : input.confirmEmail,
    },
    data : {
      emailVerified : new Date() , 
      LastName : input.LastName , 
      UserName : input.userName , 
      name : user?.name || input.FirstName
    }
  })
  // we found the organization 
  const UserOrganization = await ctx.prisma.organization.findFirst({
    where :{
      userId : user?.id
    }
  })
  // we updated the organization of the user so it includes it's name 
   await ctx.prisma.organization.update({
    where:{
      id : UserOrganization?.id
    },
    data :{
      name : input.OrganizationName
    }
  })
  
})