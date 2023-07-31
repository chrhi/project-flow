import { ScrollArea } from "../ui/scroll-area"
import { api } from "~/utils/api"
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react"
import ChatContactHomePage from "./ChatContactHomePage"
import type { Message } from "@prisma/client"
import ChatContact from "../chat/chat-contact"

export default  function RecentMessages() {


  const [messages , setMessages] = useState<Message[]>([])

  api.chatRouter.get_recent_messages.useQuery( undefined,{
    onSuccess :(data) => {
      setMessages(data)
    },
    onError : (err) => {
      console.log(err)
    }
  })


    return (
      <div className=" w-full lg:w-[39%] h-[400px] bg-white rounded-lg ">
        <div className="w-full h-[60px] flex items-center justify-start p-4">
            <h1 className="text-[#2F3349] text-3xl font-medium">Recent Chats</h1>
        </div>
        <ScrollArea>
            {messages.map((item) => (
             <ChatContactHomePage
              id={item?.senderId}
              image={item.senderImage}
              isUnseenMessages={true}
              lastMessage={item.text}
              name={item.senderName || item.senderEmail}
              key={item.id + item.senderEmail}
             />
            ))}
        </ScrollArea>
      </div>
    )
  }
  
  
