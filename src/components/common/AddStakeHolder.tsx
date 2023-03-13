import  { useRef , useEffect, type FormEvent} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { api } from "~/utils/api";





export default function AddStakeHolder() {
  const nameRef = useRef<HTMLInputElement>(null)
  const roleRef = useRef<HTMLTextAreaElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  const mutation = api.stakeholder.uploadStakeHolder.useMutation()
  const set_isLoading = loading_Reducer(state => state.set_isLoading)

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault()
    if(!nameRef.current?.value || !roleRef.current?.value || !titleRef.current?.value ){
      toast("tous les liens sont requis",{
        className:" !text-white !bg-gradient-to-r !from-sky-300 !to-indigo-600",
        hideProgressBar: true,
       })
      return
    }
    mutation.mutate({
      name : nameRef.current?.value,
      title : titleRef.current?.value ,
      role : roleRef.current?.value
    })
    toast("changes saved seccusfully",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
     closeModal()
  }

  useEffect(()=> {
    if(mutation.isLoading){
      set_isLoading(true)
    }else{
      set_isLoading(false)
      
    }
    if(mutation.error){
      set_isLoading(false)
      closeModal()
      toast("some thing went wrong",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
    }
    
  },[mutation.isLoading , set_isLoading , mutation.error])
 

    const [isOpen, setIsOpen] = useState(false)    
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
  return (
    <>
        <button 
         onClick={openModal}
         className="flex-none rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
       add new stakeholder
       
        </button>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-sky-50  bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="  w-[800px] min-h-[350px] h-fit transform overflow-hidden rounded-sm bg-white p-8 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl my-4 font-medium leading-6 text-gray-900"
                  >
                   adding a new stakeholder
                  </Dialog.Title>
                  <div className="w-full h-fit mt-1 ">
                    <form className='w-full flex flex-col h-fit min-h-full px-8 ' onSubmit={handleSubmit} >
                    <label htmlFor="titre" className="block text-md font-medium leading-6 text-gray-900">
                     Nom
                     </label>
                     <input 
                     ref={nameRef}
                     className="mt-2 block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     placeholder='add a tag to your file '  />
                 
                 <label htmlFor="titre" className="block text-md font-medium leading-6 text-gray-900">
                     Titre
                     </label>
                     <input 
                     ref={titleRef}
                     className="mt-2 block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     placeholder='add a tag to your file '  />
                 

                     {/* this is the Role / Responsabilite field  */}
                     <label htmlFor="titre" className="block text-md font-medium leading-6 text-gray-900">
                   
                      Role / Responsabilite
                     </label>
                     <textarea 
                     ref={roleRef}
                     className="mt-2 block w-full h-[200xp] p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     placeholder='add a tag to your file ' />
                    

                   
                    <div className='w-full flex justify-end p-4 my-4 gap-x-4 '>
                    <button 
                    type='submit'
                  className='py-2 px-4 flex items-center bg-gradient-to-r from-sky-500 to-indigo-600 hover:bg-[#7927f6] text-white rounded-lg cursor-pointer font-bold'>
                     confirme 
                   </button>
                    </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      </>
  )
}
