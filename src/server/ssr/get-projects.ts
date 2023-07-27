import { prisma } from "~/lib/prisma"

export async function getProjects({org_id } : {org_id : string}) {
    const projects = await prisma.project.findMany({
        where :{
            OrganizationId : org_id
        }
    })
    return projects
}