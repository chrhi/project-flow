import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";

export const create_org = protectedProcedure
  .input(
    z.object({
      category: z.string(),
      name: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
     // we updated the organization of the user so it includes it's name 
   const org = await ctx.prisma.organization.create({
   
    data :{
      name : input.name,
      Leader : ctx.session.user?.id , 
      Category : input.category , 
      userId : ctx.session.user?.id, 
      image : "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png",
      Members : JSON.stringify([{
        image : ctx.session.user?.image,
        email : ctx.session.user?.email,
        name :  ctx.session.user?.userName ,
        user :  ctx.session.user?.id ,
        role : "leader",
        
        }])
    }
  })
  });
