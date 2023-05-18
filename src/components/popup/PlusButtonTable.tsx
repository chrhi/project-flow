/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import {  Fragment, useState } from 'react'
import { api } from '~/utils/api'
import { TextField } from '../used/TextField'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import { toast } from 'react-toastify'
import {v4 as uuidV4} from "uuid"
import { getProjectMetaData } from '~/lib/MetaData'
type Props = {
  formType : string ,
  refetch : () => Promise<any>
}

type inputs = {
  objectifs : string , 
  type : string ,
  seccessCriteria :  string , 
  approval :  string ,
  
  id :  string
}



export  function PlusButtonTable ({formType , refetch} : Props) {


  
    const [isOpen, setIsOpen] = useState(false)

    const [formData , setFormData] = useState<inputs>({
      objectifs : "" , 
      type : "" ,
      seccessCriteria :  "" , 
      approval :  "" ,
      
      id :  ""
    })
     
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
    
    const mutation = api.tableInfoRouter.postNewInfo.useMutation({
      onSuccess: async () => {
        closeModal()
        toast("new item was added ",{
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
      if(!formData.approval || !formData.objectifs || !formData.seccessCriteria){
        toast("all the fields are required",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
      }
      const id:string  = uuidV4()
      mutation.mutate({
        id ,
        project_id : getProjectMetaData(),
        type : formType ,
        approval : formData.approval ,
        objectifs : formData.objectifs ,
        seccessCriteria : formData.seccessCriteria
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
               <div><p className='text-sm text-gray-500 ml-4'>{formType}</p></div>  
               <div>
                
                    <button
                    onClick={closeModal}
                   className='!text-xl !font-semibold !text-slate-900 !p-0  '
                   >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                    </button>
                   
                </div> 
                  </Dialog.Title>
                 
           <div className="bg-white p-4  w-full  ">
            <div className="grid grid-cols-6 gap-6">
            <TextField
              lable='objectifs du projet'
              value={formData.objectifs}
              onChange={(e) => setFormData({...formData , objectifs : e.target.value})}
            />
              <TextField
              lable='criteres de succes'
              value={formData.seccessCriteria}
              onChange={(e) => setFormData({...formData , seccessCriteria : e.target.value})}
            />
              <TextField
              lable='approbation'
              value={formData.approval}
              onChange={(e) => setFormData({...formData , approval : e.target.value})}
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
