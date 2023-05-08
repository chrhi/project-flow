import React from 'react'
import { AbdullahButton , buttonVariants} from '../ui/buildingBlocks/AbdullahButton'
import { useState } from 'react'


type DocumentBuilderProps = {
    title : string ,
    description : string , 

}



export function DocumentBuilder({title , description }  : DocumentBuilderProps) {

    const [isBuilded , setIsBuiled] = useState<boolean>(false)

  return (
    <div className='w-[90%] mb-4 mx-auto max-w-4xl bg-white rounded-lg h-[250px] p-8 flex flex-col gap-y-8'>
        <h3 className='text-2xl font-bold text-gray-800 '>👉 {title} </h3>
        <p className='text-md text-gray-500 '>
        {description}
        </p>
        {
              isBuilded ? 
              <div className='w-full h-[70px] flex justify-end gap-x-4 items-center'>  
                  <AbdullahButton className={`bg-black`} >
                      create
                  </AbdullahButton>  
              </div>
              : 
              <div className='w-full h-[70px] flex justify-end gap-x-4 items-center'>  
                 <AbdullahButton className={buttonVariants({variant : "secondary"})} >
                      distroy
                  </AbdullahButton>  
                  <AbdullahButton className={buttonVariants({variant : "primary"})} >
                      view on web
                  </AbdullahButton>  
                  
              </div>
        }
    
    </div>
  )
}

  