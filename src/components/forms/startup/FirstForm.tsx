/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { api } from "~/utils/api";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { userReducer } from "~/store/userReducer";


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
     <form className='bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%] overflow-y-scroll '  onSubmit={(e) => HandleSubmit(e)}>
    <div className="overflow-hidden shadow  sm:rounded-md">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
         

        <div className="col-span-6 ">
            <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
            titre
            </label>
            <input
            onChange={(e) => setFormData({...formData , titre: e.target.value})}
           
              type="text"
              name="titre"
              id="titre"
              value={formData && formData.titre }
              autoComplete="titre"
              className="mt-2 block  transition  ease-in-out  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          
            Besoin de l'organisation / objectifs du projet
            </label>
            <textarea
                         onChange={(e) => setFormData({...formData , NeedForOrganization: e.target.value})}
                         value={formData && formData.NeedForOrganization }
                     
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1  transition  ease-in-out  block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Exigences  du projet
            </label>
            <textarea
                          onChange={(e) => setFormData({...formData , ProjectRequirements: e.target.value})}
                          value={formData && formData.ProjectRequirements }
                      
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  transition  ease-in-out   w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Description du produit / des livrables
            </label>
            <textarea 
                          onChange={(e) => setFormData({...formData , ProductDescription: e.target.value})}
                          value={formData && formData.ProductDescription }
                      
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  transition  ease-in-out  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
         
            Le projet n'inclut pas 
            </label>
            <textarea
                         onChange={(e) => setFormData({...formData , ThePojectDoesNotInclude: e.target.value})}
                         value={formData && formData.ThePojectDoesNotInclude }
                   
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  transition  ease-in-out  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
            Ressources preapprouvees
            </label>
            <textarea
                        onChange={(e) => setFormData({...formData , PreApprovedResources: e.target.value})}
                       
                        value={formData && formData.PreApprovedResources }
                     
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  transition  ease-in-out  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
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
    </div>
  </form>
   </div>
  )
}

