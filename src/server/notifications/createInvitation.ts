import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const create_invitaion  = protectedProcedure
.input(z.object({ 
  OrganizationName: z.string() ,
  targetEmail : z.string(),
  typeRelation : z.string(),
  OrganizationId : z.string().uuid()
}) )
.mutation( async ({ input , ctx }) => {

  const {email , image , id , name } = ctx.session.user

  if(!email || !image || !id || !name ){
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
    
    const invitaion = await ctx.prisma.joinRequest.create({
      data:{
        OrganizationName : input.OrganizationName, 
        OrganizationId : input.OrganizationId,
        senderAvatar :  image , 
        senderEmail : email, 
        senderId :  id, 
        senderName : name, 
        targetEmail  : input.targetEmail, 
        typeRelation : input.typeRelation, 

      }
    })
    return invitaion
})