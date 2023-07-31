import { cn, toPusherKey, } from '~/lib/utils'
import { type FC, useEffect, useRef, useState } from 'react'
import type { User  , Message, ChatMessageProject} from '@prisma/client'
import { ScrollArea } from '../ui/scroll-area'
import { pusherClient } from '~/lib/pusher'
import AudioPlayer from './AudioPlayer'
import type { Project } from '@prisma/client'
import { getProjectMetaData } from '~/lib/MetaData'


interface MessagesProps {
  initialMessages: ChatMessageProject[]
  project : Project
  sessionId : string

 
}

const MessagesFlow: FC<MessagesProps> = ({
  initialMessages,
  project ,
  sessionId ,

}) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [messages, setMessages] = useState<ChatMessageProject[]>(initialMessages)

 
  const scrollDownRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    pusherClient.subscribe( 
     toPusherKey(`chat:${getProjectMetaData()}`)
    )

    const messageHandler = (message: ChatMessageProject) => {
     audioRef.current?.play()
     message.timestamp = new Date()
     setMessages((prev) => [message, ...prev])
     //to scroll down when a new message hits
     scrollDownRef?.current?.scrollIntoView({ behavior: 'smooth' });
     
    }

    pusherClient.bind('incoming-message', messageHandler)

    return () => {
      pusherClient.unsubscribe(
      toPusherKey(`chat:${getProjectMetaData()}`)
      )
      pusherClient.unbind('incoming-message', messageHandler)
    }
  }, [  project.id , messages ])


  useEffect(() => {
    setMessages(initialMessages)
    scrollDownRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[initialMessages])


  function getFormattedHourAndMinutesFromDate(date: string): string {
    if(!date ) return "00:00"
    const hour = new Date(date).getHours()?.toString()?.padStart(2, '0');
    const minutes = new Date(date).getHours()?.toString()?.padStart(2, '0');
    return `${hour}:${minutes}`;  
  }
  

  return (
    <ScrollArea>
    <AudioPlayer audioRef={audioRef} />
    <div
      id='messages'
      className='flex h-full   flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
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
                    'bg-gradient-to-tr from-blue-500 to-blue-700 text-white': isCurrentUser,
                    'bg-gray-200 text-gray-900': !isCurrentUser,
                    'rounded-br-none':
                      !hasNextMessageFromSameUser && isCurrentUser,
                    'rounded-bl-none':
                      !hasNextMessageFromSameUser && !isCurrentUser,
                  })}>
                  {message.text}{' '}
                  <span className='ml-2 text-xs text-gray-400'>
                    {/* @ts-ignore */}
                   {getFormattedHourAndMinutesFromDate(message?.timestamp )}
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
                  src={ message.senderImage }
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

export default MessagesFlow