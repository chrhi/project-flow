import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment,  useState } from 'react'
import { AbdullahButton , buttonVariants } from '../../used/AbdullahButton'
import { X } from 'lucide-react';
import { openInvitationModel } from '~/store/messages-popup';






export  function OpenInvitationMessage () {
 

  const isOpen = openInvitationModel(state => state.isOpen)

  const setIsOpen = openInvitationModel(state => state.setIsOpen)

  const id = openInvitationModel(state => state.id)

  

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
   

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
            <div className="fixed inset-0  bg-sky-100 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[600px] min-h-[100px] h-fit  flex flex-wrap gap-8  z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* this is the header */}
                <div className='w-full h-[20px] flex items-center  justify-end '><X  className='w-4 h-4 text-gray-900'/></div>
                {/* this is the body */}
                <div className='w-full flex flex-col gap-y-4 items-center'>

                        <div className='w-full h-[500px] flex justify-between items-center'>

                        </div> 
                        <div className='w-full h-[40px] flex justify-end gap-x-4 items-center'>
                            
                               <AbdullahButton 
                                   onClick={openModal}
                                   className={`${buttonVariants({variant : "secondary" , size : "sm"})}  `} >
                                   reject
                                </AbdullahButton> 
                                <AbdullahButton 
                                   onClick={openModal}
                                   className={`${buttonVariants({variant : "primary" , size :"sm"})} `} >
                                   accept
                                </AbdullahButton> 
                        </div>
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
