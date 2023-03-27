/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useEffect, useState } from "react";
import { Form } from "~/components/ui/used/Form";
import { FormButton } from "~/components/ui/used/FormButton";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { TextField } from "~/components/ui/used/TextField";
import { userReducer } from "~/store/userReducer";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
interface inputSchema {
  projectObjectOpportunity : string ,
  projectDescription : string ,
  highLevelRequirement : string ,
 hightLevelRisks : string,

}


export const FirstForm = () => {
  const project_id = userReducer(state => state.project_id)
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [formData , setFormData] = useState<inputSchema>({
    projectObjectOpportunity : "",
    projectDescription : "",
    highLevelRequirement : "",
    hightLevelRisks : "",
 
  })
  const [didGetData , setDidGetData] = useState<boolean>(false)
  const {isFetching , refetch} = api.ProjectDetailsRouter.getProjectDetails.useQuery({project_id} , {
    onSuccess(data) {
      if(data.projectObjectOpportunity || data.projectDescription || data.highLevelRequirement || data.hightLevelRisks){
        setDidGetData(true)
      
      }
      setFormData({
        
        projectObjectOpportunity : data.projectObjectOpportunity as string  || "",
        projectDescription : data.projectDescription as string || "" , 
        highLevelRequirement : data.highLevelRequirement as string  || "",
        hightLevelRisks : data.hightLevelRisks as string || "" , 
      })
      set_loading(false)
    },
    onError() {
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
      set_loading(false)
    },
  })

  const post = api.ProjectDetailsRouter.createProjectDetails.useMutation({
    onSuccess : async () => {
     
      await refetch()
      set_loading(false)
    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
      set_loading(false)
    }
  })

  const update = api.ProjectDetailsRouter.updateProjectDetailsNow.useMutation({
    onSuccess : async () => {

     
      await refetch()
      set_loading(false)
    },
    onError(err){
      console.log(err)
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
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
   
   
    post.mutate({
     highLevelRequirement : formData.highLevelRequirement ,
     hightLevelRisks : formData.hightLevelRisks ,
     projectDescription : formData.projectDescription ,
     projectObjectOpportunity : formData.projectObjectOpportunity ,
     project_id 
    })
  }
  const handleUpdate = (event : FormEvent) => {
    //todo handle later
    event.preventDefault()
  
    update.mutate({
      highLevelRequirement : formData.highLevelRequirement ,
     hightLevelRisks : formData.hightLevelRisks ,
     projectDescription : formData.projectDescription ,
     projectObjectOpportunity : formData.projectObjectOpportunity ,
     project_id 
      
    })
  }


  return (
    <FormContainer>
      <FormHead text="👉remplir les informations nécessaires du projet" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <TextField
            lable="Objectif et opportunité de projet :  "
            onChange={(e) => setFormData({...formData ,projectObjectOpportunity : e.target.value})}
            value={formData.projectObjectOpportunity}
          />
          <TextField
            lable="Description de projet :   "
            onChange={(e) => setFormData({...formData ,projectDescription : e.target.value})}
            value={formData.projectDescription}
          />
          <TextField
            lable="Exigences à haut niveau :  "
            onChange={(e) => setFormData({...formData ,highLevelRequirement : e.target.value})}
            value={formData.highLevelRequirement}
          />
          <TextField
            lable="Risques à haut niveau :  "
            onChange={(e) => setFormData({...formData ,hightLevelRisks : e.target.value})}
            value={formData.hightLevelRisks}
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
  )
}

