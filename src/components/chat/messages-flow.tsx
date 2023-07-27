import { useEffect, useState } from 'react'
import ChatInput from './ChatInput'
import { useSession } from 'next-auth/react'
import { api } from '~/utils/api'
import toast from 'react-hot-toast'
import { getChatPartnerId } from '~/lib/data-in-cookies'
import type { Message, User } from '@prisma/client'
import ChatHeaderLoading from './ChatHeaderLoading'
import MessagesLoading from './MessagesLoading'
import MessagesFlow from './MessagesFlow'




const ChatFlowFeed =  () => {
 

  const  session =  useSession()

  const [initialMessages , setInitialMessages] = useState<Message[]>([])

  const [chatPartner , setChatPartner] = useState<User>({} as User)

  





  const {refetch , isLoading}  = api.chatRouter.get_messages.useQuery({partnerId : getChatPartnerId() },{
    onSuccess : (data) => {

      const sortedArray = data.sort((item1, item2) => item1.timestamp.getTime() - item2.timestamp.getTime())

      setInitialMessages(sortedArray.reverse())
   
    },
    onError : () => {
     toast.error("there is an error fetching the messages")
    }
  })

  const {isLoading : isChatPartnerLoading} = api.chatRouter.get_chat_partner.useQuery({receiverId : getChatPartnerId()} , {
    onSuccess : (user) => {
      if(user){
        setChatPartner(user)
     
      }
      
    },
    onError : () => {
      toast.error("there is an error fetching the chat partner ")
    }
  })




  return (
    <div className='flex-1 w-full  bg-white pb-4  justify-between flex flex-col h-full max-h-[calc(100vh-3rem)]'>
      {isLoading? 
      <ChatHeaderLoading />
      :
      <div className='flex sm:items-center justify-between py-3 h-[60px]   border-b-2 border-gray-200'>
        <div className='relative flex items-center space-x-4 p-4'>
         

          <div className='flex flex-col leading-tight'>
            <div className='text-md flex items-center'>
              <span className='text-gray-700 mr-3 font-semibold'>
                Chat 
              </span>
            </div>
            <span className='text-xs text-gray-600'>
              {"abdullah ,"}    {"mahdi "}
            </span>
          </div>
        </div>
      </div>
     }
      

      {
         
         isChatPartnerLoading || isLoading  ? <MessagesLoading /> : 
        <MessagesFlow
              refetch ={refetch} 
              chatPartner={chatPartner }
              sessionImg={session?.data?.user.image}
              sessionId={session?.data?.user.id || ""}
              initialMessages={initialMessages}
         />
      }
        <ChatInput 
            refetch ={refetch} 
           
            chatPartner={chatPartner } />

     
    </div>
  )
}


export default ChatFlowFeed