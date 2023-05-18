/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type NextPage } from "next";
import type { FormEvent } from "react";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/Sidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { Input } from "~/components/used/Input";
import { TextField } from "~/components/used/TextField";
import { FormButton } from "~/components/used/FormButton";
import { TimePicker } from "~/components/used/TimePicker";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { RowGridText } from "~/components/typography/RowGridText";
import NewTimePicker from "~/components/used/NewTimePicker";



interface inputSchema {
  
  title : string,
  sponsor : string , 
  projectManager : string , 
  client : string , 
  dateToStart : string ,
  dateToEnd : string , 
  projectManagerAuthority : string , 
  staffDecision : string , 
  conflitManagment : string , 
  regionalDirector : string , 
  estimatedBudget : number 
}

const Page: NextPage = () => {

  let id_abdullah : any 
  
  

  const [isOpen , setIsOpen] = useState<boolean>(true)

  const [startDate , setStartDate] = useState<Date>(new Date())
  const [endDate , setEndDate] = useState<Date>(new Date())
  const [formData , setFormData] = useState<inputSchema>({
    
    title : "",
    sponsor : "" , 
    projectManager : "" , 
    client : "" , 
    dateToStart : "" ,
    dateToEnd : "" , 
    projectManagerAuthority : "" , 
    staffDecision : "" , 
    conflitManagment : "" , 
    regionalDirector : "" , 
    estimatedBudget : 0
  })
  const [didGetData , setDidGetData] = useState<boolean>(false)
  const {isFetching , refetch} = api.inisiatorRouter.getprojectStartUp.useQuery({project_id : getProjectMetaData()} , {
    onSuccess(data) {
      if(data.title && data.sponsor && data.projectManager){
        setDidGetData(true)
      
      }
      setFormData({
        
        title : data.title as string  || "",
        sponsor : data.sponsor as string || "" , 
        projectManager : data.projectManager as string || "" , 
        client : data.client as string || "" , 
        dateToStart : data.dateToStart as string || "" ,
        dateToEnd : data.dateToEnd as string || "" , 
        projectManagerAuthority : data.projectManagerAuthority as string || "" , 
        staffDecision : data.staffDecision as string || "" , 
        conflitManagment : data.conflitManagment as string || "", 
        regionalDirector : data.regionalDirector as string || "" , 
        estimatedBudget : data.estimatedBudget as number || 0
      })
   
    },
    onError(err) {
      console.log(err.message)
    
    },
  })

  const post = api.inisiatorRouter.createProkectDetails.useMutation({
    onSuccess : async () => {
      toast.update(id_abdullah, { render: "All is good", type: "success", isLoading: false });
      await refetch()
   
    },
    onError(){
      toast.update(id_abdullah, { render: "fiald to load", type: "error", isLoading: false });
     
    }
  })

  const update = api.inisiatorRouter.updateProkectDetails.useMutation({
    onSuccess : async () => {

      toast.update(id_abdullah, { render: "All is good", type: "success", isLoading: false });
      await refetch()
     
    },
    onError(){
      toast.update(id_abdullah, { render: "fiald to load", type: "error", isLoading: false });
    
    }
  })


  

    const handleCreate = (event : FormEvent) => {
      //todo handle this later
      event.preventDefault()
     
    
      post.mutate({
        client : formData.client ,
        conflitManagment : formData.conflitManagment ,
        dateToEnd : endDate ,
        dateToStart : startDate ,
        estimatedBudget : formData.estimatedBudget ,
        project_id : getProjectMetaData() ,
        projectManager : formData.projectManager ,
        projectManagerAuthority : formData.projectManagerAuthority || "" ,
        regionalDirector : formData.regionalDirector ,
        sponsor : formData.sponsor ,
        staffDecision : formData.staffDecision || "" ,
        title : formData.title 
        
      })
    }
    const handleUpdate = (event : FormEvent) => {
      //todo handle later
      event.preventDefault()
      id_abdullah = toast.loading("Please wait...")
      update.mutate({
        client : formData.client ,
        conflitManagment : formData.conflitManagment ,
        dateToEnd : endDate ,
        dateToStart : startDate ,
        estimatedBudget : Number(formData.estimatedBudget)  ,
        project_id : getProjectMetaData(),
        projectManager : formData.projectManager ,
        projectManagerAuthority : formData.projectManagerAuthority || "" ,
        regionalDirector : formData.regionalDirector ,
        sponsor : formData.sponsor ,
        staffDecision : formData.staffDecision || "" ,
        title : formData.title
        
      })
    }
    

  

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
        
       <Sidebar 
           setIsOpen ={setIsOpen} 
         
           isOpen = {isOpen}
          
        />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
  
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6 ">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <RowGridText text="Starting up the project " />
            <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         
            <TextField
                isLoading={isFetching}
                lable="Intitulé de projet "
                onChange={(e) => {
                  setFormData({...formData , title : e.target.value})
                  
                }}
                value={formData.title}
             />
              <div className="col-span-6">
          
            <NewTimePicker  isLoading={isFetching} text="sélectionner une heure à laquelle ce projet doit commencer et se terminer"/>
           </div>
           
             <TextField
            isLoading={isFetching}
            lable="Objectif et opportunité de projet :  "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          <TextField
            isLoading={isFetching}
            lable="Description de projet :   "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          <TextField
            isLoading={isFetching}
            lable="Exigences à haut niveau :  "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          <TextField
            isLoading={isFetching}
            lable="Risques à haut niveau :  "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          
             <FormButton
        isLoading={post.isLoading || update.isLoading}
        state={didGetData}
        create={handleCreate}
        update={handleUpdate}
             />
        </div>

      </div>
     
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;