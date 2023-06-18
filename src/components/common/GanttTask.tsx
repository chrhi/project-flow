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
import { RowGridText } from '../typography/RowGridText';


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

  const [view, setView] = useState<ViewMode>(ViewMode.Day);

  const [showTaskList, setShowTaskList] = useState<boolean>(true);

  const handleChange = () => {
    setShowTaskList(!showTaskList)
  }

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
        if(data.length === 0) return
        setTasks(preparedTasks);
      },
      onError: () => {
        toast.error('Something went wrong');
      },
    }
  );

  return (
    <div className="w-full h-full flex pb-8 pt-4 flex-col  relative bg-white overflow-x-auto overflow-y-auto items-start">
      <div className="w-full h-[100px] flex mb-4 flex-col items-start">
        <Title>Gantt  chart view </Title>
       
        <div className="w-full h-[65px] gap-x-4 flex items-center justify-end px-4">
          {
            [
              {name : " Hour" , value : ViewMode.Hour},
              {name : "   Quarter Day" , value : ViewMode.QuarterDay},
              {name : "  Haft of day" , value : ViewMode.HalfDay},
              {name : "    Week" , value : ViewMode.Week},
              {name : "    Month" , value : ViewMode.Month},
              {name : "   Year" , value : ViewMode.Year},
             
            ].map(item => (
              <AbdullahButton
              onClick={() => setView(item.value)}
              className={`${buttonVariants({variant : "secondary"})} ${view === item.value ? "bg-blue-500 text-white" : ""}`} >
                {item.name}
              </AbdullahButton>
            ))
          }
        
        <div className="flex items-center ml-4 space-x-2">
           <Switch checked={showTaskList} onCheckedChange={handleChange} id="tasklist-show" />
           <Label htmlFor="tasklist-show">Show task list</Label>
        </div>
        </div>
      </div>
      <Gantt
        viewMode={view || ViewMode.Week}
        
        fontFamily="poppines"
        tasks={tasks }
        listCellWidth={showTaskList ? undefined : ''}
        onDateChange ={(event) => console.log(event) }
        onProgressChange={(event => console.log(event ))}
        onExpanderClick = {(event => console.log(event ))}
        onDelete ={(event) => console.log(event)}
        fontSize="10"
      />
    </div>
  );
};
