import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import {useState} from 'react'
import { FormContainer } from "~/components/ui/used/FormContainer"; 
import PlanningTabs from "~/components/planning/tabs/PlanningTabs";
import { Tasks } from "~/components/planning/ui/Tasks"; 
import { GanttTask } from "~/components/planning/GanttTask"; 

const Page: NextPage = () => {
  const [inTasks , setInTasks] = useState<boolean>(true)
  const [isOpen , setIsOpen] = useState<boolean>(true)
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[5rem]"}`}>
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
      </main>
    </>
  );
};

export default Page;