import type { ChatMessageProject, Project } from '@prisma/client'
import MessagesFlow from './MessagesFlow'
import type { Session } from 'next-auth'
import ProjectChatInput from './project-chat-input'


type Props = {
  project : Project,
  initialMessages : ChatMessageProject[],
  session : Session
}

const ChatFlowFeed =  ({project , initialMessages , session} : Props) => {
  return (
    <div className='flex-1 w-full  bg-white pb-4  justify-between flex flex-col h-full max-h-[calc(100vh-3rem)]'>
      <div className='flex sm:items-center justify-between py-3 h-[60px]   border-b-2 border-gray-200'>
        <div className='relative flex items-center space-x-4 p-4'> 
          <div className='flex flex-col leading-tight'>
            <div className='text-md flex items-center'>
              <span className='text-gray-700 mr-3 font-semibold'>
                Chat 
              </span>
            </div>
            <span className='text-xs text-gray-600'>
              {session.user.email}
            </span>
          </div>
        </div>
      </div>
        <MessagesFlow
             
              project={project}
              sessionId={session?.user.id || ""}
              initialMessages={initialMessages}
         />
         <ProjectChatInput />
    </div>
  )
}


export default ChatFlowFeed