import { protectedProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";




export const getUserOrganization = protectedProcedure
.query( async ({  ctx }) => {

    if(!ctx.session.user.id)  throw new TRPCError({ code: "UNAUTHORIZED" });

    const organizations = await ctx.prisma.organization.findMany()

    const orgs_user_invo_ivedInto : Organization[]= []

   if(organizations && organizations?.length > 0){
    for(let i = 0 ; i < organizations.length ; i++){
            
        const org = organizations[i]
        //@ts-ignore
        const Members : MemberOrg[] = JSON.parse(org.Members) as MemberOrg[]
        const org_id = Members.filter(item => item.user === ctx.session.user.id)

        console.log("name of orgs for" , ctx.session.user.name)

        console.log(org_id)
        
        //if we found any thing we return it 
        if(org_id && org){
            //@ts-ignore
            orgs_user_invo_ivedInto.push(org)
        }
}
   }
    
    const organization = await ctx.prisma.organization.findMany({
        where :{
            userId : ctx.session.user.id
        }
    })


    // if(orgs_user_invo_ivedInto && orgs_user_invo_ivedInto.length > 0){
    //     return [...organization, ...orgs_user_invo_ivedInto]
    // }
    // in here i have to get the json array of each organization and see in the id of the user is in it

    return [...organization, ...orgs_user_invo_ivedInto]
})