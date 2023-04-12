import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "~/components/common/Header";
import { ExecutingSidebar } from "~/components/sideBars/ExecutingSidebar";
import { AssignTaskPopUp } from "~/components/ui/plusTable/executing/AssignTaskPopUp";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { getProjectMetaData } from "~/lib/MetaData";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { task } from "~/types/type";
import { api } from "~/utils/api";

//todo 
//get the tasks data 
// handle each state 
// get and display the data 
// buid the ui for assigning new task 
const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  const [tasks , setTasks ] = useState<task[]>([])
  const [stakholders , setStakHolders ] = useState<[]>([])
  const set_loading = loading_Reducer(state => state.set_isLoading)

  // get all the tasks 
  const tasksGet = api.tasksRouter.getAllTasks.useQuery({project_id : getProjectMetaData()},{
    onSuccess(data) {
      setTasks(data as task[])
    
    
      set_loading(false)
    },
    onError(err) {
      console.log(err)
      toast("error fetching the tasks  ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
       },
  })

  useEffect(() => {
    if( tasksGet.isFetching){
      set_loading(true)
    }
  }, [   set_loading , tasksGet.isFetching])

  // prepare the items to be handled by the table
  // AssignTaskPopUp
  const satisfieTable = () : ItemTable[] => {
    const array : ItemTable[] =  tasks.map(item => {
      return  {
        id : item.id ,
        callback : (id : string) => console.log(id),
        properties : [item.name , "here goes all the stakholders" , <AssignTaskPopUp refetch={tasksGet.refetch} taskName={item.name} key={item.id} />]
      } 
    })
    return array
  }
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
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <ExecutingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[5rem]"}`}>
      <FormHead text="👉 assign each task to stakholder" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 ">
             <AbdullahTable 
                Action={false}
                ActionName="Assign"
                title="manage tskas assignment "
                 descripton="lorem this is just a log text that has to be very good"
                 headers={["task" , "assigned to " , "Actions "]}
                 body={satisfieTable()}
                 />
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