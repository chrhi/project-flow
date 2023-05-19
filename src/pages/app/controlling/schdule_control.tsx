import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import {useState} from 'react'
import { FormContainer } from "~/components/used/FormContainer"; 
import { GanttTask } from "~/components/common/GanttTask"; 
import { ControllingSidebar } from "~/components/sideBars/ControllingSidebar";

const Page: NextPage = () => {
  const [inTasks , setInTasks] = useState<boolean>(true)
  const [isOpen , setIsOpen] = useState<boolean>(true)
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <ControllingSidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
    <div className='w-full h-[50px] mb-4  flex justify-between'>
    <div className="w-[70%] h-[50px] flex items-center justify-start p-4 ">
    <h1 className="text-2xl font-bold text-start text-gray-900"> in here goes some tasks </h1>
    </div>
    {/* <PlanningTabs onSelect = {setInTasks} /> */}
    </div>
    {inTasks ? 
        // <Tasks /> 
        null
    :
        <GanttTask />
    }
   </FormContainer>
      </main>
    </>
  );
};

export default Page;

