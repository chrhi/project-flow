import { z } from "zod";
import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";





export const accept_join_request  = protectedProcedure
.input(z.object({ 
    id: z.string() ,
    organization_id : z.string(),
    role : z.string()
  }) )
.mutation( async ({ input , ctx }) => {

    
    const joinRequest = await ctx.prisma.joinRequest.delete({
        where :{
            id : input.id
        }
    })

    const organization = await ctx.prisma.organization.findUnique({
        where :{
            id : input.organization_id
        }
    })

   
    const oldArray = JSON.parse(organization?.Members as string) 
    //chech if the user already exists

    const isThereAlready = [...oldArray].find(item => item?.user === ctx.session.user.id )

     if(isThereAlready  !== undefined){
       
        return
    }
 

    const newArray = [...oldArray , 
        {
         image : ctx.session.user.image,
         email : ctx.session.user.email,
         name : ctx.session.user.name,
         user : ctx.session.user.id ,
         role : "member",
         
         }]

    const updatedOrganization = await ctx.prisma.organization.update({
        where :{
            id : input.organization_id
        },
        data :{
            Members : JSON.stringify(newArray)
        }
    })
    // add the memeber to the organization
    
    return updatedOrganization
})