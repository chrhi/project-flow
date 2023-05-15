/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useEffect, useState } from "react";
import { Form } from "~/components/ui/used/Form";
import { FormButton } from "~/components/ui/used/FormButton";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { TextField } from "~/components/ui/used/TextField";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { Sidebar } from "~/components/sideBars/Sidebar";

interface inputSchema {
  projectObjectOpportunity : string ,
  projectDescription : string ,
  highLevelRequirement : string ,
 hightLevelRisks : string,

}


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)



  const [formData , setFormData] = useState<inputSchema>({
    projectObjectOpportunity : "",
    projectDescription : "",
    highLevelRequirement : "",
    hightLevelRisks : "",
 
  })
  const [didGetData , setDidGetData] = useState<boolean>(false)
  const {isFetching , refetch} = api.ProjectDetailsRouter.getProjectDetails.useQuery({project_id : getProjectMetaData()} , {
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
     
    },
    onError() {
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
     
    },
  })

  const post = api.ProjectDetailsRouter.createProjectDetails.useMutation({
    onSuccess : async () => {
     
      await refetch()

    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
     
    }
  })

  const update = api.ProjectDetailsRouter.updateProjectDetailsNow.useMutation({
    onSuccess : async () => {

     
      await refetch()
     
    },
    onError(err){
      console.log(err)
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
     
    }
  })
  
  const handleCreate = (event : FormEvent) => {
    //todo handle this later
    event.preventDefault()
   
   
    post.mutate({
     highLevelRequirement : formData.highLevelRequirement ,
     hightLevelRisks : formData.hightLevelRisks ,
     projectDescription : formData.projectDescription ,
     projectObjectOpportunity : formData.projectObjectOpportunity ,
     project_id  :  getProjectMetaData()
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
     project_id :  getProjectMetaData()
      
    })
  }

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
      <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
          <TextField
            isLoading={isFetching}
            lable="Objectif et opportunité de projet :  "
            onChange={(e) => setFormData({...formData ,projectObjectOpportunity : e.target.value})}
            value={formData.projectObjectOpportunity}
          />
          <TextField
            isLoading={isFetching}
            lable="Description de projet :   "
            onChange={(e) => setFormData({...formData ,projectDescription : e.target.value})}
            value={formData.projectDescription}
          />
          <TextField
            isLoading={isFetching}
            lable="Exigences à haut niveau :  "
            onChange={(e) => setFormData({...formData ,highLevelRequirement : e.target.value})}
            value={formData.highLevelRequirement}
          />
          <TextField
            isLoading={isFetching}
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

      </main>
    </>
  );
};

export default Page;




