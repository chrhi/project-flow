import type  { Dispatch, FC, SetStateAction } from 'react'
import { AbdullahButton , buttonVariants} from './AbdullahButton'
import { cn } from '~/lib/utils'
import { Label } from '../ui/label'
import { useRef, useState } from 'react'

import { Data } from 'emoji-mart'
import Picker from '@emoji-mart/react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"

interface Props {
  isRequired? : boolean,
  setProjectImage: Dispatch<SetStateAction<{
    image: string;
    type: string;
  }>>,
   projectImage: {
    image: string;
    type: string;
  }
}


const ProjectAvartPicker: FC<Props> = ({isRequired , setProjectImage , projectImage}) => {

    const inputrefrence = useRef<HTMLInputElement>(null)

   
    const setColor = (color : string) => {

      console.log(color)

      setProjectImage({
        image : color,
        type :"COLOR"
      })
    }

    const setEmojee = (emojee : string) => {
    
      setProjectImage({
        image : emojee,
        type :"EMOJEE"
      })
    }
    
  return <div className='col-span-6 flex flex-col w-full gap-y-2 justify-center'>

  <Label>Icon {""} {isRequired && <span className='text-red-500 '>*</span>} </Label>
  
  <div className='w-full h-[40px] rounded-lg  bg-white flex items-center gap-x-4'>

    {projectImage.type === "COLOR" ? 
     <div 
     style={{
      background :projectImage.image.length > 0 ?  projectImage?.image : "#2af884"
     }}
     className={`rounded-[50%] w-[40px] h-[40px] `}>

     </div>  
     :
     <span className='text-[35px]'>{projectImage.image}</span>
   }
   
 
    <Popover >
        <PopoverTrigger asChild>
        <AbdullahButton className={cn(buttonVariants({variant : "secondary"  , size :"sm"}))} >Emoji</AbdullahButton>
        </PopoverTrigger>
        <PopoverContent className='bg-transparent border-none'>
             <Picker
               className="!border-none"
               theme={"light"}
               data={Data}
               onEmojiSelect={(emojee: any) => setEmojee(emojee?.native)} 
              />
        </PopoverContent>
    </Popover>

    <AbdullahButton className={cn(buttonVariants({variant : "secondary" , size :"sm"}))}>Uplaod an image</AbdullahButton>
   
    <AbdullahButton
        onClick={() => inputrefrence.current?.click()}
       className={cn(buttonVariants({variant : "secondary"  , size :"sm"}))} >
           color
        <input
            onChange={e => setColor(e.target.value)}
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