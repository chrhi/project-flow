import { ScrollArea } from "../ui/scroll-area"


function UpcommingTasks() {
    return (
      <div className=" w-full lg:w-[58%] h-[400px] bg-white rounded-lg ">
      <div className="w-full h-[60px] flex items-center justify-start p-4">
          <h1 className="text-[#2F3349] text-3xl font-medium">Upcoming Tasks</h1>
      </div>
      <ScrollArea>

      </ScrollArea>
    </div>
    )
  }
  
  
export default UpcommingTasks