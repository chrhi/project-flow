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
  const hashedPassword  : string = await bcrypt?.hash(input?.password, 10).catch(error => {
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: "error on hashing the password",})
  }); // salt round
 await ctx.prisma.user.create({
    data : {
      email : input.email, 
      image : "https://avatars.githubusercontent.com/u/116351398?v=4",
      password : hashedPassword,
      emailVerified : new Date(),
    }
  })


 
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

  if(!user){
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: "user not found",})
  }

  const UserOrganization  = await ctx.prisma.organization.create({
    data :{
      Members : JSON.stringify([{
        image : user?.image,
        email : user?.email,
        name :  input.userName ,
        user :  user?.id ,
        role : "leader",
        }]),
        name : input.OrganizationName ,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/OpenSea_icon.svg/1200px-OpenSea_icon.svg.png",
        Leader : user?.id,
        userId : user?.id
    }
  })


  await ctx.prisma.notifications.create({
    data :{
      userId :  user?.id || ""
    }
  })


  await ctx.prisma.user.update({
    where :{
      email : input.confirmEmail,
    },
    data : {
      emailVerified : new Date() , 
      LastName : input.LastName , 
      UserName : input.userName , 
      selectedOrganizationId :  UserOrganization?.id ,
      name : user?.name || input.FirstName
    }
  })
  
})