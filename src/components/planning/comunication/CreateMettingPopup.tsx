/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { IconButton  } from '@mui/material'
import { api } from '~/utils/api'
import { TextField } from '~/components/ui/used/TextField'
import { AbdullahButton, buttonVariants} from "~/components/ui/buildingBlocks/AbdullahButton"
import { toast } from 'react-toastify'
import {v4 as uuidV4} from "uuid"
import { Input } from '~/components/ui/used/Input'
import { getProjectMetaData } from '~/lib/MetaData'
type Props = {
  
  refetch? : () => Promise<any>
}

type inputs = {
 name : string ,
 role : string
  
  id :  string
}



export  function CreateMettingPopup ({ refetch} : Props) {



    const [isOpen, setIsOpen] = useState(false)

    const [formData , setFormData] = useState<inputs>({
      name : "" ,
      role : "" ,
      id :  ""
    })
     
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
    
    const mutation = api.stakHolderRouter.createStackholder.useMutation({
      onSuccess: async () => {
        closeModal()
        toast("new stack holder added ",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         await refetch()

      },
      onError : () => {
        closeModal()
        toast("faild to add new item",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
      }
    })

    const handleSubmit = () => {
      if(!formData.name || !formData.role ){
        toast("all the fields are required",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
      }
      const id:string  = uuidV4()
      mutation.mutate({
        id ,
        project_id : getProjectMetaData(),
        
        communicationNeeds : "how can we",
        email : "how can we",
        levelOfInvolvement : "how can we",
        note : "how can we",
        pendingChanges : "how can we",
        phone : 98765,
        relationships : "how can we",
        stakeholderEngagementApproach : "how can we",
        timing : "how can we",
        name : formData.name ,
        role : formData.role ,
        communicationMethod : "how can we",
        
      })
    }
   

  return (
    <>
   <div className='w-full h-6 flex justify-between px-4 items-center'>
    <p>ajouter un élément à ce tableau</p>
 
 
      <button
         onClick={openModal}
        className='!text-xl !font-semibold !text-slate-900 !p-0  '
         >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
                <Dialog.Panel className="  w-[500px] h-fit  transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className=" w-full h-[50px] flex justify-between items-center border-b "
                  >
               <div><p className='text-sm text-gray-500 ml-4'>adding stakholder</p></div>  
               <div>
                <IconButton>
                    <button
                    onClick={closeModal}
                   className='!text-xl !font-semibold !text-slate-900 !p-0  '
                   >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                    </button>
                   </IconButton>
                </div> 
                  </Dialog.Title>
                 
           <div className="bg-white p-4  w-full  ">
            <div className="grid grid-cols-6 gap-6">
            <Input
              lable='Nom'
              value={formData.name}
              onChange={(e) => setFormData({...formData , name : e.target.value})}
            />
              <TextField
              lable='ROLE / RESPONSABILITY'
              value={formData.role}
              onChange={(e) => setFormData({...formData , role : e.target.value})}
            />
             
             <div className="bg-white py-3 col-span-6 text-right ">
            <AbdullahButton
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
            className={buttonVariants({size:'sm'})}
            >
              submit
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