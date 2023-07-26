import { useState, type FC } from 'react'
import { AbdullahButton , buttonVariants } from '~/components/used/AbdullahButton'
import { cn } from '~/lib/utils'
import {  Play, Rocket , FolderKanban , GanttChartSquare , Presentation , ListEnd, FileCheck, MessageSquare, Cog, UserCog, BookMarked, Users, ClipboardCheck, StickyNote} from 'lucide-react'





import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import { useRouter } from 'next/router'



const sidebarOptions = [
    {name : "Brief" , path :"/app/simple-project/brief" , icon : <Rocket className={`text-gray-600 w-6 h-6  `} />},
    // {name : "Tasks" , path :"/app/simple-project/tasks", icon :<ClipboardCheck className={`text-gray-600 w-6 h-6  `} />},
    {name : "Notes" , path :"/app/simple-project/notes", icon : <StickyNote className={`text-gray-600 w-6 h-6  `} />},
    {name : "Team" , path :"/app/simple-project/team", icon : <Users className={`text-gray-600 w-6 h-6  `} />}   
]

type Props = {
    isOpen: boolean;
    
  };
  
//pt-[3.7rem] 
const PhasesSideBarSimpleProject: FC<Props> = ({isOpen})=> {


  const router = useRouter()

  const [isLoading , setIsLoading] = useState(false)

  const handleRouting = async (path : string) => {
    setIsLoading(true)
    await router.push(path)
    setIsLoading(false)
  }

  return <div className={`w-[70px] z-[10]  shadow-xl border-r fixed top-[50px] left-0 bottom-0    bg-white py-4  flex-col p-4 h-full  items-center gap-y-4 justify-start ${isOpen ? "flex" : "hidden"}`}>
       {sidebarOptions.map(item => (

        <HoverCard>
              <HoverCardTrigger asChild >
                    <AbdullahButton
                          onClick={async () => await handleRouting(item.path)}
                          disabled={isLoading}
                           className={cn(buttonVariants({variant :"secondary" , size :"abdullah"}), 
                           "cursor-pointer  " ,
                           `${router?.asPath?.split("?")[0]?.split("/").slice(0, 4).join("/") === item.path? "bg-blue-100 " : null}`
                           )} >
                       {item.icon}
                    </AbdullahButton>
                </HoverCardTrigger>
              <HoverCardContent className=' z-[999999] '>
                <div className='bg-black w-fit p-2 rounded-lg shadow-xl  h-full'>
                        <p className='text-white text-xs font-semibold '>  {item.name}</p>
                </div>
              </HoverCardContent>
        </HoverCard>
       
        )
        )}

  </div>
}

export default PhasesSideBarSimpleProject