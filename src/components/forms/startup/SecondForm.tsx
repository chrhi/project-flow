/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef , useEffect, useState } from "react"
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { api } from "~/utils/api";

type inputsType ={
  HighLevelRisks:string,
  AcceptanceCriteria:string,
  Hypotheses:string,
  Constraints:string , 
}
//see the docs 
//https://trpc.io/docs/useMutation
export const SecondForm = () => {
  const mutation = api.startup.UploadConsiderationsProject.useMutation({
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
  const set_isLoading = loading_Reducer(state => state.set_isLoading)


  const [formData , setFormData] = useState<inputsType>({
    HighLevelRisks:"",
    AcceptanceCriteria:"",
    Hypotheses:"",
    Constraints:"",
  })
  const [didGetData , setDidGetData] = useState<boolean>(false)
  //trpc hook 
  const HandleSubmit =  (e : FormEvent) => {
    e.preventDefault()
   if( !formData.HighLevelRisks || !formData.AcceptanceCriteria || !formData.Hypotheses || !formData.Constraints){
    toast("tous les liens sont requis",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
    return
   }
 
  mutation.mutate({
    HighLevelRisks : formData.HighLevelRisks ,
    AcceptanceCriteria :formData.AcceptanceCriteria,
    Hypotheses :formData.Hypotheses,
    Constraints :formData.Constraints
  })
 
  toast("changes saved seccusfully",{
    className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
    hideProgressBar: true,
   })
  }

  const {   refetch , isFetching }= api.startup.gatConsiderationsProject.useQuery(undefined , {
    onSuccess(data) {
      if(data?.data[0]?.HighLevelRisks && data?.data[0]?.AcceptanceCriteria &&  data?.data[0]?.Constraints && data?.data[0]?.Hypotheses){
        setDidGetData(true)
      }
      setFormData({
        HighLevelRisks : data?.data[0]?.HighLevelRisks || "",
        AcceptanceCriteria : data?.data[0]?.AcceptanceCriteria || "",
        Constraints : data?.data[0]?.Constraints || "",
        Hypotheses : data?.data[0]?.Hypotheses || "",
     
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

  const mutationUpdate = api.startup.updateConsiderationsProject.useMutation({
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

 
  const habdleUpdate =  (e : FormEvent) => {
    e.preventDefault()
    set_isLoading(true)
   if( !formData.HighLevelRisks || !formData.AcceptanceCriteria|| !formData.Hypotheses || !formData.Constraints){
    toast("tous les liens sont requis",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
    return
   }
 
   mutationUpdate.mutate({
    HighLevelRisks : formData.HighLevelRisks ,
    AcceptanceCriteria :formData.AcceptanceCriteria,
    Hypotheses :formData.Hypotheses,
    Constraints :formData.Constraints
  })
  }
 
  useEffect(()=> {
    if( isFetching){
      set_isLoading(true)
    }else{
      set_isLoading(false)
      
    }
   
    
  },[ set_isLoading , isFetching])
 






  return (
    <div className='ml-[16rem] custopn-page-height custom-width  custom-scroll-bar flex flex-col items-center pt-2'>
   <div className="w-full h-[50px] flex items-center justify-start p-4 ">
   <h1 className="text-2xl font-bold text-start text-gray-900">👉remplir les informations nécessaires du projet</h1>
   </div>
     <form className='bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%] overflow-y-auto '  onSubmit={(e) => HandleSubmit(e)}>
    <div className="overflow-hidden shadow  sm:rounded-md">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          
            Risques de haut niveau
            </label>
            <textarea
                           onChange={(e) => setFormData({...formData , HighLevelRisks: e.target.value})}
                           value={formData && formData.HighLevelRisks }
                      
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
           Criteres d,acceptation
            </label>
            <textarea
                         onChange={(e) => setFormData({...formData , AcceptanceCriteria: e.target.value})}
                         value={formData && formData.AcceptanceCriteria }
                      
                       
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
           Hypotheses
            </label>
            <textarea
                          onChange={(e) => setFormData({...formData , Hypotheses: e.target.value})}
                          value={formData && formData.Hypotheses }
                     
                       
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
             {/* eslint-disable-next-line react/no-unescaped-entities */}
           Contraintes 
            </label>
            <textarea
             onChange={(e) => setFormData({...formData , Constraints: e.target.value})}
             value={formData && formData.Constraints }
             
            
             id="about"
             name="about"
             rows={3}
             className="mt-1 block  w-full  transition  ease-in-out  rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
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



