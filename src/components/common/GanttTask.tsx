import {
   Gantt, 
   type Task,
   ViewMode, 
   } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const tasks: Task[] = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 9, 2),
      name: 'create something',
      id: 'Task 0',
      type:'task',
      progress: 100,
      isDisabled: false,
      styles: { 
         progressColor: '#0794f3',  
         progressSelectedColor: '#0794f3'
        },
    },
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 2, 2),
        name: 'dothing else ',
        id: 'Task 0',
        type:'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#0794f3', progressSelectedColor: '#0794f3' },
      },
      {
        start: new Date(2020, 3, 1),
        end: new Date(2020, 5, 12),
        name: 'ah just why',
        id: 'Task 0',
        type:'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#0794f3', progressSelectedColor: '#0794f3' },
      },
      {
        start: new Date(2020, 3, 1),
        end: new Date(2020, 3, 18),
        name: 'Idea',
        id: 'Task 0',
        type:'task',
        progress: 100,
        isDisabled: false,
        styles: { progressColor: '#0794f3', progressSelectedColor: '#0794f3' },
      },

];


export const GanttTask = () => {
  return (
    <div className='w-full h-screen flex py-8 justify-center bg-white overflow-x-auto overflow-y-auto items-center '>
        <Gantt
        viewMode={ViewMode.Month}
        ganttHeight={500}
        barFill={70}
        fontFamily='poppines'
        tasks={tasks} 
        // listCellWidth={showTaskList ? undefined : ''}
        // listCellWidth={''}
        columnWidth={100}
        headerHeight={100}
        fontSize='15'
        
       
/>
    </div>
  )
}

