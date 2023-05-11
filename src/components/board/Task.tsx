import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

type PropsType =  {
  index : number ,
  id : string,
  title : string , 
  discription? : string , 
  imgUrl? : string
}

 export type TaskType = {
  id : string ,
  title : string , 
  discription? : string , 
  imgUrl? : string
}


function Task({index , id , title , discription , imgUrl }  : PropsType) {
  return (
    <Draggable  draggableId={id} index={index}>
        {(provided) => (
            <article 
            className='w-[97%] flex flex-col items-center gap-y-2 h-fit min-h-[50px] rounded-lg bg-white my-4 p-4'
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <h3 className='text-md text-start font-semibold truncate '>{title}</h3>
                  <p className='text-sm text-gray-700 leading-3 text-start truncate'>
                    {discription}
                  </p>
                  {
                    imgUrl ?
                     <img 
                       alt={title}
                       src={imgUrl}
                       className='w-[90%] mx-auto my-1 rounded-lg '   /> : null
                  }
            </article>
        )}
     </Draggable>
  )
}

export default Task