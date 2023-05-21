/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import {  Fragment, useState } from 'react'
import { api } from '~/utils/api'
import { TextField } from '../used/TextField'
import { AbdullahButton, buttonVariants} from '../used/AbdullahButton'
import { Input } from '../used/Input'
import Select from 'react-select';
import { STAKHOLDER_TYPES , OPTIONS} from '~/types/static/STATICDATA'




export  function PLusButtonStakHolder () {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
 
  
  const handleSubmit = () => {
  //todo
  };

  return (
    <>
   <div className='w-full  h-10 flex justify-between px-4 items-center'>
      <button
         onClick={openModal}
        className='!text-xl !font-semibold !text-slate-900 !p-0  '
         >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-700 hover:bg-gray-100 rounded-full font-bold ">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

       </button>
  
   </div>
  
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
                <Dialog.Panel className="  w-[900px] h-[600px]  transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className=" w-[100%] mx-auto  h-[50px] flex justify-between items-center px-4 border-b "
                  >
               <div><p className='text-md text-gray-700   ml-1'>Enrichir l'écosystème des parties prenantes</p></div>  
               <div>
                    <button
                          onClick={closeModal}
                          className='!text-xl !font-semibold !text-slate-900 !p-0  '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                </div> 
                  </Dialog.Title>
                 
           <div className="bg-white p-4  w-full  ">
            <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <div className='col-span-6 '>
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                  type de partie prenante
                  </label>
                  <Select
                        onChange={(e) => console.log(e)}
                        name="stakholders_types"
                        options={STAKHOLDER_TYPES}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
            </div> 
            <Input
              lable='Nom'
              value={""}
              onChange={(e) => console.log(e)}
            />
             <Input
              lable='position'
              value={""}
              onChange={(e) => console.log(e)}
            />
             <Input
              lable='coordonnées'
              value={""}
              onChange={(e) => console.log(e)}
            />

            <div className='col-span-6 '>
                <label  className="block text-sm font-medium leading-6 text-gray-900">
                l'impact de cette partie prenante
                </label>
                <Select
                     onChange={(e) => console.log(e)} 
                     name="stakholders"
                     options={OPTIONS}
                     className="basic-multi-select"
                    classNamePrefix="select"
                   />
            </div>
            <Input
              lable='Investment amount'
              value={""}
              onChange={(e) => console.log(e)}
            />
              <TextField
              lable='ROLE / RESPONSABILITY'
              value={""}
              onChange={(e) => console.log(e)}
            />
             <TextField
              lable='Attentes'
              value={""}
              onChange={(e) => console.log(e)}
            />
            <TextField
              lable='EXIGENCES'
              value={""}
              onChange={(e) => console.log(e)}
            />
                
             <div className="bg-white flex justify-end items-end p-4 col-span-6 text-right ">
            <AbdullahButton
            onClick={handleSubmit}
            isLoading={false}
            className={`${buttonVariants({size:'sm'  , variant:"primary"})}  `}
            >
           sauvegarder
            </AbdullahButton>
              </div>
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