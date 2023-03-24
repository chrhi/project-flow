import {useState} from 'react'
import { FormContainer } from '../ui/used/FormContainer'
import PlanningTabs from './tabs/PlanningTabs'
import { Tasks } from './ui/Tasks'
import { GanttTask } from './GanttTask'

export const TasksTime = () => {

    const [inTasks , setInTasks] = useState<boolean>(true)

  return (
   <FormContainer>
    <div className='w-full h-[50px] mb-4  flex justify-between'>
    <div className="w-[70%] h-[50px] flex items-center justify-start p-4 ">
    <h1 className="text-2xl font-bold text-start text-gray-900"> in here goes some tasks </h1>
    </div>
    <PlanningTabs onSelect = {setInTasks} />
    </div>
    {inTasks ? 
        <Tasks />
    :
        <GanttTask />
    }
   </FormContainer>
  )
}

