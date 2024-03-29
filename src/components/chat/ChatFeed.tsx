import { useEffect, useState } from 'react'
import ChatInput from './ChatInput'
import Messages from './Messages'
import { useSession } from 'next-auth/react'
import { api } from '~/utils/api'
import toast from 'react-hot-toast'
import { getChatPartnerId } from '~/lib/data-in-cookies'
import type { Message, User } from '@prisma/client'
import ChatHeaderLoading from './ChatHeaderLoading'

import MessagesLoading from './MessagesLoading'
import ChatNotFound from './ChatNotFound'




const ChatFeed =  ({  }) => {
 

  const  session =  useSession()

  const [initialMessages , setInitialMessages] = useState<Message[]>([])

  const [isError , setIsError] = useState<boolean>(false)

  const [chatPartner , setChatPartner] = useState<User>({} as User)

  useEffect(()=> {
    if(getChatPartnerId() === ""){
      setIsError(true)
    }
  
  },[])
  


  const {refetch , isLoading }  = api.chatRouter.get_messages.useQuery({partnerId : getChatPartnerId() },{
    onSuccess : (data) => {

      const sortedArray = data.sort((item1, item2) => item1.timestamp.getTime() - item2.timestamp.getTime())

      setInitialMessages(sortedArray.reverse())
   
    },
    onError : () => {
     toast.error("there is an error fetching the messages")
     setIsError(true)
    }
  })

  const {isLoading : isChatPartnerLoading } = api.chatRouter.get_chat_partner.useQuery({receiverId : getChatPartnerId()} , {
    onSuccess : (user) => {
      if(user){
        setChatPartner(user)
     
      }
      
    },
    onError : () => {
      toast.error("there is an error fetching the chat partner ")
      setIsError(true)
    }
  })




  return (
    <div className='flex-1 w-full md:max-w-[calc(100vw-370px)] md:ml-[370px] bg-white  justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]'>
   
     
      {isError ? <ChatNotFound /> :
      
    
      
      
      
    
       

     !isError  && isLoading? 

      <ChatHeaderLoading />
      :
         !isError && <div className='flex sm:items-center justify-between py-3 h-[50px]   border-b-2 border-gray-200'>
        <div className='relative flex items-center space-x-4 p-4'>
          <div className='relative'>
            <div className='relative w-8 sm:w-8 h-8 sm:h-8'>
              <img
                src={ chatPartner?.image ?  chatPartner?.image : "/assets/avatar.png"}
                alt={`${ "/assets/avatar.png"} profile picture`}
                className='rounded-full'
              />
            
            </div>
          </div>

          <div className='flex flex-col leading-tight'>
            <div className='text-md flex items-center'>
              <span className='text-gray-700 mr-3 font-semibold'>
                {chatPartner?.name ? chatPartner?.name : "chat partner"}
                
              </span>
            </div>

            <span className='text-xs text-gray-600'>
              {chatPartner?.email}
            
              </span>
          </div>
        </div>
      </div>
   }

          {
             !isError  &&
        isChatPartnerLoading || isLoading  ? <MessagesLoading /> : 
        <>
        <Messages
              refetch ={refetch} 
            chatPartner={chatPartner }
            sessionImg={session?.data?.user.image}
            sessionId={session?.data?.user.id || ""}
            initialMessages={initialMessages}
         />
        <ChatInput 
            refetch ={refetch} 
           
            chatPartner={chatPartner } />
        
        </>
      }

     
    </div>
  )
}


export default ChatFeed