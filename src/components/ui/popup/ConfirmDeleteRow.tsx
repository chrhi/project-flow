import React, {type FormEvent, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button, IconButton } from "@mui/material"



export default function ConfirmDeleteRow() {
  
  
 

    const [isOpen, setIsOpen] = useState(false)
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
            <svg 
           
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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
                <Dialog.Panel className=" max-w-md w-[600px] h-[200px] transform overflow-hidden  bg-white p-4 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg my-4 font-medium leading-6 text-gray-900"
                  >
                   are you sure you want to delete this item
                  </Dialog.Title>
                  <div className="w-full  gap-x-4 h-full flex justify-center items-center mt-1 ">
                   

                    <button 
                   
                  className='py-2 px-4 flex items-center bg-gradient-to-r from-sky-500 to-indigo-600 hover:bg-[#7927f6] text-white rounded-lg cursor-pointer font-bold'>
                     confirme 
                   </button>
                   <button 
                   onClick={closeModal}
                   className='py-2 px-4 flex items-center bg-gray-700 text-white   rounded-lg cursor-pointer font-bold'>
                      cancel
                    </button>

                 
                
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
