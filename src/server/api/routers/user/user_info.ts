import { z } from "zod";
import { supabase } from "~/config/supbase";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const UserRouter_info = createTRPCRouter({
  get_user_info: publicProcedure
    .input(z.object({ id: z.string() }))
    .query( async ({ input }) => {
        const { data ,  error } = await supabase.from('user').select("*").eq("id" , input.id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
         return {
            email : data[0]?.email as string,
            stage : data[0]?.current_stage  as string ,
            name : data[0]?.user_name  as string ,
            last_name : data[0]?.user_last_name   as string,
            city : data[0]?.city  as string,
            phone : data[0]?.phone  as string ,
            role : data[0]?.role  as string ,
            photo : data[0]?.photo  as string ,
         }
    }),
    update_user_info: publicProcedure
    .input(z.object({ 
      id: z.string() ,
      name : z.string() ,
      last_name : z.string() ,
      city : z.string(),
      phone : z.string(),
      photo : z.string()

      }))
    .mutation( async ({ input }) => {
        const { data ,  error } = await supabase.from('user').update([{
      
          user_name : input.name ,
          user_last_name : input.last_name ,
          city :  input.city ,
          phone : input.phone,
          photo : input.photo
        }]).eq("id" , input.id)
        if(error){
            throw new TRPCError({code: 'INTERNAL_SERVER_ERROR',message: error.message,})
         }
         
    }),
});