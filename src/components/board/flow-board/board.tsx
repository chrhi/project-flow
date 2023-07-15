import React from "react";
import { StrictModeDroppable as Droppable } from "~/utils/FixBugs/StrictModeDroppable";
import Flow from "./Flow";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";




type PropsType ={
 
  projects : Project[]
}

export default function Board({  projects } : PropsType ) {


    const handleDragEnd = (result : DropResult) => {

    }

  return (
    <DragDropContext 
    
    onDragEnd = {(result) => handleDragEnd(result)}>
   <div className="w-full  h-fit min-h-screen  p-6  overflow-x-hidden  ">
    
      <Droppable droppableId={"board"}>
    
        {(provided, snapshot) => (
         
          <div
              className="w-full h-fit min-h-full  "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
            {projects.map((item, index) => (
                <Flow 
                    key = {item?.id}
                    index={index} 
                    avatar=""
                    description="this is the desciption about the task we are going for"
                    title="Create this board"
                    tag="business"
                    id="09875544"
                   />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
   </div>
   </DragDropContext>
     );
}