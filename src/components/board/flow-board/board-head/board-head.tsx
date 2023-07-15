import type { FC } from 'react'
import LayoutButton from './Tabs'
import { AbdullahButton , buttonVariants} from '~/components/used/AbdullahButton'
import { Plus } from 'lucide-react'
import { cn } from '~/lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { useRouter } from 'next/router'

interface boardHeadAbdullahProps {
  setFlows : () => void
}

const Boardhead: FC<boardHeadAbdullahProps> = ({setFlows}) => {

  const router = useRouter()



  return <div className='w-full h-[70px] p-6 sticky flex justify-between px-4 top-[50px] '>
    <div className='w-[100px] h-full flex items-center justify-center'>
      <h1 className='text-2xl font-semibold text-gray-900'>Projects</h1>
    </div>
    <div className='w-[50%] flex gap-x-4 justify-end items-center h-full '>
      <LayoutButton />
     
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <AbdullahButton className={cn(buttonVariants({variant :"secondary" }))}>
                Sort
            </AbdullahButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem >new ones</DropdownMenuItem>
            <DropdownMenuItem >old ones</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <AbdullahButton className={cn(buttonVariants({variant :"secondary" }))}>
                  Filter
             </AbdullahButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem >completed</DropdownMenuItem>
            <DropdownMenuItem >on going</DropdownMenuItem>
            <DropdownMenuItem >not started yet</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      <AbdullahButton 
      onClick={async () => await router.push("/app/project/project-add")}
      className={cn(buttonVariants({variant :"primary" }))}>
      <Plus /> Create New Project
      </AbdullahButton>
    </div>
  </div>
}

export default Boardhead