/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import {  Fragment, useState } from 'react'
import { api } from '~/utils/api'
import { TextField } from '../used/TextField'
import { AbdullahButton, buttonVariants} from '../used/AbdullahButton'
import { toast } from 'react-toastify'
import {v4 as uuidV4} from "uuid"
import { Input } from '../used/Input'
import { getProjectMetaData } from '~/lib/MetaData'
import Select from 'react-select';
import { STAKHOLDER_TYPES , OPTIONS} from '~/types/static/STATICDATA'


type Props = {
  refetch : () => Promise<any>
}

type inputs = {
 name : string ,
 role : string
 impact : string ,
  id :  string
}




export  function PLusButtonStakHolder ({ refetch} : Props) {



  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    id: "",
    impact: "",
    type : "",
    Expectations : "",
    REQUIREMENTS: "",
    position : "",
    contact : "",
    Investment : ""
  });
  
  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
  const mutation = api.stakHolderRouter.createStackholder.useMutation({
    onSuccess: async () => {
      closeModal();
      toast("new stack holder added", {
        className: "!text-white !bg-blue-500",
        hideProgressBar: true,
      });
      await refetch();
    },
    onError: () => {
      closeModal();
      toast("failed to add new item", {
        className: "!text-white !bg-blue-500",
        hideProgressBar: true,
      });
    }
  });
  
  const handleSubmit = () => {
    if (!formData.name || !formData.role || !formData.type || !formData.impact  || !formData.REQUIREMENTS || !formData.Investment || !formData.contact || !formData.Expectations) {
      closeModal();
      toast(" impossible de créer tous les champs sont obligatoires", {
        className: "!text-white !bg-blue-500",
        hideProgressBar: true,
      });

    }
    const id = uuidV4();
    mutation.mutate({
      id,
      project_id: getProjectMetaData(),
      contact: formData.contact,
      name: formData.name,
      role: formData.role,
      impact: formData.impact,
      Investment : formData.Investment , 
      type : formData.type,
      expectations : formData.Expectations, 
      requirements : formData.REQUIREMENTS
    });
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
                        onChange={(e) => setFormData({...formData , type : e?.value || ""})}
                        name="stakholders_types"
                        options={STAKHOLDER_TYPES}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
            </div> 
            <Input
              lable='Nom'
              value={formData.name}
              onChange={(e) => setFormData({...formData , name : e.target.value})}
            />
             <Input
              lable='position'
              value={formData.position}
              onChange={(e) => setFormData({...formData , position : e.target.value})}
            />
             <Input
              lable='coordonnées'
              value={formData.contact}
              onChange={(e) => setFormData({...formData , contact : e.target.value})}
            />

            <div className='col-span-6 '>
                <label  className="block text-sm font-medium leading-6 text-gray-900">
                l'impact de cette partie prenante
                </label>
                <Select
                     onChange={(e) => setFormData({...formData , impact : e?.value || ""})}  
                     name="stakholders"
                     options={OPTIONS}
                     className="basic-multi-select"
                    classNamePrefix="select"
                   />
            </div>
            <Input
              lable='Investment amount'
              value={formData.Investment}
              onChange={(e) => setFormData({...formData , Investment : e.target.value})}
            />
              <TextField
              lable='ROLE / RESPONSABILITY'
              value={formData.role}
              onChange={(e) => setFormData({...formData , role : e.target.value})}
            />
             <TextField
              lable='Attentes'
              value={formData.Expectations}
              onChange={(e) => setFormData({...formData , Expectations : e.target.value})}
            />
            <TextField
              lable='EXIGENCES'
              value={formData.REQUIREMENTS}
              onChange={(e) => setFormData({...formData , REQUIREMENTS : e.target.value})}
            />
                
             <div className="bg-white flex justify-end items-end p-4 col-span-6 text-right ">
            <AbdullahButton
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
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