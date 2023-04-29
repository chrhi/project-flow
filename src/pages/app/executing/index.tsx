import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "~/components/common/Header";
import { ExecutingSidebar } from "~/components/sideBars/ExecutingSidebar";
import { AssignTaskPopUp } from "~/components/ui/plusTable/executing/AssignTaskPopUp";
import { ChangeStatusPopUp } from "~/components/ui/plusTable/executing/ChangeStatusPopUp";
import { StakeHolder } from "~/components/ui/popup/StakeHolder";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { getProjectMetaData } from "~/lib/MetaData";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { task } from "~/types/type";
import { api } from "~/utils/api";


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  const [tasks , setTasks ] = useState<task[]>([])
 
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
    if( tasksGet.isFetching  ){
      set_loading(true)
    }
  }, [   set_loading , tasksGet.isFetching ])

  // prepare the items to be handled by the table
  // AssignTaskPopUp
  const satisfieTable = () : ItemTable[] => {
    const array : ItemTable[] =  tasks.map(item => {
      return  {
        id : item.id ,
        callback : (id : string) => console.log(id),
        properties : [item.name , item.status, <ChangeStatusPopUp refetch={tasksGet.refetch} taskName={item.name} id={item.id} key={item.id} />]
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
      <FormHead text="👉status tracking" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 ">
             <AbdullahTable 
                Action={false}
                ActionName="change"
                title=" progress of individual tasks"
                 descripton="This is the process of tracking the progress of individual tasks "
                 headers={["task" , "status " , "Actions "]}
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