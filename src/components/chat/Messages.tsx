import { cn, toPusherKey, } from '~/lib/utils'
import { type FC, useEffect, useRef, useState } from 'react'
import type { User  , Message} from '@prisma/client'
import { ScrollArea } from '../ui/scroll-area'
import { pusherClient } from '~/lib/pusher'
import AudioPlayer from './AudioPlayer'


interface MessagesProps {
  initialMessages: Message[]
  sessionId: string
  sessionImg: string | null | undefined
  chatPartner: User,
  refetch : () => Promise<any>
 
}

const Messages: FC<MessagesProps> = ({
  initialMessages,
  sessionId,
  chatPartner,
  sessionImg,
  refetch
}) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([])

 
  const scrollDownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMessages(initialMessages)
  },[initialMessages])

  
  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`chat:${sessionId}-${chatPartner.id}`)
    )

    const messageHandler = (message: Message) => {
     
      refetch().then(() => {
        console.log("the client has been trigered")
      })
    }

    pusherClient.bind('incoming-message', messageHandler)

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`chat:${sessionId}-${chatPartner.id}`)
      )
      pusherClient.unbind('incoming-message', messageHandler)
    }
  }, [ sessionId , chatPartner.id , messages , refetch])


  


  function getFormattedHourAndMinutesFromDate(date: Date): string {
    if(!date) return "00:00"
    const hour = date?.getHours()?.toString()?.padStart(2, '0');
    const minutes = date?.getMinutes()?.toString()?.padStart(2, '0');
  
    return `${hour}:${minutes}`;
  }
  

  return (
    <ScrollArea>
    <AudioPlayer audioRef={audioRef} />
    <div
      id='messages'
      className='flex h-full flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
      <div ref={scrollDownRef} />
    

    {messages?.map((message, index) => {
        const isCurrentUser = message.senderId === sessionId
    
        const hasNextMessageFromSameUser =
          messages[index - 1]?.senderId === messages[index]?.senderId

        return (
          <div
            className='chat-message'
            key={`${message.id}-${message.timestamp}`}>
            <div
              className={cn('flex items-end', {
                'justify-end': isCurrentUser,
              })}>
              <div
                className={cn(
                  'flex flex-col space-y-2 text-base max-w-xs mx-2',
                  {
                    'order-1 items-end': isCurrentUser,
                    'order-2 items-start': !isCurrentUser,
                  }
                )}>
                <span
                  className={cn('px-4 py-2 rounded-lg inline-block', {
                    'bg-gradient-to-tr from-indigo-500 to-blue-700 text-white': isCurrentUser,
                    'bg-gray-200 text-gray-900': !isCurrentUser,
                    'rounded-br-none':
                      !hasNextMessageFromSameUser && isCurrentUser,
                    'rounded-bl-none':
                      !hasNextMessageFromSameUser && !isCurrentUser,
                  })}>
                  {message.text}{' '}
                  <span className='ml-2 text-xs text-gray-400'>
                   {getFormattedHourAndMinutesFromDate(message?.timestamp)}
                  </span>
                </span>
              </div>

              <div
                className={cn('relative w-6 h-6', {
                  'order-2': isCurrentUser,
                  'order-1': !isCurrentUser,
                  invisible: hasNextMessageFromSameUser,
                })}>
                <img
                
                  src={
                    isCurrentUser ? (sessionImg as string) || "/assets/avatar.png" : chatPartner.image || "/assets/avatar.png"
                  }
                  alt='Profile picture'
                 
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
        )
      })} 

       
    </div>
    </ScrollArea>
  )
}

export default Messages