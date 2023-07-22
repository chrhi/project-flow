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
import ChatContact from './chat-contact'
import { Input } from '../ui/input'
import Search from '../icons/search'
import ContactLoading from './contact-loading'
import { ScrollArea } from '../ui/scroll-area'

function ContactFeed() {

  const [people , setPeople] = useState<MemberOrg[]>([])

  const session = useSession()
 

  //get the team members to show them in the contact list
  const {isLoading} = api.userRouter.get_org_members.useQuery({id : getOrganizationId()}, {
    onSuccess : (data) => {
      setPeople(data.filter(item => item.user !== session.data?.user.id))
    }, 
    onError : () => {
      toast.error("failed to get the freinds list")
    }
  })

  return (
    <div className='w-[0] hidden md:block md:w-[370px] pt-[50px]  fixed top-0 left-0 bottom-0 border-r-gray-500 border-r-[2px] bg-white h-screen'>
        <ChatHeader  />
   
        <Tabs defaultValue="team" className="w-[360px] mx-auto ">
      <TabsList className="grid w-full grid-cols-2 h-[50px] rounded-none">
        <TabsTrigger className='h-full' value="team">My team</TabsTrigger>
        <TabsTrigger className='h-full' value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <h1>projects</h1>
      </TabsContent>
      <TabsContent value="team">
       
        <div className='w-full  h-[40px] flex border items-center rounded-lg  px-2'>
          <Input 
          placeholder='serach for contact...'
          className='h-[40px] w-[90%] mr-auto border-none ' />
          <Search className="w-6 h-6 text-gray-500" />
        </div>
        {
          isLoading ? <ContactLoading /> :  
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
        }
       </TabsContent>
    </Tabs>

    </div>
  )
}

export default ContactFeed