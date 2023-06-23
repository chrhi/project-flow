import {   useState} from "react"
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { RowGridText } from "~/components/typography/RowGridText";
import { DataTable } from "~/components/common/constants/tasks-table/data-table";
import { TaskType , columns } from "~/components/common/constants/tasks-table/column"
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import { toast } from "react-hot-toast";
import { ConfirmDeleteTask } from "~/components/popup/table-confirm/confirm-delete-task";



const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  const [tasks  , setTasks] = useState<TaskType[]>([] as TaskType[] )
  const {isLoading , refetch} = api.tasksRouter.getTasks.useQuery({projectId : getProjectMetaData()},{
    onSuccess : (data) => {
        const prepare = data.map(item => {
          return {
            id : item.id || "" , 
            title : item.title || "" ,
            description : item.description || "" , 
            priority : item.Priority || "" ,
            dueDate   : item.StartAt || "" , 
            endsAt : item.EndsAt || "" ,
            cost  : item.cost || "" ,
            assignTo : item.AssignedTo || "" , 
            allocatedRessources : item.AlocatedRessources || ""
          }
        })
        setTasks(prepare as TaskType[])
    },
    onError : (err) => {
      toast.error(err.message)
    }
  })
  
 


  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
        <ConfirmDeleteTask  refetch={refetch} />
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[5rem]"}`}>
  
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          <RowGridText text="Plan de gestion des communications" />
          <RowGridText small text="Le plan de gestion des communications est un document qui établit une approche structurée pour gérer les communications au sein d'un projet, comprenant les objectifs de communication, les parties prenantes, les méthodes de communication, le calendrier, et les responsabilités associées." />
          <div className="col-span-12 pt-8 ">
                <DataTable  columns={columns} data={tasks} refetch={refetch} />
          </div>
        </div>  
      </div>
      
     
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;