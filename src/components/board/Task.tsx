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
  endsAt? : Date 
}

 export type TaskType = {
  id : string ,
  title : string , 
  discription? : string , 
  imgUrl? : string,
  priority?: string,
  status : string,
  endsAt? : Date 
}

function remainingTime(date: Date): string {
  const currentDate = new Date();
  const timeLeft = date.getTime() - currentDate.getTime();

  if (timeLeft >= 30 * 24 * 60 * 60 * 1000) {
    const monthsLeft = Math.floor(timeLeft / (30 * 24 * 60 * 60 * 1000));
    return `${monthsLeft} months left`;
  } else if (timeLeft >= 24 * 60 * 60 * 1000) {
    const daysLeft = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    return `${daysLeft} days left`;
  } else {
    const hoursLeft = Math.floor(timeLeft / (60 * 60 * 1000));
    const minutesLeft = Math.floor((timeLeft / (60 * 1000)) % 60);
    return `${hoursLeft} hours and ${minutesLeft} minutes left`;
  }
}

function Task({index , id , title , discription , imgUrl , endsAt , priority }  : PropsType) {
  return (
    <Draggable  draggableId={id} index={index}>
        {(provided , snapshot) => (
            <article 
            className={`w-[97%] flex flex-col items-start gap-y-2   shadow-lg h-fit min-h-[50px] rounded-lg bg-white my-4 
             ${snapshot.isDragging ? "shadow-xl " : "" }`}
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
               {
                    imgUrl ?
                     <img 
                       alt={title}
                       src={imgUrl || ""}
                       className='w-[100%]   '   /> : null
                  }
                <div className='w-full h-fit p-4 '>
                <h3 className='text-sm font-semibold text-start '>{title}</h3>
                  <p className='text-sm text-gray-700  text-start '>
                    {discription}
                  </p>
                  <div className='w-full h-[20px] flex justify-end px-2'>
                { endsAt && <Badge color={"cyan"} className='rounded-lg' size='xs'>{remainingTime(endsAt)}</Badge> }
                  </div>
                </div>
                 
            </article>
        )}
     </Draggable>
  )
}

export default Task