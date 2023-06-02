import React from "react";
import { StrictModeDroppable as Droppable } from "~/utils/FixBugs/StrictModeDroppable";
import Task, { type TaskType } from "./Task";
import { AbdullahButton  , buttonVariants} from "../used/AbdullahButton";
import { ScrollArea } from "../ui/scroll-area";

type PropsType ={
  title : string , 
  id : string , 
  tasks : TaskType[]
}

export default function Column({ title, tasks, id } : PropsType ) {
  return (
   <div className="w-[300px]  h-fit  overflow-x-hidden bg-gray-50  ">
       {/* this is the column header */}
     <div className="w-[300px]  flex justify-between px-4 items-center h-[35px]  my-2  ">
     <p className="text-md font-semibold  text-gray-900 ">   {title}({tasks.length})</p>
    </div>
    {/* this the draggable area */}
    <Droppable droppableId={id}>
    
        {(provided, snapshot) => (
            <ScrollArea className="h-full w-full">
          <div
          className="w-full h-fit min-h-[300px]  "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((item, index) => (
              <Task priority={item.priority} key={item.id} index={index} title={item.title} id={item.id} discription={item.discription} imgUrl={item.imgUrl} />
            ))}
            {provided.placeholder}
          </div>
          </ScrollArea>
        )}

 
      </Droppable>
     
     
   </div>
     );
}