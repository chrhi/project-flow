import React from 'react'
import ChatInput from './ChatInput'

function ChatFeed() {
  return (
    <div className=' relative  w-[calc(100%-370px)] ml-[370px] border-l-[2px] border-l-black min-h-[600px] bg-white '>
        <h1>messages feed</h1>

        <ChatInput />
    </div>
  )
}

export default ChatFeed