import { type FC, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import TextareaAutosize from 'react-textarea-autosize'
import { AbdullahButton } from '../used/AbdullahButton'
import { api } from '~/utils/api'

interface ChatInputProps {
  chatPartner: User
  chatId: string,
  refetch : () => Promise<any>
}

const ChatInput: FC<ChatInputProps> = ({ chatPartner, chatId , refetch }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [input, setInput] = useState<string>('')

  const mutation = api.chatRouter.send_message.useMutation({
    onSuccess :(data) => {
      toast.success(data?.text)
      refetch()
    },
    onError : (err) => {
      toast.error(err?.message)
    }
  })

  const sendMessage = async () => {
    if(!input) return
    mutation.mutate({
      text : input , 
      type : "text", 
      url :"https://images5.alphacoders.com/131/1316292.jpeg",
      receiverId : ""
    })
  }

  return (
    <div className='border-t border-gray-200 px-4 pt-4 mb-2 sm:mb-0'>
      <div className='relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600'>
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
          placeholder={`Message ${chatPartner?.firstName}`}
          className='block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6'
        />

        <div
          onClick={() => textareaRef.current?.focus()}
          className='py-2'
          aria-hidden='true'>
          <div className='py-px'>
            <div className='h-9' />
          </div>
        </div>

        <div className='absolute right-0 bottom-0 flex justify-between py-2 pl-3 pr-2'>
          <div className='flex-shrin-0'>
            <AbdullahButton isLoading={mutation.isLoading} onClick={sendMessage} type='submit'>
              Post
            </AbdullahButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInput