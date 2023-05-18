/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import {  useState} from "react"
import { TextField } from "~/components/used/TextField";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { FormButton } from "~/components/used/FormButton";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { RowGridText } from "~/components/typography/RowGridText";



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
    
      
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          <RowGridText text="Project scope management " />
          <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         
          <TextField 
           isLoading={get.isFetching }
          lable=" Scope Statement Development"
          onChange={({target}) => setFormData({...formData , ScopeStatementDevelopment : target.value})} 
          value={formData.ScopeStatementDevelopment}
          />
          <TextField 
          isLoading={get.isFetching }
          lable=" WBS Structure"
          onChange={({target}) => setFormData({...formData , WBSStructure : target.value})} 
          value={formData.WBSStructure}
          />
          <TextField 
          isLoading={get.isFetching }
          lable=" WBS Dictionary"
          onChange={({target}) => setFormData({...formData , WBSDictionary : target.value})} 
          value={formData.WBSDictionary}
          />
          <TextField 
          isLoading={get.isFetching }
          lable=" Scope Baseline Maintenance"
          onChange={({target}) => setFormData({...formData , ScopeBaselineMaintenance : target.value})} 
          value={formData.ScopeBaselineMaintenance}
          />

          <TextField 
          isLoading={get.isFetching }
          lable=" Scope Change"
          onChange={({target}) => setFormData({...formData , ScopeChange : target.value})} 
          value={formData.ScopeChange}
          />

          <TextField 
          isLoading={get.isFetching }
          lable=" Deliverable Acceptance"
          onChange={({target}) => setFormData({...formData , DeliverableAcceptance : target.value})} 
          value={formData.DeliverableAcceptance}
          />

        <TextField 
          isLoading={get.isFetching }
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