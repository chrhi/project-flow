/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef , useEffect } from "react"
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

  const mutation = api.startup.UploadConsiderationsProject.useMutation()
  
  const set_isLoading = loading_Reducer(state => state.set_isLoading)


  const HighLevelRisksRef = useRef<HTMLTextAreaElement>(null)
  const AcceptanceCriteriaRef = useRef<HTMLTextAreaElement>(null)
  const HypothesesRef = useRef<HTMLTextAreaElement>(null)
  const  ConstraintsRef = useRef<HTMLTextAreaElement>(null)


  //trpc hook 
 
  const HandleSubmit =  (e : FormEvent) => {
    e.preventDefault()
   if( !HighLevelRisksRef.current?.value || !AcceptanceCriteriaRef.current?.value || !HypothesesRef.current?.value || !ConstraintsRef.current?.value){
    toast("tous les liens sont requis",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
    return
   }
 
  mutation.mutate({
    HighLevelRisks :  HighLevelRisksRef.current?.value ,
    AcceptanceCriteria :AcceptanceCriteriaRef.current?.value,
    Hypotheses :HypothesesRef.current?.value,
    Constraints : ConstraintsRef.current?.value
   
  })
 
  toast("changes saved seccusfully",{
    className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
    hideProgressBar: true,
   })
  
 

  }
 
  useEffect(()=> {
    if(mutation.isLoading){
      set_isLoading(true)
    }else{
      set_isLoading(false)
      
    }
    if(mutation.error){
      toast("some thing went wrong",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
    }
    
  },[mutation.isLoading , set_isLoading , mutation.error])
 






  return (
   <div className='ml-[16rem] custom-width min-h-screen h-fit flex flex-col items-center pt-8'>
   <div className="w-full h-[50px] flex items-center justify-start p-4 my-4">
   <h1 className="text-2xl font-bold text-start text-gray-900">remplir les informations nécessaires du projet</h1>
   </div>
     <form className='bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%] '  onSubmit={(e) => HandleSubmit(e)}>
    <div className="overflow-hidden shadow  sm:rounded-md">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
         

        
       


          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
          
            Risques de haut niveau
            </label>
            <textarea
                        ref={ HighLevelRisksRef}
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
           Criteres d,acceptation
            </label>
            <textarea
                        ref={AcceptanceCriteriaRef}
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
           Hypotheses
            </label>
            <textarea
                      
                        ref={HypothesesRef}
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
             {/* eslint-disable-next-line react/no-unescaped-entities */}
           Contraintes 
            </label>
            <textarea
                        ref={ConstraintsRef}
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
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
         
          className="inline-flex justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
         enregistrer & continuer
        </button>
      </div>
    </div>
  </form>
   </div>
  )
}



