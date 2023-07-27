import { prisma } from "~/lib/prisma"

export async function getProjectById({id} : {id : string | undefined }) {
    const project = await prisma.project.findFirst({
        where :{
            id : id || ""
        }
    })
    return project
}