import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const tasks: Task[] = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: 'Idea',
      id: 'Task 0',
      type:'task',
      progress: 60,
      isDisabled: false,
      styles: { progressColor: '##53f', progressSelectedColor: '##53f' },
    },
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 2, 2),
        name: 'Idea',
        id: 'Task 0',
        type:'task',
        progress: 60,
        isDisabled: false,
        styles: { progressColor: '##53f', progressSelectedColor: '##53f' },
      },
      {
        start: new Date(2020, 3, 1),
        end: new Date(2020, 5, 12),
        name: 'Idea',
        id: 'Task 0',
        type:'task',
        progress: 60,
        isDisabled: false,
        styles: { progressColor: '##53f', progressSelectedColor: '##53f' },
      },
      {
        start: new Date(2020, 3, 1),
        end: new Date(2020, 3, 18),
        name: 'Idea',
        id: 'Task 0',
        type:'task',
        progress: 60,
        isDisabled: false,
        styles: { progressColor: '##53f', progressSelectedColor: '##53f' },
      },

];


export const GanttTask = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <Gantt
        viewMode={ViewMode.Month}
        ganttHeight={500}
        barFill={100}
        
  tasks={tasks}

 
/>
    </div>
  )
}

