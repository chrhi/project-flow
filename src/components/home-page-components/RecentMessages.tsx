import { ScrollArea } from "../ui/scroll-area"
import { api } from "~/utils/api"
import { useState } from "react"

export default  function RecentMessages() {


  const [messages , setMessages] = useState<any>([])

  


    return (
      <div className=" w-full lg:w-[39%] h-[400px] bg-white rounded-lg ">
        <div className="w-full h-[60px] flex items-center justify-start p-4">
            <h1 className="text-[#2F3349] text-3xl font-medium">Recent Chats</h1>
        </div>
        <ScrollArea>

        </ScrollArea>
      </div>
    )
  }
  
  
