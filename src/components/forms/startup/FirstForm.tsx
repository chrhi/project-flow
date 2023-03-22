/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { api } from "~/utils/api";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { userReducer } from "~/store/userReducer";
import { TextField } from "~/components/ui/used/TextField";
import { Input } from "~/components/ui/used/input";


type inputsType ={
  titre:string , 
  NeedForOrganization:string,
  ProjectRequirements:string,
  ProductDescription:string,
  ThePojectDoesNotInclude:string , 
  PreApprovedResources : string,

}

//see the docs 
//https://trpc.io/docs/useMutation

export const FirstForm = () => {
  //defined the hooks
  const set_isLoading = loading_Reducer(state => state.set_isLoading)

  const id = userReducer(state => state.id)
  const [formData , setFormData] = useState<inputsType>({
    NeedForOrganization:"",
    PreApprovedResources:"",
    ProductDescription:"",
    ProjectRequirements:"",
    ThePojectDoesNotInclude:"",
    titre:""
  })

  
  const [didGetData , setDidGetData] = useState<boolean>(false)


  //trpc hook 
  const {   refetch , isFetching }= api.startup.gatProjectDetails.useQuery({id } , {
    onSuccess(data) {
      if(data?.data[0]?.titre && data?.data[0]?.PreApprovedResources &&  data?.data[0]?.NeedForOrganization && data?.data[0]?.ProductDescription && data?.data[0]?.ProjectRequirements  && data?.data[0]?.ThePojectDoesNotInclude){
        setDidGetData(true)
      }
      setFormData({
        titre : data?.data[0]?.titre || "",
        NeedForOrganization : data?.data[0]?.NeedForOrganization || "",
        PreApprovedResources : data?.data[0]?.PreApprovedResources || "",
        ProductDescription : data?.data[0]?.ProductDescription || "",
        ProjectRequirements : data?.data[0]?.ProjectRequirements || "",
        ThePojectDoesNotInclude : data?.data[0]?.ThePojectDoesNotInclude || "",
      })
      set_isLoading(false)
    },
    onError() {
      toast("some things wents wrong ",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
  })
   // This can either be a tuple ['login'] or string 'login'
   const mutation = api.startup.uploadProjectDetails.useMutation({
    onSuccess() {
      refetch().then(data => console.log(data)).catch(error => console.log(error))
      toast("changes saved seccusfully",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
    
  })

  const mutationUpdate = api.startup.updateProjectDetails.useMutation({
    onSuccess() {
      refetch().then(data => console.log(data)).catch(error => console.log(error))
      toast("changes updated  seccusfully",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
    
  })



  const HandleSubmit =  (e : FormEvent) => {
    e.preventDefault()
    set_isLoading(true)
   if(!formData.titre || !formData.NeedForOrganization|| !formData.ProjectRequirements || !formData.NeedForOrganization || !formData.ThePojectDoesNotInclude || !formData.PreApprovedResources ){
    toast("tous les liens sont requis",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
    return
   }
   mutation.mutate({
    id,
    title:formData.titre ,
    NeedForOrganization:formData.NeedForOrganization ,
    ProjectRequirements:formData.ProjectRequirements,
    ProductDescription:formData.NeedForOrganization,
    ThePojectDoesNotInclude: formData.ThePojectDoesNotInclude ,
    PreApprovedResources: formData.PreApprovedResources
  })

  console.log(formData)
  }

  const habdleUpdate = (e : FormEvent) => {
    set_isLoading(true)
    e.preventDefault()
    if(!formData.titre || !formData.NeedForOrganization|| !formData.ProjectRequirements || !formData.NeedForOrganization || !formData.ThePojectDoesNotInclude || !formData.PreApprovedResources ){
     toast("tous les liens sont requis",{
       className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
       hideProgressBar: true,
      })
     return
    }
    mutationUpdate.mutate({
      id,
      title:formData.titre ,
      NeedForOrganization:formData.NeedForOrganization ,
      ProjectRequirements:formData.ProjectRequirements,
      ProductDescription:formData.ProductDescription,
      ThePojectDoesNotInclude: formData.ThePojectDoesNotInclude ,
      PreApprovedResources: formData.PreApprovedResources
    })
  }

  
  useEffect(()=> {
    if(isFetching){
      set_isLoading(true)
    }else{ set_isLoading(false)}
  },[ set_isLoading ,  isFetching])
 






  return (
   <div className='ml-[16rem] custopn-page-height custom-width  custom-scroll-bar flex flex-col items-center pt-4'>
   <div className="w-full h-[50px] flex items-center justify-start p-4 ">
   <h1 className="text-2xl font-bold text-start text-gray-900">👉remplir les informations nécessaires du projet</h1>
   </div>

        <Form onSubmit={(e) => HandleSubmit(e)}>

    
        
          <Input
            lable="title" 
            onChange={(e) => setFormData({...formData , titre: e.target.value})} 
            value={formData && formData.titre }
          />
          <TextField 
          lable=" Besoin de l'organisation / objectifs du projet"
          onChange={(e) => setFormData({...formData , NeedForOrganization: e.target.value})}
          value={formData && formData.NeedForOrganization }
          />
         
          <TextField 
          lable=" Exigences  du projet"
          onChange={(e) => setFormData({...formData , ProjectRequirements: e.target.value})}
          value={formData && formData.ProjectRequirements }
          />
        
          <TextField 
          lable="   Description du produit / des livrables"
          onChange={(e) => setFormData({...formData , ProductDescription: e.target.value})}
          value={formData && formData.ProductDescription }
          />
       
          <TextField 
          lable=" Le projet n'inclut pas "
          onChange={(e) => setFormData({...formData , ThePojectDoesNotInclude: e.target.value})}
          value={formData && formData.ThePojectDoesNotInclude }
          />
     
          <TextField  
          lable="Ressources preapprouvees"
          onChange={(e) => setFormData({...formData , PreApprovedResources: e.target.value})}
                       
          value={formData && formData.PreApprovedResources }
          />
        </div>
      </div>
      <div className="bg-white px-4 py-3 text-right sm:px-6">
        {
          didGetData ?
           <button
           onClick={ (e : FormEvent) => habdleUpdate(e)}
           type="submit"
           className="inline-flex justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           >
            mise à jour
          </button> 
          :
          <button
          type="submit"
       
          className="inline-flex justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
         enregistrer & continuer
        </button>
        }
       </div>
      </Form>
   </div>
  )
}

