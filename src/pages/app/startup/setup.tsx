/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type NextPage } from "next";
import { FormEvent, useEffect } from "react";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { Input } from "~/components/ui/used/Input";
import { TextField } from "~/components/ui/used/TextField";
import { userReducer } from "~/store/userReducer";
import { FormButton } from "~/components/ui/used/FormButton";
import { TimePicker } from "~/components/ui/TimePicker";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";

import { api } from "~/utils/api";
import { toast } from "react-toastify";

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
  const project_id = userReducer(state => state.project_id)
  const set_loading = loading_Reducer(state => state.set_isLoading)

 

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
  const {isFetching , refetch} = api.inisiatorRouter.getprojectStartUp.useQuery({project_id} , {
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
      set_loading(false)
    },
    onError(err) {
      console.log(err.message)
      set_loading(false)
    },
  })

  const post = api.inisiatorRouter.createProkectDetails.useMutation({
    onSuccess : async () => {
      toast.update(id_abdullah, { render: "All is good", type: "success", isLoading: false });
      await refetch()
      set_loading(false)
    },
    onError(){
      toast.update(id_abdullah, { render: "fiald to load", type: "error", isLoading: false });
      set_loading(false)
    }
  })

  const update = api.inisiatorRouter.updateProkectDetails.useMutation({
    onSuccess : async () => {

      toast.update(id_abdullah, { render: "All is good", type: "success", isLoading: false });
      await refetch()
      set_loading(false)
    },
    onError(){
      toast.update(id_abdullah, { render: "fiald to load", type: "error", isLoading: false });
      set_loading(false)
    }
  })

  useEffect(() => {
    if(isFetching){
      set_loading(true)
    }else{
      set_loading(false)
    }
  }, [ isFetching , set_loading])
  

    const handleCreate = (event : FormEvent) => {
      //todo handle this later
      event.preventDefault()
     
      console.log(formData)
      post.mutate({
        client : formData.client ,
        conflitManagment : formData.conflitManagment ,
        dateToEnd : endDate ,
        dateToStart : startDate ,
        estimatedBudget : formData.estimatedBudget ,
        project_id ,
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
        project_id ,
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
       <Sidebar />
       <FormContainer>
      <FormHead text="👉 manage your cost" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
            <TextField
                lable="Intitulé de projet "
                onChange={(e) => {
                  setFormData({...formData , title : e.target.value})
                  
                }}
                value={formData.title}
             />
              <div className="col-span-6">
           <TimePicker 
            lable="sélectionner une heure à laquelle ce projet doit commencer et se terminer"
            startDate ={startDate}
            setStartDate ={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}

            />
           </div>
            <Input
                lable="chef de projet"
                onChange={(e) => setFormData({...formData , projectManager : e.target.value})}
                value={formData.projectManager}
            />
             <Input
                lable="Sponsor de projet "
                onChange={(e) => setFormData({...formData , sponsor : e.target.value})}
                value={formData.sponsor}
            />
             <Input
                lable="Client"
                onChange={(e) => setFormData({...formData , client : e.target.value})}
                value={formData.client}
            />
             <Input
                lable="Nom du directeur Régional"
                onChange={(e) => setFormData({...formData , regionalDirector : e.target.value})}
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