/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import {  Fragment  } from 'react'
import { AbdullahButton , buttonVariants } from '../ui/buildingBlocks/AbdullahButton'
import { ErrorNoteReducer } from '~/store/app-reducer/errorReducer'
import { IconButton } from '@mui/material'

export  function AccessPopUp () {

    const isOpen = ErrorNoteReducer(state => state.isOpen)

    const set_isOpen = ErrorNoteReducer(state => state.setIsOpen)
  
 

  
  return (
    <>
  
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={() => set_isOpen({payload: false})}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              
                <Dialog.Panel className="  w-[500px] h-fit  transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                    as="div"
                    className=" w-full h-[50px] flex justify-between items-center border-b "
                  >
               <div><p className='text-sm text-gray-500 ml-4'>error pannel</p></div>  
               <div>
                <IconButton>
                    <button
                    onClick={() => set_isOpen({payload: false})}
                   className='!text-xl !font-semibold !text-slate-900 !p-0  '
                   >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                    </button>
                   </IconButton>
                </div> 
                  </Dialog.Title>
            <div className='  w-[400px] h-[200px] '>
                <div
                className='w-full h-[70%] flex justify-center items-center'
                >
                        <h1></h1>
                </div>
                <div className="bg-white flex flex-col  justify-center p-8  ">
                 <AbdullahButton
                  className={buttonVariants({size:'sm'})}
                  >
                    ok
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
