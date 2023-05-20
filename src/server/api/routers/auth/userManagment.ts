/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import bcrypt from "bcrypt"
import {v4 as uuidV4} from "uuid"
import { userTable } from "~/server/model/User";
import {sign } from "jsonwebtoken"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";


export const userManagment = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ email: z.string() , password : z.string() }))
    .mutation( async ({ input }) => {

        // //check if the user exist
        // const result = await userTable.get(input.email).catch(error => { 
        //     throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
        // if(result.length < 0){
        //     throw new TRPCError({code: 'BAD_REQUEST', message :"user exists"})
        // }
         //hash password
       const hashedPassword  : string = await bcrypt?.hash(input.password, 10); // salt round
       // create a user id 
       const id:string  = uuidV4()
       await  userTable.create(id , input.email , hashedPassword ).catch(error => {
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
        }) 
   }),

   login : publicProcedure.input(z.object({ email: z.string() , password : z.string() }))
   .mutation(async ({input}) => {
     //check if the user exist
     const result = await userTable.get(input.email).catch(error => { 
        throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
    if(result.length < 0){
        throw new TRPCError({code: 'BAD_REQUEST', message :"user exists"})
    }
      //verefy password
    bcrypt.compare(input.password, result[0]?.password, (err:Error | undefined , data:any) => {
        //if error than throw error
        if (err)  {throw new TRPCError({code: 'UNAUTHORIZED',message: "error in bcrypt",})}
            
    })
  
   const jwt = sign({
    id : result[0]?.id  , 
    email :  result[0]?.email ,

   }, process.env.JWT_SECRET_KEY_SUPABASE!)
    return {
      id : result[0]?.id as string   ,
      email : result[0]?.email as string  ,
      photo : result[0]?.photo as string   ,
      name : result[0]?.user_name as string  ,
      last_name : result[0]?.user_last_name as string  ,
       jwt,
        }
   })

   
});
