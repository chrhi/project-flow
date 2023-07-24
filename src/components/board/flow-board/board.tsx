import React from "react";
import { StrictModeDroppable as Droppable } from "~/utils/FixBugs/StrictModeDroppable";
import Flow from "./Flow";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import type { Project } from "@prisma/client";
// import { block } from "million/react-server";
import {  block } from "million/react";
import { useRouter } from "next/router";
import { setoreProjectMetaData } from "~/lib/MetaData";


type PropsType ={
 
  projects : Project[]
}

 function Board({  projects } : PropsType ) {



    const handleDragEnd = (result : DropResult) => {

    }

  return (
    <DragDropContext 
    
    onDragEnd = {(result) => handleDragEnd(result)}>
   <div className="w-full   p-6    h-full ">
    
      <Droppable droppableId={"board"}>
    
        {(provided, snapshot) => (
         
          <div
              className="w-full flex gap-4 flex-wrap h-fit  "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
             
            {projects.map((item, index) => (
                <Flow 

                    {...item}
                    key = {item?.id}
                    index={index} 
                  
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


const BoardBlock = block(Board)

export default BoardBlock