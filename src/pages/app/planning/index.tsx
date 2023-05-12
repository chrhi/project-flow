/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Input } from "~/components/ui/used/Input";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { FormButton } from "~/components/ui/used/FormButton";
import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";



const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  const [formData , setFormData] = useState({
    ScopeStatementDevelopment :"",
    WBSStructure :"",
    WBSDictionary :"",
    ScopeBaselineMaintenance :"",
    ScopeChange :"",
    DeliverableAcceptance :"" ,
    ScopeAndRequirementsIntegration : "",
   
  })
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [isData , setIsData] = useState<boolean>(false)

  const post = api.scopeRouter.createProjectScope.useMutation({
    onSuccess:  async () => {
      toast("data has been updated",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
       await  get.refetch()
    },
    onError : () => {
      toast("something went wrong ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
    }
  })
  
  const update = api.scopeRouter.updateProjectScope.useMutation({
    onSuccess: async () => {
      toast("data has been updated",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
      await  get.refetch()
    },
    onError : () => {
      toast("something went wrong ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
    }
  })
  const get = api.scopeRouter.getProjectScope.useQuery({project_id : getProjectMetaData()} , {
    onSuccess:  (data: { DeliverableAcceptance: any; ScopeAndRequirementsIntegration: any; ScopeBaselineMaintenance: any; ScopeChange: any; ScopeStatementDevelopment: any; WBSDictionary: any; WBSStructure: any; }) => {
      if(data.DeliverableAcceptance || data.ScopeAndRequirementsIntegration || data.WBSDictionary || data.WBSStructure){
        setIsData(true)
      }
      setFormData({
        DeliverableAcceptance : data.DeliverableAcceptance || "" ,
        ScopeAndRequirementsIntegration : data.ScopeAndRequirementsIntegration || "" ,
        ScopeBaselineMaintenance : data.ScopeBaselineMaintenance  || "", 
        ScopeChange : data.ScopeChange || "" ,
        ScopeStatementDevelopment : data.ScopeStatementDevelopment || "" ,
        WBSDictionary : data.WBSDictionary || "" ,
        WBSStructure : data.WBSStructure || ""
      })
     
      set_loading(false)
    },
    onError : () => {
      toast("something went wrong ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
    }
  })
  useEffect(() => {
    if(get.isFetching){
      set_loading(true)
    }
  }, [ get.isFetching , set_loading])

  const handleUpdate = () => {
    set_loading(true)
    update.mutate({
      project_id : getProjectMetaData(),
      DeliverableAcceptance : formData.DeliverableAcceptance ,
      ScopeAndRequirementsIntegration : formData.ScopeAndRequirementsIntegration ,
      ScopeBaselineMaintenance : formData.ScopeBaselineMaintenance ,
      ScopeChange : formData.ScopeChange ,
      ScopeStatementDevelopment : formData.ScopeStatementDevelopment ,
      WBSDictionary : formData.WBSDictionary ,
      WBSStructure : formData.WBSStructure 
    })
  }
  
  const handleSubmit = () => {
    set_loading(true)
    post.mutate({
      project_id : getProjectMetaData(),
      DeliverableAcceptance : formData.DeliverableAcceptance ,
      ScopeAndRequirementsIntegration : formData.ScopeAndRequirementsIntegration ,
      ScopeBaselineMaintenance : formData.ScopeBaselineMaintenance ,
      ScopeChange : formData.ScopeChange ,
      ScopeStatementDevelopment : formData.ScopeStatementDevelopment ,
      WBSDictionary : formData.WBSDictionary ,
      WBSStructure : formData.WBSStructure 
    })
  }
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
      <FormHead text="👉 build the project managment scope" />
      
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
        
          <TextField 
          lable=" Scope Statement Development"
          onChange={({target}) => setFormData({...formData , ScopeStatementDevelopment : target.value})} 
          value={formData.ScopeStatementDevelopment}
          />
          <TextField 
          lable=" WBS Structure"
          onChange={({target}) => setFormData({...formData , WBSStructure : target.value})} 
          value={formData.WBSStructure}
          />
          <TextField 
          lable=" WBS Dictionary"
          onChange={({target}) => setFormData({...formData , WBSDictionary : target.value})} 
          value={formData.WBSDictionary}
          />
          <TextField 
          lable=" Scope Baseline Maintenance"
          onChange={({target}) => setFormData({...formData , ScopeBaselineMaintenance : target.value})} 
          value={formData.ScopeBaselineMaintenance}
          />

          <TextField 
          lable=" Scope Change"
          onChange={({target}) => setFormData({...formData , ScopeChange : target.value})} 
          value={formData.ScopeChange}
          />

          <TextField 
          lable=" Deliverable Acceptance"
          onChange={({target}) => setFormData({...formData , DeliverableAcceptance : target.value})} 
          value={formData.DeliverableAcceptance}
          />

        <TextField 
          lable=" Scope and Requirements Integration"
          onChange={({target}) => setFormData({...formData , ScopeAndRequirementsIntegration : target.value})} 
          value={formData.ScopeAndRequirementsIntegration}
          />


         
        </div>
      </div>
    <FormButton
    state ={isData}
    isLoading ={post.isLoading || update.isLoading}
    create={handleSubmit}
    update={handleUpdate}

    />
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;