import { useState } from 'react'
import ChatInput from './ChatInput'
import Messages from './Messages'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { api } from '~/utils/api'







const ChatFeed =  ({ chatId }: {chatId : string}) => {
 

  const  session =  useSession()

  const [messages , setMessages ] = useState<any[]>([])

  const [chatPartener , setChatPartener ] = useState({} )

  const {refetch , isLoading}  = api.chatRouter.get_messages.useQuery({receiverId : chatId},{
    onSuccess : (data) => {
      setMessages(data )
    },
    onError : () => {
      window.location.reload()
    }
  })

  const {isLoading : isChatPartnerLoading} = api.chatRouter.get_chat_partner.useQuery({receiverId : chatId} , {
    onSuccess : (user) => {
      if(user){
        setChatPartener(user)
      }
      
    },
    onError : () => {
      window.location.reload()
    }
  })

  // get messages 

  // get chat partner 


  return (
    <div className='flex-1 max-w-[calc(100vw-370px)] ml-[370px] bg-white p-4 justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]'>
      <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200'>
        <div className='relative flex items-center space-x-4'>
          <div className='relative'>
            <div className='relative w-8 sm:w-12 h-8 sm:h-12'>
              <Image
                fill
                referrerPolicy='no-referrer'
                src={ "/assets/avatar.png"}
                alt={`${ "/assets/avatar.png"} profile picture`}
                className='rounded-full'
              />
              {/* chatPartner?.name ||
              chatPartner?.image || */}
            </div>
          </div>

          <div className='flex flex-col leading-tight'>
            <div className='text-xl flex items-center'>
              <span className='text-gray-700 mr-3 font-semibold'>
                {/* {chatPartner.name} */}
                {"abdullah"}
              </span>
            </div>

            <span className='text-sm text-gray-600'>
              {/* {chatPartner.email} */}
              {"mahdi.chahri55@gmail.com"}
              </span>
          </div>
        </div>
      </div>

      {
        isChatPartnerLoading || isLoading ? <h1>loading messages...</h1> : 
        <>
        <Messages
            chatId={chatId}
            chatPartner={chatPartener as unknown as User}
            sessionImg={session?.data?.user.image}
            sessionId={session?.data?.user.id || ""}
            initialMessages={messages}
         />
        <ChatInput 
            refetch ={refetch} 
            chatId={chatId} 
            chatPartner={chatPartener as unknown as User} />
        
        </>
      }

     
    </div>
  )
}


export default ChatFeed