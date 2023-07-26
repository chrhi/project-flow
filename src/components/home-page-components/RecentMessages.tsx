import { ScrollArea } from "../ui/scroll-area"

export default  function RecentMessages() {
    return (
      <div className=" w-full lg:w-[39%] h-[400px] bg-white rounded-lg ">
        <div className="w-full h-[60px] flex items-center justify-start p-4">
            <h1 className="text-gray-900 text-3xl font-medium">Recent Chats</h1>
        </div>
        <ScrollArea>

        </ScrollArea>
      </div>
    )
  }
  
  
