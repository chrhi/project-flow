/* eslint-disable  */
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import {  Badge, BadgeDelta  } from "@tremor/react";

type PropsType =  {
  index : number ,
  id : string,
  title : string , 
  discription? : string , 
  imgUrl? : string,
  priority?: string

}

 export type TaskType = {
  id : string ,
  title : string , 
  discription? : string , 
  imgUrl? : string,
  priority?: string,
  status : string
}


function Task({index , id , title , discription , imgUrl , priority }  : PropsType) {
  return (
    <Draggable  draggableId={id} index={index}>
        {(provided , snapshot) => (
            <article 
            className={`w-[97%] flex flex-col items-start gap-y-2   shadow-lg h-fit min-h-[50px] rounded-lg bg-white my-4 
             ${snapshot.isDragging ? "shadow-xl " : "" }`}
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
               {
                    true ?
                     <img 
                       alt={title}
                       src={imgUrl || "https://media.tenor.com/-NkL2pGJTQsAAAAC/uw-u-oshi-no-ko.gif"}
                       className='w-[100%]   '   /> : null
                  }
                <div className='w-full h-fit p-4 '>
                <h3 className='text-sm font-semibold text-start '>{title}</h3>
                  <p className='text-sm text-gray-700  text-start '>
                    {discription}
                  </p>
                  <div className='w-full h-[20px] flex justify-end px-2'>
                  <Badge color={"pink"}>7 days left</Badge>
                  </div>
                </div>
                 
            </article>
        )}
     </Draggable>
  )
}

export default Task