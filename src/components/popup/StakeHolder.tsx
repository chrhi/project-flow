import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import Image from "next/image"
import logo from "~/assets/logo.png"
import { ScrollArea } from '../ui/scroll-area'
import { Input } from '../used/Input'
import { TextField } from '../used/TextField'
import { OpenStakeHolderOpoUpShowCase } from '~/store/open-models'





export  function StakeHolder () {

  const isShowing = OpenStakeHolderOpoUpShowCase(state => state.showModel)
 
  const setIsShowing = OpenStakeHolderOpoUpShowCase(state => state.setShowModel)

  function closeModal() {
    setIsShowing(false)
  }


  return (
    <>
     
      
     

      <Transition appear show={isShowing} as={Fragment}>
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
            <div className="fixed inset-0  bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full h-screen   z-[100]  transform overflow-x-hidden overflow-y-auto   bg-white p-6 text-left align-middle shadow-xl transition-all">
                 <div className='container h-[50px] mx-auto flex justify-between items-center'>
                    <div className="w-[3%] h-full flex justify-start items-center">
                     <Image alt="logo" src={logo} width={35} height={35}  />
                    </div>
                
               
                    <button
                         onClick={closeModal}
                         className='!text-xl !font-semibold !text-slate-900 !p-0  '
                     >
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                    </button>
                </div>
                 
                 {
                  // isFetching ? 
                  false ?
                <h1 className='text-xl text-stone-900'>loading...</h1>
                  :
                  <ScrollArea className='px-8 py-4 mx-auto   h-fit min-h-full  grid grid-cols-1 w-[70%]   '>
                  <Input 
                        
                        lable="name "
                        value="abdullah jsk"
                        onChange={() => console.log("")}
                  />
                   <Input 
                       
                        lable="email "
                        value="mahdi.chahri55@gmail.com"
                        onChange={() => console.log("")}
                  />
                     <Input 
                       
                       lable="type "
                       value="type"
                       onChange={() => console.log("")}
                  />
                    <Input 
                       
                       lable="Position "
                       value="type"
                       onChange={() => console.log("")}
                  />
                   <Input 
                       
                       lable="Impact "
                       value="type"
                       onChange={() => console.log("")}
                  />
                  <TextField
                        lable="Requiremnts "
                        value="type"
                        onChange={() => console.log("")}
                  />
                  <TextField
                        lable="Expectations "
                        value="type"
                        onChange={() => console.log("")}
                  />
                    <TextField
                        lable="Expectations "
                        value="type"
                        onChange={() => console.log("")}
                  />
                  </ScrollArea>
                 }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
