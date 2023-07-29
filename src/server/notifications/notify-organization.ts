import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const create_invitaion  = protectedProcedure
.input(z.object({ 
  OrganizationName: z.string() ,
  targetEmail : z.string(),
  typeRelation : z.string(),
  OrganizationId : z.string()
}) )
.mutation( async ({ input , ctx }) => {

  const {email , image , id , name } = ctx.session.user

  if(!email  || !id || !name ){
    throw new TRPCError({ code: "UNAUTHORIZED" , message :"the email or the id or the name is messing"});
  }
    
    const invitaion = await ctx.prisma.joinRequest.create({
      data:{
        OrganizationName : input.OrganizationName, 
        OrganizationId : input.OrganizationId,
        senderAvatar :  image || "https://cdna.artstation.com/p/assets/images/images/056/671/852/large/nooarth-pilotanimegirl.jpg?1669822674" , 
        senderEmail : email, 
        senderId :  id, 
        senderName : name, 
        targetEmail  : input.targetEmail, 
        typeRelation : input.typeRelation || "TeamMember", 

      }
    })
    return invitaion
})