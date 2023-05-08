/* eslint-disable react/no-unescaped-entities */
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
                <Dialog.Panel className="w-[600px] h-[350px] flex flex-col items-center p-8 gap-8  z-[100]  transform overflow-hidden  bg-white  text-left align-middle shadow-xl transition-all">
                <h1 className='text-2xl  font-bold text-gray-900 text-center '>Locked Out: Understanding and Overcoming Action Access Restrictions</h1>
                   <p className='text-lg leading-8  text-center text-gray-700'>
                   Proper communication with project authorities is key to resolving access issues, enabling one to contribute to the project's success by following the correct protocols.
                   </p>
                   <AbdullahButton
                    onClick={() => set_isOpen({payload: false})}
                      className={`${buttonVariants({size:"lg", variant:'primary'})} font-bold`}
                    >
                       accept and close 
                  </AbdullahButton>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}
