import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import {  GripVertical } from 'lucide-react';
import { DropdownMenuSeparator } from '~/components/ui/dropdown-menu';
import type { Project, User } from "@prisma/client";
import { block } from "million/react";
import { useRouter } from 'next/router';
import { setoreProjectMetaData } from '~/lib/MetaData';


const FlowImage = (image : string, type : string) => {

  if(type === "COLOR"){
    return <div className='w-[50px] h-[50px] rounded-[50%] '>
       <div className='bg-purple-500 rounded-[50%] w-full h-full'>

       </div>
    </div>
  }else{
  return (  <div className='w-[50px] h-[50px] flex items-center rounded-[50%] '>
  <span className='text-[40px]'>{image}</span>
</div>)
  }

}


const AssignedPeaple =  (team : User[]) => {
  
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {team.map(item => {
        return (
          <img
          key={item.id + "image"}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src={item?.image || "/assets/avatar.png"}
          alt={`${item.name} image `}
        />
        )
      })}
    
  </div>
  )
}




function Flow({image , team , description , imagetype  , title , id , index , currentPhase}  : Project &{ index : number}) {

  

  const router = useRouter()


  const handleRouting = () => {
    setoreProjectMetaData({project_id : id})
    router.push("/app/project/simple/brief")
  
  }

 
  return (
    <Draggable  draggableId={id} index={index}>
        {(provided , snapshot) => (
            <Card 
            onClick={handleRouting}
            className={`w-[100%]  transition duration-500 transform hover:-translate-y-1 max-w-[400px] h-[400px] cursor-pointer  flex flex-col items-start gap-y-2   shadow-lg hover:shadow-sky-200  min-h-[50px] rounded-lg bg-white my-4 
             ${snapshot.isDragging ? "shadow-xl " : "" }`}
             {...provided.draggableProps}  ref={provided.innerRef}
           >
             <CardHeader className='w-full '>

              <div className='w-full flex items-center justify-between'>
                  <div className='w-[90%] flex items-center justify-start gap-x-4'>
                        {FlowImage(image , imagetype)}
                       <CardTitle className='text-xl'>{title}</CardTitle>
                  </div>
                 
                     <div   {...provided.dragHandleProps} className='w-[10%] h-6'>
                         <GripVertical    className='text-gray-500 cursor-pointer w-6 h-6 '/>
                     </div>
              </div>

             </CardHeader>
             <CardContent className='w-full '>
                  <CardDescription className='h-[120px] overflow-hidden'>
                    {description}
                 </CardDescription>
                 <DropdownMenuSeparator className=' rounded-lg  bg-gradient-to-r from-blue-500 to-sky-500 mt-6 mb-4 h-2 w-full'/>

                 {/* in here goes the depatement and who is assgin to  */}
                 <div className='w-full  flex justify-between h-[50px]'>
                  {AssignedPeaple(JSON.parse(team as string))}
                    <div className='w-[100px] h-[50px] p-2'>
                          <p className='text-blue-500 text-md font-bold  '>#Reaserch</p>
                    </div>
                 </div>

                 {/* in here goes the status and the due date */}
                 <div className='w-full flex justify-between  h-[100px] '>
                        <div className='w-[50%] h-[100px] flex flex-col items-start justify-start gap-y-2'>
                            <h4 className='text-md font-semibold'>Due date</h4>
                            <p className='text-sm'>On going</p>
                        </div>
                        <div className='w-[50%] h-[100px] flex flex-col items-end justify-start gap-y-2'>
                            <h4 className='text-md font-semibold'>Current phase</h4>
                            <p className='text-sm'>{currentPhase}</p>
                        </div>
                 </div>
             </CardContent>   
            </Card>
        )}
     </Draggable>
  )
}

export default block(Flow)