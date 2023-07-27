import { prisma } from "~/lib/prisma"

export async function getProjectInisialMessages({id} : {id : string | undefined})  {
    const messages = await prisma.chatMessageProject.findMany({
        where : {
          projectId : id || ""
        }
      }) 
     
   
    
      return messages
}