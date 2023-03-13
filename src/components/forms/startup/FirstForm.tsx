/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { api } from "~/utils/api";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";


type inputsType ={
  title:string , 
  NeedForOrganization:string,
  ProjectRequirements:string,
  ProductDescription:string,
  ThePojectDoesNotInclude:string , 
  PreApprovedResources : string,
  titre?:string
}

//see the docs 
//https://trpc.io/docs/useMutation

export const FirstForm = () => {
  //defined the hooks
  const set_isLoading = loading_Reducer(state => state.set_isLoading)
  
  const titleRef = useRef<HTMLInputElement>(null)
  const NeedForOrganizationRef = useRef<HTMLTextAreaElement>(null)
  const ProjectRequirementsRef = useRef<HTMLTextAreaElement>(null)
  const ProductDescriptionRef = useRef<HTMLTextAreaElement>(null)
  const  ThePojectDoesNotIncludeRef = useRef<HTMLTextAreaElement>(null)
  const  PreApprovedResourcesRef = useRef<HTMLTextAreaElement>(null)

  const [items , setItems] = useState<inputsType | undefined>()

  //trpc hook 
  const {   refetch , isFetching }= api.startup.gatProjectDetails.useQuery(undefined , {
    onSuccess(data) {
      console.log("this is the data")
      console.log(data)
      setItems(data?.data[0] as inputsType )
    },
    onError() {
      toast("some things wents wrong ",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
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
    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
    },
    
  })

  const mutationUpdate = api.startup.updateProjectDetails.useMutation({
    onSuccess() {
      refetch().then(data => console.log(data)).catch(error => console.log(error))
      toast("changes updated  seccusfully",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
    },
    
  })



  const HandleSubmit =  (e : FormEvent) => {
    e.preventDefault()
   if(!titleRef.current?.value || !NeedForOrganizationRef.current?.value || !ProjectRequirementsRef.current?.value || !ProductDescriptionRef.current?.value || !ThePojectDoesNotIncludeRef.current?.value || !PreApprovedResourcesRef.current?.value ){
    toast("tous les liens sont requis",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
    return
   }
   mutation.mutate({
    title:titleRef.current?.value  ,
    NeedForOrganization:NeedForOrganizationRef.current?.value ,
    ProjectRequirements:ProjectRequirementsRef.current?.value,
    ProductDescription:ProductDescriptionRef.current?.value,
    ThePojectDoesNotInclude: ThePojectDoesNotIncludeRef.current?.value ,
    PreApprovedResources: PreApprovedResourcesRef.current?.value
  })
  }

  const habdleUpdate = (e : FormEvent) => {
    e.preventDefault()
    if(!titleRef.current?.value || !NeedForOrganizationRef.current?.value || !ProjectRequirementsRef.current?.value || !ProductDescriptionRef.current?.value || !ThePojectDoesNotIncludeRef.current?.value || !PreApprovedResourcesRef.current?.value ){
     toast("tous les liens sont requis",{
       className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
       hideProgressBar: true,
      })
     return
    }
    mutationUpdate.mutate({
     title:titleRef.current?.value  ,
     NeedForOrganization:NeedForOrganizationRef.current?.value ,
     ProjectRequirements:ProjectRequirementsRef.current?.value,
     ProductDescription:ProductDescriptionRef.current?.value,
     ThePojectDoesNotInclude: ThePojectDoesNotIncludeRef.current?.value ,
     PreApprovedResources: PreApprovedResourcesRef.current?.value
   })
  }

  useEffect(()=> {
    if(mutation.isLoading){
      set_isLoading(true)
    }else{
      set_isLoading(false)
      
    }
   
    if(isFetching){
      set_isLoading(true)
    }else{ set_isLoading(false)}
    
  },[mutation.isLoading , set_isLoading , mutation.error , isFetching])
 






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
             ref={titleRef}
              type="text"
              name="titre"
              id="titre"
              value={items && items.titre }
              autoComplete="titre"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          
            Besoin de l'organisation / objectifs du projet
            </label>
            <textarea
                        value={items &&items.NeedForOrganization }
                        ref={ NeedForOrganizationRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Exigences  du projet
            </label>
            <textarea

                        value={items && items.ProjectRequirements }
                        ref={ProjectRequirementsRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Description du produit / des livrables
            </label>
            <textarea
                         value={items && items.ProductDescription}
                        ref={ProductDescriptionRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
         
            Le projet n'inclut pas 
            </label>
            <textarea
                       
                         value={items && items.ThePojectDoesNotInclude }
                        ref={ThePojectDoesNotIncludeRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>


        

          <div className="col-span-6">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
            Ressources preapprouvees
            </label>
            <textarea
                       
                       value={items && items?.PreApprovedResources }
                        ref={PreApprovedResourcesRef}
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block  w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
          </div>
         
          
        

        </div>
      </div>
      <div className="bg-white px-4 py-3 text-right sm:px-6">
        {
          items ?
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

