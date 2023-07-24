import type { FC } from 'react'
import { AbdullahButton , buttonVariants } from '../used/AbdullahButton'
import { cn } from '~/lib/utils'
import {  Play, Rocket , FolderKanban , GanttChartSquare , Presentation , ListEnd, FileCheck, MessageSquare, Cog, UserCog, BookMarked} from 'lucide-react'
import dynamic from 'next/dynamic';




import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"


const sidebarOptions = [
    {name : "Business case" , path :"/" , icon : <Rocket className='text-blue-500 w-6 h-6' />},
    {name : "Inisiating" , path :"/", icon :<Play className='text-blue-500 w-6 h-6 ' />},
    {name : "Planning" , path :"/", icon : <FolderKanban  className='text-blue-500 h-6 w-6 ' />},
    {name : "Executing" , path :"/", icon : <GanttChartSquare className='text-blue-500 w-6 h-6' />},
    {name : "Controlling" , path :"/", icon : <Presentation className='text-blue-500 w-6 h-6' />},
    {name : "Closing" , path :"/", icon : <ListEnd className='text-blue-500 w-6 h-6 ' />},

    {name : "notes" , path :"/", icon : <FileCheck className='text-blue-500 w-6 h-6 ' />},
    {name : "team settings" , path :"/", icon : <UserCog  className='text-blue-500 w-6 h-6 ' />},
    {name : "settings" , path :"/", icon : <Cog className='text-blue-500 w-6 h-6 '/>},
    
]

type Props = {
    isOpen: boolean;
    
  };
  
//pt-[3.7rem] 
const PhasesSideBar: FC<Props> = ({isOpen})=> {
  return <div className={`w-[70px] z-[999]  shadow-xl border-r fixed top-[50px] left-0 bottom-0    bg-white py-4  flex-col p-4 h-full  items-center gap-y-4 justify-start ${isOpen ? "flex" : "hidden"}`}>
       {sidebarOptions.map(item => (

        <HoverCard>
              <HoverCardTrigger asChild >
                    <AbdullahButton
                           className={cn(buttonVariants({variant :"secondary" , size :"abdullah"}), 
                           "cursor-pointer  ")} >
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

export default PhasesSideBar