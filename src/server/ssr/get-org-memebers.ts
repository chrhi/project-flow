import { prisma } from "~/lib/prisma"

export async function getOrgMembers({id} : {id : string}) {
    const org = await prisma.organization.findFirst({
        where : {
          id : id
        }
      })
     
      const members : MemberOrg[] = JSON.parse(org?.Members as string) as MemberOrg[]
    
      return members
}