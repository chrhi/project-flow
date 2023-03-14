import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button } from "@mui/material"
import { type RefetchOptions, type RefetchQueryFilters } from '@tanstack/react-query'

type UpdateRowType ={
    name : string , 
    title : string ,
    role : string 
    id: string ,
    refetch? : <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined)  => any
}


export const UpdateRow = ({name , title , role , id , refetch} : UpdateRowType) => {

    const [isOpen, setIsOpen] = useState(false)

    const [formData , setFormData] = useState<UpdateRowType>({
        name , title , role , id 
    })

    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }



  return (
    <>
    <Button
    onClick={openModal}
     className='py-2 px-4 flex items-center w-[50px]  text-black rounded-lg cursor-pointer font-bold'>  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
    </Button>
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
            <div className="fixed inset-0 bg-sky-50 bg-opacity-50 " />
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
                <Dialog.Panel className=" max-w-md w-[600px] min-h-[400px] p-4 transform overflow-hidden  bg-white  text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title as="h3" className="text-lg  font-medium leading-6 text-gray-900">
                  update item
                  </Dialog.Title>
                    <div className="w-full my-4 h-full">
                       <label htmlFor="titre" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                        Nom
                        </label>
                        <input value={formData.name} name="name" type="text" className=" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"  />
                        <label htmlFor="titre" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                        titre
                        </label>
                        <input value={formData.title} name="title" type="text" className=" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"  />
                        <label htmlFor="titre" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                        Role / Responsabilite
                        </label>
                        <textarea value={formData.role} name="role" className=" w-full border h-[130px] border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"  />
                    </div>
                    <div className='w-full h-[50px] gap-x-4 flex items-center justify-end pr-4'>
                    <Button
                      className="inline-flex justify-center rounded-md bg-gray-300 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        cancel
                    </Button>
                    <Button
                     className="inline-flex justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        submit
                    </Button>
                 
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

