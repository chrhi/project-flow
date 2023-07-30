import { protectedProcedure } from "../api/trpc";
import { TRPCError } from "@trpc/server";
import type { Organization } from "@prisma/client";




export const getUserOrganization = protectedProcedure
.query( async ({  ctx }) => {

    if(!ctx.session.user.id)  throw new TRPCError({ code: "UNAUTHORIZED" });

    const organizations = await ctx.prisma.organization.findMany()

    const orgs_user_invo_ivedInto : Organization[]= []

   if(organizations && organizations?.length > 0){
    for(let i = 0 ; i < organizations.length ; i++){
            
        const org = organizations[i]

        if(!org?.Members) {
            throw new TRPCError({code :"BAD_REQUEST" , message :"there is no members "})
          
        }

        

     
        const Members : MemberOrg[] = JSON.parse(org?.Members as string) as MemberOrg[]
        const org_id = Members.filter(item => item.user === ctx.session.user.id)

        if(org_id[0]?.role === "leader"){
            continue
        }
        
        //if we found any thing we return it 
        if(org_id.length > 0 && org){
            
            orgs_user_invo_ivedInto.push(org)
        }
}
   }
    
    const organization = await ctx.prisma.organization.findMany({
        where :{
            userId : ctx.session.user.id
        }
    })



    return [...organization, ...orgs_user_invo_ivedInto]
})