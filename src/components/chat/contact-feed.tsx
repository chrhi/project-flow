import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import { getOrganizationId } from '~/lib/data-in-cookies'
import { api } from '~/utils/api'
import { toast } from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

function ContactFeed() {

  const [people , setPeople] = useState<MemberOrg[]>([])

  const session = useSession()
 

  //get the team members to show them in the contact list
  api.userRouter.get_org_members.useQuery({id : getOrganizationId()}, {
    onSuccess : (data) => {
      setPeople(data.filter(item => item.user !== session.data?.user.id))
    }, 
    onError : () => {
      toast.error("failed to get the freinds list")
    }
  })

  return (
    <div className='w-[370px] pt-[50px] fixed top-0 left-0 bottom-0 bg-white h-screen'>
        <ChatHeader  />
        <Tabs defaultValue="account" className="w-[370px] ">
      <TabsList className="grid w-full grid-cols-2 h-[50px] rounded-none">
        <TabsTrigger className='h-full' value="direct">my team</TabsTrigger>
        <TabsTrigger className='h-full' value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <h1>projects</h1>
      </TabsContent>
      <TabsContent value="direct">
         {people.map(item => (
          <div className='w-full h-[60px] px-4 cursor-pointer hover:bg-gray-50  flex items-center justify-start gap-x-4 '>
               <Avatar>
                  <AvatarImage src={item.image || ""} alt="@abdullah" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                  <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                      <h3 className='truncate text-sm text-gray-600 dark:text-white'>{item.email}</h3>
                      <h3 className='truncate text-sm text-gray-600  dark:text-white '>{item.name} </h3>
                  </div>
          </div>
         ))}
       </TabsContent>
    </Tabs>
    </div>
  )
}

export default ContactFeed