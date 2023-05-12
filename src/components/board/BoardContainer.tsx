import  { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { TaskType } from "./Task";


const tasks : TaskType[] =[
  {
    id : "12343",
    title : "Pipeline and Transportation" , 
    discription : "Sonatrach can manage the transportation of oil and gas through pipelines and other means. This includes constructing and maintaining pipelines, monitoring transportation operations, and ensuring safe and efficient delivery of resources " , 
    priority : "decrease"
  },
  {
    id : "1234" , 
    title : "add the colors tages ",
    priority : "increase"
  } , 
 

]

function BoardContainer() {
  return (
    <DragDropContext 
    
    onDragEnd = {() => console.log("this is working")}>
    <div className="w-[95%] ml-[5%]   overflow-x-hidden   h-fit min-h-[500px] flex justify-between ">
      <Column 
       title="a Fair"
       tasks={tasks} 
       id="1234"
       />
        <Column 
      title="En cour"
       tasks={[]} 
       id="124564"
       />
        <Column 
      title="Fait"
       tasks={[]} 
       id="1235664"
       />
        <Column 
      title="Annel"
       tasks={[]} 
       id="1245976564"
       />
    </div>
    </DragDropContext>
  )
}

export default BoardContainer