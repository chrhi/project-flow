import { useState } from 'react';
import { Gantt, type  Task, ViewMode } from 'gantt-task-react';
import 'gantt-task-react/dist/index.css';
import { getProjectMetaData } from '~/lib/MetaData';
import { api } from '~/utils/api';
import toast from 'react-hot-toast';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Title } from '@tremor/react';
import { AbdullahButton , buttonVariants } from '../used/AbdullahButton';
import LoadingComponents from './loading-components';
import EmptyGanttChard from '../gantt-chard/empty';
import { Expand } from 'lucide-react';

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

  const [status , setSTatus] = useState("LOADING")

  const handleChange = () => {
    setShowTaskList(!showTaskList)
  }

  api.tasksRouter.getTasks.useQuery(
    { projectId: getProjectMetaData() },
    {
      onSuccess: (data) => {
        const preparedTasks = data.map((item): Task => ({
          start: item.StartAt || new Date(),
          end: item.EndsAt || new Date(),
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
        if(data.length === 0){ 
          setSTatus("EMPTY")
          return
        }
        setTasks(preparedTasks);
        setSTatus("END")
      },
      onError: () => {
        toast.error('Something went wrong');
        setSTatus("EMPTY")
      },
    }
  );

  return (
    <div className="w-full h-full flex pb-8 pt-4 flex-col  relative bg-white overflow-x-auto overflow-y-auto items-start">
      <div className="w-full h-[100px] flex mb-4 flex-col items-start">
        <Title>Vue du diagramme de Gantt </Title>
       
        <div className="w-full h-[65px] gap-x-4 flex items-center justify-end px-4">
          {
            [
              {name : " Heure" , value : ViewMode.Hour},
              {name : "   Quart de journée" , value : ViewMode.QuarterDay},
              {name : "  Moitié de journée" , value : ViewMode.HalfDay},
              {name : "    Semaine" , value : ViewMode.Week},
              {name : "    Mois" , value : ViewMode.Month},
              {name : "   Année" , value : ViewMode.Year},
             
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
           <Label htmlFor="tasklist-show">Afficher la liste des tâches</Label>
        </div>
        <AbdullahButton
              onClick={() => console.log("")}
              className={`${buttonVariants({variant : "secondary"})} `} >
               <Expand /> 
        </AbdullahButton>
        </div>
      </div>
      {
        status === "LOADING" ? 
        <LoadingComponents />
        : status === "EMPTY" ? 
       <EmptyGanttChard />
        :
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
      }
    </div>
  );
};
