import { FormEvent, useRef } from "react"
import { api } from "~/utils/api";

type inputsType ={
  title:string , 
  Description:string,
  ObjectifSduProjet:string,
  exigencEdeHautNiveau:string,
  exigenceApprobationDeProjet:string , 
  Budget:string , 

  chefProjetName:string , 
  chefProjetEmail:string , 
  chefProjetPhone:string
  
}

//see the docs 
//https://trpc.io/docs/useMutation

export const FirstForm = () => {

  const titleRef = useRef<HTMLInputElement>(null)
  const DescriptionRef = useRef<HTMLTextAreaElement>(null)
  const ObjectifSduProjet = useRef<HTMLTextAreaElement>(null)
  const exigencEdeHautNiveauRef = useRef<HTMLTextAreaElement>(null)
  const  exigenceApprobationDeProjetRef = useRef<HTMLTextAreaElement>(null)
  const Budget = useRef<HTMLInputElement>(null)
  const chefProjetNameRef = useRef<HTMLInputElement>(null)
  const chefProjetEmailRef = useRef<HTMLInputElement>(null)
  const chefProjetPhoneRef = useRef<HTMLInputElement>(null)

  //trpc hook 
   // This can either be a tuple ['login'] or string 'login'
   const mutation = api.startup.firstForm.useMutation()
  
  const HandleSubmit =  (e : FormEvent) => {
    e.preventDefault()
   if(!titleRef.current?.value || !DescriptionRef.current?.value || !ObjectifSduProjet.current?.value || !exigencEdeHautNiveauRef.current?.value || !exigenceApprobationDeProjetRef.current?.value || !Budget.current?.value || !chefProjetNameRef.current?.value){
    console.log("please enter the required data ...")
    return
   }
   const data : inputsType = {
    title: titleRef.current?.value   ,
    Description: DescriptionRef.current?.value ,
    ObjectifSduProjet: ObjectifSduProjet.current?.value , 
    exigencEdeHautNiveau: exigencEdeHautNiveauRef.current?.value , 
    exigenceApprobationDeProjet: exigenceApprobationDeProjetRef.current?.value , 
    Budget : Budget.current?.value  , 
    chefProjetName: chefProjetNameRef.current?.value , 
    chefProjetEmail: chefProjetEmailRef.current?.value as string , 
    chefProjetPhone: chefProjetPhoneRef.current?.value as string ,
  }
   mutation.mutate({
    title:data.title,
    Description:data.Description,
    ObjectifSduProjet:data.ObjectifSduProjet,
    exigencEdeHautNiveau:data.exigencEdeHautNiveau,
    exigenceApprobationDeProjet:data.exigenceApprobationDeProjet,
    Budget:Number(data.Budget) ,
    chefProjetName:data.chefProjetName,
    chefProjetEmail:data.chefProjetEmail,
    chefProjetPhone:data.chefProjetPhone
  })
 

  }
 






  return (
   <div className='ml-[16rem] custom-width min-h-screen h-fit flex justify-center pt-8'>
     <form className='bg-white mb-8 '  onSubmit={(e) => HandleSubmit(e)}>
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
              autoComplete="titre"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        


          <div className="col-span-6 ">
            <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
            Description
            </label>
            <textarea
                        ref={ DescriptionRef}
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
            Objectifs du projet
            </label>
            <textarea
                        ref={ObjectifSduProjet}
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
            exigence de haut niveau
            </label>
            <textarea
                      
                        ref={exigencEdeHautNiveauRef}
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
            exigence d'approbation de projet
            </label>
            <textarea
                        ref={exigenceApprobationDeProjetRef}
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
            Budget
            </label>
            <input
            ref={Budget}
              type="number"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="col-span-6">
            <h3 className="block text-xl font-medium leading-6 text-gray-900">
            chef de projet
            </h3>
           
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
            nom
            </label>
            <input
            ref={chefProjetNameRef}
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
            e-mail
            </label>
            <input
            ref={chefProjetEmailRef}
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

        

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
            téléphone
            </label>
            <input
            ref={chefProjetPhoneRef}
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        

        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
         enregistrer & continuer
        </button>
      </div>
    </div>
  </form>
   </div>
  )
}

