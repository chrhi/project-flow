import React from 'react'
import { Input } from '../ui/input'
import { AbdullahButton , buttonVariants } from '../used/AbdullahButton'
import { cn } from '~/lib/utils'
import { Heart, Send, SmilePlus } from 'lucide-react'


function ChatInput() {
  return (
    <div className='w-[calc(100%-400px)]  shadow-lg rounded-lg flex justify-center gap-x-8 items-center  fixed bottom-[10px] right-0  h-[50px]'>
        <Input  className='w-[80%] max-w-[700px] ' placeholder='start typing now' />
        <div className='w-[15%] flex items-center gap-x-4 justify-start'>
             <AbdullahButton className={cn(buttonVariants({size :"sm" , variant :"secondary"}) , 
                "rounded-lg"
               )}>
                   
                   <Heart className='w-4 h-4 text-red-500 ' />
            </AbdullahButton>
            <AbdullahButton className={cn(buttonVariants({size :"sm" , variant :"secondary"}) , 
            "rounded-lg"
            )}>
             <SmilePlus  className='w-4 h-4 text-yellow-500'/>
            </AbdullahButton>
            <AbdullahButton className={cn(buttonVariants({size :"sm"}) , 
            "rounded-lg"
            )}>
                <Send className='w-4 h-4 text-white'/> 
            </AbdullahButton>
        </div>
    </div>
  )
}

export default ChatInput