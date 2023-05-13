/* eslint-disable  */
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Badge, BadgeDelta  } from "@tremor/react";

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
        {(provided) => (
            <article 
            className='w-[97%] flex flex-col items-start gap-y-2 h-fit min-h-[50px] rounded-lg bg-white my-4 p-4'
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
               {
                    imgUrl ?
                     <img 
                       alt={title}
                       src={imgUrl}
                       className='w-[97%] mx-auto my-1 rounded-lg '   /> : null
                  }
                <div className='w-full h-fit '>
                <h3 className='text-md  font-semibold text-start '>{title}</h3>
                  <p className='text-sm text-gray-700  text-start '>
                    {discription}
                  </p>
                  <div className='w-full h-[40px] flex justify-end px-2'>
                  <BadgeDelta
                  size='xs'
                  className='!text-xs'
                  //@ts-ignore
                  deltaType={priority || "increase"}> {priority === "increase" ? "low " : "hight "}</BadgeDelta>
                  </div>
                </div>
                 
            </article>
        )}
     </Draggable>
  )
}

export default Task