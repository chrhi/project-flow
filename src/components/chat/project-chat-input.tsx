import { type FC, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import { api } from '~/utils/api'
import { cn } from '~/lib/utils'
import { SendHorizonal, SmilePlus } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Picker from '@emoji-mart/react'
import { Data } from 'emoji-mart'
import { getProjectMetaData } from '~/lib/MetaData'
import toast from 'react-hot-toast'



const ProjectChatInput: FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [input, setInput] = useState<string>('')

  const mutation = api.chatRouter.send_chat_message.useMutation({
    onSuccess : async (data) => {
      setInput("")
    },
    onError : async (err) => {
    toast.error("faild to send the message")
  
    }
  })

  const sendMessage = async () => {
    if(!input) return
    mutation.mutate({
      projectId : getProjectMetaData(),
      text : input , 
      type : "text", 
      url :"https://images5.alphacoders.com/131/1316292.jpeg",
      receiverId : ""
    })
  }

  const setEmojee = (emojee : string) => {
    setInput(prev => prev + emojee)
  }

  return (
    <div className='border-t border-gray-200 px-4 pt-4 mb-2 sm:mb-0'>

      

      <div className='relative items-center flex-1 py-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-sky-100'>
        <TextareaAutosize
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              sendMessage()
            }
          }}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`send message...`}
          className='block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-md sm:leading-6'
        />

      

        <div className='absolute right-0 bottom-0  items-center  gap-x-2 flex justify-between pb-1 pl-3 pr-2'>
          <div className='flex-shrin-0'>
         
        <Popover >
           <PopoverTrigger asChild>
               <AbdullahButton
                   type='button'
                   className={cn(buttonVariants({size :"sm" , variant :"secondary"}))}
                   >
                     <SmilePlus className="w-4 h-4" />
                </AbdullahButton>
          </PopoverTrigger>
          <PopoverContent className='bg-white border-none   z-999'>
              <Picker
               className="!border-none"
               theme={"light"}
               data={Data}
               onEmojiSelect={(emojee: any) => setEmojee(emojee?.native)} 
              />
          </PopoverContent>
       </Popover>
   
           </div>
          <div className='flex-shrin-0'>
            <AbdullahButton
               disabled={input.length === 0}
               isLoading={mutation.isLoading} 
               onClick={sendMessage}
               type='submit'
               className={cn(buttonVariants({size :"sm" }) , "border-none")}
               >
              { !mutation.isLoading && "Send"  }<SendHorizonal className="w-4 h-4 text-white ml-2" />
            </AbdullahButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectChatInput