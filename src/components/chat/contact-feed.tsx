import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import ChatContact from './chat-contact'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import type { Project } from '@prisma/client'
import ProjectGroupe from './project-groupe'
import { Search } from 'lucide-react'

type Props ={
  projects : Project[],
  memberOrg : MemberOrg[]

}

function ContactFeed({projects , memberOrg } : Props) {

  const [people , setPeople] = useState<MemberOrg[]>(memberOrg)

  const [myProjects , setMyProjects] = useState<Project[]>(projects)
 

 

  return (
    <div className='w-[0] hidden md:block md:w-[370px] pt-[50px]  fixed top-0 left-0 bottom-0 border-r-gray-500 border-r-[2px] bg-white h-screen'>
        <ChatHeader  />
   
        <Tabs defaultValue="team" className="w-[360px] mx-auto ">
      <TabsList className="grid w-full grid-cols-2 h-[50px] rounded-none">
        <TabsTrigger className='h-full' value="team">My team</TabsTrigger>
        <TabsTrigger className='h-full' value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <div className='w-full  h-[40px] flex border items-center rounded-lg  px-2'>
          <Input 
          placeholder='serach for contact...'
          className='h-[40px] w-[90%] mr-auto border-none ' />
          <Search className="w-6 h-6 text-gray-500" />
        </div>
        {myProjects.map(item => {
         return (
          <ProjectGroupe
            title={item.title}
            description={item.description}
            id={item.id}
            image={item.image}
            imageType={item.imagetype}
            isUnseenMessages={true}
            key={item.id + "project groupe-098765432"}
           />
           )
        })}
      </TabsContent>
      <TabsContent value="team">
       
        <div className='w-full  h-[40px] flex border items-center rounded-lg  px-2'>
          <Input 
          placeholder='serach for contact...'
          className='h-[40px] w-[90%] mr-auto border-none ' />
          <Search className="w-6 h-6 text-gray-500" />
        </div>
          <ScrollArea>
            {
               
               people.map(item => (
                <ChatContact 
                  id={item.user}
                  key={item.user}
                  image={item.image}
                  isUnseenMessages={true}
                  lastMessage={item.email}
                  name={item.name}
                />
             ))
            }
    
        </ScrollArea>
        {/* } */}
       </TabsContent>
    </Tabs>

    </div>
  )
}

export default ContactFeed