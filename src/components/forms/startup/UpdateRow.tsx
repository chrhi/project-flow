import React, {type FormEvent, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button, IconButton } from "@mui/material"

export const UpdateRow = () => {

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
                <Dialog.Panel className=" max-w-md w-[600px] min-h-[600px] transform overflow-hidden  bg-white  text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title as="h3" className="text-lg  font-medium leading-6 text-gray-900">
                  update item
                  </Dialog.Title>
                    <div className="w-full h-full">
                       <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
                        Nom
                        </label>
                        <input   />
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

