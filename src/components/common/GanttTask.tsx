import { useState } from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { getProjectMetaData } from '~/lib/MetaData';
import { api } from '~/utils/api';
import toast from 'react-hot-toast';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Title } from '@tremor/react';
import { AbdullahButton , buttonVariants } from '../used/AbdullahButton';


const tasksStatic: Task[] = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: '',
    id: 'Task 0',
    type:'task',
    progress: 45,
    isDisabled: true,
    styles: { progressColor: '#fffff', progressSelectedColor: '#ffffff' },
  },
 
];


export const GanttTask = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksStatic);

  api.tasksRouter.getTasks.useQuery(
    { projectId: getProjectMetaData() },
    {
      onSuccess: (data) => {
        const preparedTasks = data.map((item): Task => ({
          start: item.StartAt || new Date(),
          end: item.EndedAt || new Date(),
          name: item.title || '',
          id: item.id || '',
          type: 'task' || '',
          isDisabled: false,
          progress: 100,
          styles: {
            progressColor: item.Color || '#0794f3',
            progressSelectedColor: item.Color || '#0794f3',
          },
        }));
        setTasks(preparedTasks);
      },
      onError: () => {
        toast.error('Something went wrong');
      },
    }
  );

  return (
    <div className="w-full h-full flex py-8  flex-col  relative bg-white overflow-x-auto overflow-y-auto items-start">
      <div className="w-full h-[100px] flex flex-col items-start">
        <Title>Gantt  chart view </Title>
        <div className="w-full h-[50px] gap-x-4 flex items-center justify-end px-4">
        <AbdullahButton className={buttonVariants({variant : "secondary"})}>
            Hour
        </AbdullahButton>

        <AbdullahButton className={buttonVariants({variant : "secondary"})} >
              Quarter Day
        </AbdullahButton>
        
        <AbdullahButton className={buttonVariants({variant : "secondary"})} >
          Haft of day
        </AbdullahButton>
        
        <AbdullahButton className={buttonVariants({variant : "secondary"})} >
            Day
        </AbdullahButton>
        
        <AbdullahButton className={buttonVariants({variant : "secondary"})} >
            Week
        </AbdullahButton>

        <AbdullahButton className={buttonVariants({variant : "secondary"})} >
            Month
        </AbdullahButton>
        
        <AbdullahButton className={buttonVariants({variant : "secondary"})} >
            Year
        </AbdullahButton>
        <div className="flex items-center ml-4 space-x-2">
           <Switch id="tasklist-show" />
           <Label htmlFor="tasklist-show">Show task list</Label>
        </div>
        </div>
      </div>
      <Gantt
        viewMode={ViewMode.Month}
        // ganttHeight={500}
        // barFill={70}
        fontFamily="poppines"
        tasks={tasks }
        // listCellWidth={showTaskList ? undefined : ''}
        // listCellWidth={''}
        // columnWidth={100}
        // headerHeight={100}
        fontSize="10"
      />
    </div>
  );
};
