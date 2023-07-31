import type { ChatMessageProject, Project } from '@prisma/client'
import MessagesFlow from './MessagesFlow'
import type { Session } from 'next-auth'
import ProjectChatInput from './project-chat-input'
import { api } from '~/utils/api'
import { getChatPartnerId } from '~/lib/data-in-cookies'
import { useState } from 'react'
import { FlowImage } from '../used/flow-image'
import { getProjectMetaData } from '~/lib/MetaData'
import toast from 'react-hot-toast'


type Props = {
  project : Project,
  isOnProjectChatPage? : boolean
  session : Session
}


const ChatFlowFeed =  ({project ,  session , isOnProjectChatPage=false} : Props) => {

  const [messages , setMessages] = useState<ChatMessageProject[]>([])

  const {isLoading : inisialMessagesLoading} =
                  api.chatRouter.get_project_messages.useQuery({projectId : getProjectMetaData()},{
                       onSuccess : (data) => {
                      
                                if(!data) return
                                setMessages(data)
                               
                         },
                         onError : (error) => {
                            toast.error(error.message)
                         }
    })

  return (
    <div className={`flex-1  ${isOnProjectChatPage ? "md:max-w-[calc(100vw-370px)] md:ml-[370px]" : "w-full"}   pb-4  justify-between flex flex-col h-[calc(100vh-3rem)]`}>
      <div className='flex sm:items-center justify-between py-3 h-[60px]   border-b-2 border-gray-200'>
        <div className='relative flex items-center space-x-4 p-4'>

          {
            isOnProjectChatPage ?
            <div className='w-full flex h-full items-center justify-start gap-x-4'>
                  <FlowImage small image={ project?.image} type={project?.imagetype} />
                  <p className='text-lg text-gray-500 font-medium'>{project?.title}</p>
            </div>
            :
            <div className='flex flex-col leading-tight'>
               <div className='text-md flex items-center'>
                  <span className='text-gray-700 mr-3 font-semibold'>
                    Chat 
                  </span>
               </div>
               <span className='text-xs text-gray-600'>
                  {session?.user?.email}
               </span>
            </div>
            } 
            </div>
      </div>
      <div className='w-full h-fit'>
      <MessagesFlow
             
             project={project}
             sessionId={session?.user?.id || ""}
             initialMessages={messages}
        />
        <ProjectChatInput />
      </div>
       
    </div>
  )
}


export default ChatFlowFeed