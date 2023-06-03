import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { AbdullahButton , buttonVariants } from '../used/AbdullahButton'


export  function EndProjectPopUp () {
  const [isOpen, setIsOpen] = useState(false)

 
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
     
     <AbdullahButton 
     onClick={openModal}
     className={buttonVariants({variant : "secondary"})} >
                      distroy
     </AbdullahButton> 

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
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[400px] min-h-[100px] h-fit  flex flex-wrap gap-8  z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h2 className='text-center text-lg text-red-500 font-semibold '> DO YOU WANT TO END YOUR PROJECT ?  </h2>
              
                <div className='w-full h-[50px] flex items-center justify-center gap-x-8 '>
                <AbdullahButton 
                   onClick={closeModal}
                   className={buttonVariants({variant : "primary"})} >
                          confirme
               </AbdullahButton> 
               <AbdullahButton 
                     onClick={closeModal}
                     className={buttonVariants({variant : "secondary"})} >
                      cancel
               </AbdullahButton> 
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
