  /* eslint-disable */
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import bcrypt from "bcrypt"
import {v4 as uuidV4} from "uuid"
import { userTable } from "~/server/model/User";
import { supabase } from "~/config/supbase";


export const InvitationRouter = createTRPCRouter({


    createteamMember: publicProcedure
    .input(z.object({ email: z.string() , password : z.string() , code : z.string() }))
    .mutation( async ({ input }) => {

        //check if the user exist
        const result = await userTable.get(input.email).catch(error => { 
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})})
        if(result.length < 0){
            throw new TRPCError({code: 'BAD_REQUEST', message :"user exists"})
        }
         //hash password
       const hashedPassword  : string = await bcrypt?.hash(input.password, 10); // salt round
       // create a user id 
       const id:string  = uuidV4()
       await  userTable.createTeamMember(id , input.email , hashedPassword  , input.code).catch(error => {
          throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error,})
        }) 
        await supabase.from("team_members").insert([{
            id ,
            project_manager : input.code
        }])
   }),

   getTeamMbers : publicProcedure
   .input(z.object({ id : z.string() }))
   .query( async ({ input }) => {
    console.log(input.id)
   //get all the team members from the tab=ble thier id 
   const {data , error : error1} = await  supabase.from("user").select("*").eq("folowing" , input.id)
   if(error1){
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error1.message,})
   }
 
   return data
   }),
});
