import React from 'react'
import { AbdullahButton , buttonVariants } from '~/components/used/AbdullahButton'
import { useState } from 'react'
import { ConfirmePopUp } from '~/components/popup/ConfirmePopUp'
import { api } from '~/utils/api'
import toast from 'react-hot-toast'
import { openNewTap } from '~/utils/pdf/openNewTap'
import { getProjectMetaData } from '~/lib/MetaData'
import { saveAs } from 'file-saver';
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from '~/lib/constants'






export function ActivityListBuilder() {

    const [isBuilded , setIsBuiled] = useState<boolean>(false)

    const [publicUrl , setPublicUrl ] = useState<string>("")
    const x = useMotionValue(0);
    const controls = useAnimation();
    const [constrained, setConstrained] = useState(true);

    const [velocity, setVelocity] = useState<number>(0);

    const mutation = api.integrationsRouter.Activity_list_create.useMutation({
        onSuccess(data){
          toast.success("we have the project charter")
          setIsBuiled(true)
          setPublicUrl(data.url || "")
        },
        onError(){
          toast.error("there is an error")
        }
      })

  return (
    <motion.div 
    animate={controls}
    drag="x"
    dragConstraints={constrained && { left: 0, right: 0 }}
    dragElastic={1}
   
    style={{ x }}
    onDrag={() => setVelocity(x.getVelocity())}

    whileTap={{ scale: 1.05 }}
    className="flex w-[90%] gap-y-4 my-4 items-start  rounded-md border flex-col  border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black "
   >
        <h3 className='text-xl font-bold text-gray-800 '>📙 Activity list </h3>
        <p className='text-md text-gray-500 '>
          The Activity List in PMBOK is a comprehensive document that outlines all the individual activities required to complete a project.
        </p>
        {
              isBuilded ? 
              
              
              <div className='w-full h-[70px] flex justify-end gap-x-4 items-center'>  
                 <ConfirmePopUp />
                  <AbdullahButton
                  onClick={() => openNewTap(publicUrl)}
                  className={buttonVariants({variant : "primary"})} >
                      view the document
                  </AbdullahButton>  
                  
              </div>
              :
              <div className='w-full h-[70px] flex justify-end gap-x-4 items-center'>  
                  <AbdullahButton 
                  onClick={() => mutation.mutate({
                    projectId : getProjectMetaData()
                  })}
                  isLoading={mutation.isLoading}
                
              
                  className={buttonVariants({variant : "primary"})} >
                      Build document
                  </AbdullahButton>  
              </div>
        }
    
    </motion.div>
  )
}
