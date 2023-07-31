import { ScrollArea } from "../ui/scroll-area"
import { api } from "~/utils/api"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react"

export default  function RecentMessages() {


  const [messages , setMessages] = useState<any>([])

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
        {/* <ScrollArea>
            {messages.map((item: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (
            //    <ChatContact 
            //      id={item.user}
            //      key={item.user}
            //      image={item.image}
            //      isUnseenMessages={true}
            //      lastMessage={"mahdi"}
            //      name={item.name}
            //  />
            // ))}
        </ScrollArea> */}
      </div>
    )
  }
  
  
