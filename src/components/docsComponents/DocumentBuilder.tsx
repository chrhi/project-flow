import React from 'react'
import { AbdullahButton , buttonVariants} from '../used/AbdullahButton'
import { useState } from 'react'
import { ConfirmePopUp } from '../popup/ConfirmePopUp'
import { api } from '~/utils/api'
import toast from 'react-hot-toast'
import { openNewTap } from '~/utils/pdf/openNewTap'
import { getProjectMetaData } from '~/lib/MetaData'
import { saveAs } from 'file-saver';

type DocumentBuilderProps = {
    title : string ,
    description : string , 

}




export function DocumentBuilder({title , description }  : DocumentBuilderProps) {

    const [isBuilded , setIsBuiled] = useState<boolean>(true)

    const mutation = api.integrationsRouter.ProjectCharter.useMutation({
        onSuccess(data){
          toast.success("we have the project charter")
//         //   console.log(JSON.parse(data))
         
//         //   const buffer = JSON.parse(data)
        
//         const blob = new Blob([data], { type: 'application/pdf' });
//         saveAs(blob , "abdullah.pdf")
// //   const url = URL.createObjectURL(blob);
// //   openNewTap(url);
        },
        onError(){
          toast.error("there is an error")
        }
      })

  return (
    <div className='w-[90%] mb-4 mx-auto max-w-4xl bg-white rounded-lg h-[250px] p-8 flex flex-col gap-y-8'>
        <h3 className='text-2xl font-bold text-gray-800 '>👉 {title} </h3>
        <p className='text-md text-gray-500 '>
        {description}
        </p>
        {
              isBuilded ? 
              <div className='w-full h-[70px] flex justify-end gap-x-4 items-center'>  
                  <AbdullahButton 
                  onClick={() => mutation.mutate({
                    projectId : getProjectMetaData()
                  })}
                  isLoading={mutation.isLoading}
                  className={`bg-black`} >
                      create
                  </AbdullahButton>  
              </div>
              : 
              <div className='w-full h-[70px] flex justify-end gap-x-4 items-center'>  
                 <ConfirmePopUp />
                  <AbdullahButton className={buttonVariants({variant : "primary"})} >
                      view on web
                  </AbdullahButton>  
                  
              </div>
        }
    
    </div>
  )
}

  