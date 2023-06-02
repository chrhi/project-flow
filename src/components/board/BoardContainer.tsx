import  { useState, useEffect } from "react";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import {type  TaskType } from "./Task";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import { toast } from "react-hot-toast";



type Props = {
  tasks : TaskType[],

}

function BoardContainer({tasks} : Props ) {

  const [todo , setTodo ] = useState<TaskType[]>([])
  const [Doing , setDoing ] = useState<TaskType[]>([])
  const [Done , setDone ] = useState<TaskType[]>([])
  const [Canceled , setCanceled ] = useState<TaskType[]>([])

  api.tasksRouter.getTasks.useQuery({projectId : getProjectMetaData()},{
    onSuccess : (data) => {
      const prepare = data.map((item ) : TaskType => {
        return {
          id : item.id , 
          status : item.Status || "" , 
          title : item.title || "", 
          discription : item.description || "" , 
          imgUrl : "",
          priority : item.Priority || "",
        }
      })
      setTodo(prepare.filter(item => item.status === "TODO"))
      setDoing(prepare.filter(item => item.status === "DOING"))
      setDone(prepare.filter(item => item.status === "DONE"))
      setCanceled(prepare.filter(item => item.status === "CANCELED"))
    },
    onError : () => {
      toast.error("something went wrong may be your internet connection ?")
    }
  })





  const handleDragEnd = (result : DropResult) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination?.droppableId) return;
   // REMOVE FROM SOURCE ARRAY
    if (source.droppableId === "todo") {
      setTodo(removeItemById(draggableId, todo))
    }

    if (source.droppableId === "doing") {
      setDoing(removeItemById(draggableId, Doing));
    }

    if (source.droppableId === "done") {
      setDone(removeItemById(draggableId, Done));
    }
    if (source.droppableId == "Canceled") {
      setCanceled(removeItemById(draggableId, Canceled));
    }
    // GET ITEM

    const task = findItemById(draggableId, [...todo, ...Doing , ...Done , ...Canceled]);

    if(!task) return 

    if (destination?.droppableId === "todo") {
      setTodo([{ ...task, status: "TODO" }, ...todo]);
    }

    if (destination?.droppableId === "doing") {
    
      setDoing([{ ...task, status: "DOING" }, ...Doing]);
    }

    if (destination?.droppableId === "done") {
  
      setDone([{ ...task, status: "DONE" }, ...Done]);
    }
    if (destination?.droppableId== "Canceled") {
      setCanceled([{ ...task, status: "CANCELED" }, ...Canceled]);
    }

  
  };

  function findItemById(id : string, array : TaskType[]) {
    return array?.find((item) => item.id == id);
  }

  function removeItemById(id : string, array : TaskType[]) {
    return array?.filter((item) => item.id != id);
  }

  return (
    <DragDropContext 
    
    onDragEnd = {(result) => handleDragEnd(result)}>
    <div className="w-[95%] ml-[5%]   overflow-x-hidden   h-fit min-h-[500px] flex justify-between ">
      <Column 
       title="To do"
       tasks={todo} 
       id="todo"
       />
        <Column 
      title="In progress"
       tasks={Doing} 
       id="doing"
       />
        <Column 
      title="Done"
       tasks={Done} 
       id="done"
       />
        <Column 
      title="Canceled"
       tasks={Canceled} 
       id="Canceled"
       />
    </div>
    </DragDropContext>
  )
}

export default BoardContainer