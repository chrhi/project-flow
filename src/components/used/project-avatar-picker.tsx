import type  { FC } from 'react'
import { AbdullahButton , buttonVariants} from './AbdullahButton'
import { cn } from '~/lib/utils'
import { Label } from '../ui/label'
import { useRef } from 'react'

import { Data } from 'emoji-mart'
import Picker from '@emoji-mart/react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"




const ProjectAvartPicker: FC = ({}) => {

    const inputrefrence = useRef<HTMLInputElement>(null)
    
  return <div className='col-span-6 flex flex-col w-full gap-y-2 justify-center'>

  <Label>Pick project avatar</Label>
  
  <div className='w-full h-[40px] rounded-lg  bg-white flex gap-x-4'>

    
    <div className='rounded-[50%] w-[40px] h-[40px] bg-blue-500'>

    </div>
    <AbdullahButton className={cn(buttonVariants({variant : "secondary" , size :"sm"}))}>Uplaod</AbdullahButton>
    <Popover >
        <PopoverTrigger asChild>
        <AbdullahButton className={cn(buttonVariants({variant : "secondary"  , size :"sm"}))} >Emoji</AbdullahButton>
        </PopoverTrigger>
        <PopoverContent className='bg-transparent border-none'>
            <Picker
             data={Data}
             onEmojiSelect={console.log} 
              />
        </PopoverContent>
    </Popover>
   
    <AbdullahButton
        onClick={() => inputrefrence.current?.click()}
       className={cn(buttonVariants({variant : "secondary"  , size :"sm"}))} >
           color
        <input
                   className={cn(buttonVariants({variant : "secondary"  , size :"sm"}),
                   "outline-none w-[0.1rem] h-[0.1rem] -z-[999] bg-white border-none "
            )}
            ref={inputrefrence}
            type='color'
    />
            
              
    </AbdullahButton>
  </div>
  </div>
}

export default ProjectAvartPicker