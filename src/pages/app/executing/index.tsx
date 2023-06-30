
import { type NextPage } from "next";
import Head from "next/head";
import {  useState } from "react";
import BoardContainer from "~/components/board/BoardContainer";
import { TaskType } from "~/components/board/Task";
import { Header } from "~/components/header/Header";
import { TaskEndDone } from "~/components/popup/end-task-pop-up";
import { ExecutingSidebar } from "~/components/sideBars/ExecutingSidebar";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { task } from "~/types/type";


const tasksTyped : TaskType[] =[
  {
    id : "12343",
    title : "Pipeline and Transportation" , 
    discription : "Sonatrach can manage the transportation of oil and gas through pipelines and other means. This includes constructing and maintaining pipelines, monitoring transportation operations, and ensuring safe and efficient delivery of resources " , 
    priority : "decrease",
    status : "TODO",
    AssignedTo : [""]

  },
  {
    id : "1234566" , 
    title : "Conduct Reservoir Assessment ",
    priority : "increase",
    discription:" Perform a detailed assessment of a designated oil or gas reservoir, analyzing geological data, reservoir properties, and production potential to inform future exploration and production strategies",
    status : "DONE",
    AssignedTo : [""]
  } , 
  {
  id : "9776",
  title : "Prepare Upstream Feasibility Report" , 
  discription : "Develop a comprehensive feasibility report for an upstream oil or gas project, evaluating technical aspects, cost estimation, risk analysis, and potential returns to determine project viability" , 
  priority : "decrease",
  status : "DOING",
  AssignedTo : [""]
 },
 {
  id : "67" , 
  title : " Optimize Downstream Supply Chain ",

  priority : "increase",
  status : "CANCEL",
  AssignedTo : [""]
} , 
 

]


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [tasks , setTasks ] = useState<task[]>([])
 
  const set_loading = loading_Reducer(state => state.set_isLoading)

  // get all the tasks 
 
  // useEffect(() => {
  //   if( tasksGet.isFetching  ){
  //     set_loading(true)
  //   }
  // }, [   set_loading , tasksGet.isFetching ])

  // prepare the items to be handled by the table
  // AssignTaskPopUp
  // const satisfieTable = () : ItemTable[] => {
  //   const array : ItemTable[] =  tasks.map(item => {
  //     return  {
  //       id : item.id ,
  //       callback : (id : string) => console.log(id),
  //       properties : [item.name , item.status, <ChangeStatusPopUp refetch={tasksGet.refetch} taskName={item.name} id={item.id} key={item.id} />]
  //     } 
  //   })
  //   return array
  // }
  return (
    <>
      <Head>
      <title>ProjectFlow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className=" custopn-page-height overflow-y-auto  flex w-full bg-gray-50 ">
       <ExecutingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={` ${isOpen ? "ml-[20rem]" : "ml-[0]"} w-full overflow-y-auto  h-fit min-h-[400px]`}>
        <div className="w-full h-[50px] flex items-center pl-4 justify-start">
            <h1 className="text-xl  text-gray-800 font-bold  ml-4"> Suivi des tâches avec tableau Kanban</h1>
        </div>
        <TaskEndDone />
        <BoardContainer   tasks={tasksTyped}/>
      </div>
      </main>
    </>
  );
};

export default Page;