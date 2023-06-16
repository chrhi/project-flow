import { type NextPage } from "next";
import type { FormEvent } from "react";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { TextField } from "~/components/used/TextField";
import { FormButton } from "~/components/used/FormButton";
import { RowGridText } from "~/components/typography/RowGridText";
import NewTimePicker from "~/components/used/NewTimePicker";
import type { DateRangePickerValue } from "@tremor/react";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import { toast } from "react-hot-toast";



const Page: NextPage = () => {

  let id_abdullah : any 
  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [value , setValue] = useState<DateRangePickerValue>({
    from : new Date(),
    to : new Date()
  })
  const [formData , setFormData] = useState({
    id : "",
    Title :"",
    ProjectObjectiveAndOpportunity :"",
    ProjectDescription : "",
    HighLevelRequirements : "",
    HighLevelRisks : ""
  })
  const [didGetData , setDidGetData] = useState<boolean>(false)

  const {isLoading , refetch} = api.startupRouter.dataGet.useQuery({projectId : getProjectMetaData()}, {
    retryOnMount : false ,
    onSuccess(data) {
      if(data?.id ){
        setDidGetData(true)
      }
      setFormData({
        id : data?.id || "",
        Title : data?.HighLevelRequirements  || "", 
        HighLevelRequirements : data?.HighLevelRequirements  || "", 
        HighLevelRisks : data?.HighLevelRisks || "" , 
        ProjectDescription : data?.ProjectDescription || "" , 
        ProjectObjectiveAndOpportunity : data?.ProjectObjectiveAndOpportunity || ""
      })
    },
    onError(err) {
      console.log(err)
      toast.error("something went wrong")
    },
  })
 const  post = api.startupRouter.dataAdd.useMutation( {
    onSuccess : async (data) =>  {
      setFormData({
        id : data?.id || "",
        Title : data?.HighLevelRequirements  || "", 
        HighLevelRequirements : data?.HighLevelRequirements  || "", 
        HighLevelRisks : data?.HighLevelRisks || "" , 
        ProjectDescription : data?.ProjectDescription || "" , 
        ProjectObjectiveAndOpportunity : data?.ProjectObjectiveAndOpportunity || ""
      })
      toast.success("mise à jour réussie")
      await refetch()
    },
    onError(err) {
      console.log(err)
      toast.error("quelque chose s'est mal passé")
    },
  })
  const  update = api.startupRouter.dataUpdate.useMutation( {
    onSuccess : async (data) =>  {
      setFormData({
        id : data?.id || "",
        Title : data?.HighLevelRequirements  || "", 
        HighLevelRequirements : data?.HighLevelRequirements  || "", 
        HighLevelRisks : data?.HighLevelRisks || "" , 
        ProjectDescription : data?.ProjectDescription || "" , 
        ProjectObjectiveAndOpportunity : data?.ProjectObjectiveAndOpportunity || ""
      })
      toast.success("mise à jour réussie")
      await refetch()
    },
    onError(err) {
      console.log(err)
      toast.error("quelque chose s'est mal passé")
    },
  })

  

    const handleCreate = (event : FormEvent) => {
      //todo handle this later
      event.preventDefault()
      if(!formData.id || !formData.HighLevelRequirements || !formData.HighLevelRisks || !formData.ProjectDescription || !formData.ProjectObjectiveAndOpportunity || !formData.ProjectObjectiveAndOpportunity || !formData.Title ){
        toast("certains champs sont videssome fields are empty ")
      }
      post.mutate({
        projectId : getProjectMetaData() ,
        HighLevelRequirements : formData.HighLevelRequirements,
        HighLevelRisks : formData.HighLevelRisks , 
        ProjectDescription : formData.ProjectDescription , 
        ProjectObjectiveAndOpportunity : formData.ProjectObjectiveAndOpportunity,
        Title : formData.Title
      })
    }
    const handleUpdate = (event : FormEvent) => {
      //todo handle later
      event.preventDefault()
      if(!formData.id || !formData.HighLevelRequirements || !formData.HighLevelRisks || !formData.ProjectDescription || !formData.ProjectObjectiveAndOpportunity || !formData.ProjectObjectiveAndOpportunity || !formData.Title ){
        toast("certains champs sont videssome fields are empty ")
      }
      update.mutate({
        id : formData.id ,
        HighLevelRequirements : formData.HighLevelRequirements,
        HighLevelRisks : formData.HighLevelRisks , 
        ProjectDescription : formData.ProjectDescription , 
        ProjectObjectiveAndOpportunity : formData.ProjectObjectiveAndOpportunity,
        Title : formData.Title
      })
    }
    

  

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 dark:bg-neutral-800 ">
        
       <Sidebar 
           setIsOpen ={setIsOpen} 
         
           isOpen = {isOpen}
          
        />
       <FormContainer className ={` ${isOpen ? "lg:ml-[20rem]" : "ml-[0]"}`}>
  
      <Form >
      <div className="bg-white dark:bg-neutral-900 px-4 py-5 sm:p-6 ">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <RowGridText text="Starting up the project " />
            <RowGridText small text=" During the project startup phase, it is important to define clear objectives, analyze stakeholders, establish governance, develop a project charter, and identify potential risks" />
         
            <TextField
                isLoading={isLoading}
                lable="Intitulé de projet "
                onChange={(e) => {
                  setFormData({...formData , Title : e.target.value})
                  
                }}
                value={formData.Title}
             />
              <div className="col-span-6">
          
            <NewTimePicker value={value} setValue={setValue} text="sélectionner une heure à laquelle ce projet doit commencer et se terminer"/>
           </div>
           
             <TextField
            isLoading={isLoading}
            lable="Objectif et opportunité de projet :  "
            onChange={(e) => setFormData({...formData ,ProjectObjectiveAndOpportunity : e.target.value})}
            value={formData.ProjectObjectiveAndOpportunity}
          />
          <TextField
            isLoading={isLoading}
            lable="Description de projet :   "
            onChange={(e) => setFormData({...formData ,ProjectDescription : e.target.value})}
            value={formData.ProjectDescription}
          />
          <TextField
            isLoading={isLoading}
            lable="Exigences à haut niveau :  "
            onChange={(e) => setFormData({...formData ,HighLevelRequirements : e.target.value})}
            value={formData.HighLevelRequirements}
          />
          <TextField
            isLoading={isLoading}
            lable="Risques à haut niveau :  "
            onChange={(e) => setFormData({...formData ,HighLevelRisks : e.target.value})}
            value={formData.HighLevelRisks}
          />
          
             <FormButton
        isLoading={update.isLoading || post.isLoading}
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