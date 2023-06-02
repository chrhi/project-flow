import  { useState, useEffect } from "react";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import {type  TaskType } from "./Task";




type Props = {
  tasks : TaskType[],

}

function BoardContainer({tasks} : Props ) {

  const [todo , setTodo ] = useState<TaskType[]>([])
  const [Doing , setDoing ] = useState<TaskType[]>([])
  const [Done , setDone ] = useState<TaskType[]>([])
  const [Canceled , setCanceled ] = useState<TaskType[]>([])

  useEffect(() => {
    setTodo(tasks?.filter(item => item.status === "TODO"))
    setDoing(tasks?.filter(item => item.status === "DOING"))
    setDone(tasks?.filter(item => item.status === "DONE"))
    setCanceled(tasks?.filter(item => item.status === "CANCEL"))
  },[tasks])

  const handleDragEnd = (result : DropResult) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination?.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    // if (source.droppableId == 2) {
    //   setDoing(removeItemById(draggableId, completed));
    // } else {
    //   setDone(removeItemById(draggableId, incomplete));
    // }

    // // GET ITEM

    // const task = findItemById(draggableId, [...incomplete, ...completed]);

    // //ADD ITEM
    // if (destination?.droppableId == 2) {
    //   setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    // } else {
    //   setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    // }
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