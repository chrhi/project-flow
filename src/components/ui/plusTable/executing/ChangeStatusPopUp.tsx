/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import {  Fragment, SetStateAction, useState } from 'react'
import { IconButton  } from '@mui/material'
import { api } from '~/utils/api'
import { AbdullahButton, buttonVariants} from "~/components/ui/buildingBlocks/AbdullahButton"
import { toast } from 'react-toastify'
import { getProjectMetaData } from '~/lib/MetaData'
import Select from 'react-select';
type Props = {
  taskName : string ,
  id : string ,
  refetch : () => Promise<any>
}

type inputs = {
    taskStatus : string,

}

type stekholder ={
  value : string ,
  label : string
}


export  function ChangeStatusPopUp ({ refetch , taskName , id} : Props) {
    const [stakHolders , setStakholders] = useState<stekholder[]>([] as stekholder[])
    const [isOpen, setIsOpen] = useState(false)
    const [formData , setFormData] = useState<inputs>({
        taskStatus : "" ,
    })
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
    const { isFetching } = api.stakHolderRouter.getAllStackHolders.useQuery({project_id : getProjectMetaData()} , {
      onSuccess(data) {
        const filtedData = data.map(item => ({
          label : item.name as string,
          value : item.id as string
        }))

        setStakholders(filtedData as stekholder[])
      },
      onError(){
        toast("failed to get the stakholders",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
       
      },
    })

    const update = api.tasksRouter.updateStatus.useMutation({
      onSuccess: async () => {
        toast("updated successfully!",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         await refetch()
         closeModal()
         setFormData({taskStatus : ""})
      },
      onError(){
        toast("failed to update",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         closeModal()
      },
    })

  const handleSubmit = () => {
  
    update.mutate({
      id , 
     status  : formData.taskStatus 
    })

  }
     
  

  return (
    <>

 
 
      <button
         onClick={openModal}
        className='font-medium text-blue-600 hover:underline'
         >
       assign
       </button>
  

  
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
               <div><p className='text-sm text-gray-500 ml-4'>Assign new task </p></div>  
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
            <div className='col-span-6'>
                <h1 className='text-xl font-bold text-red-500 '>{taskName}</h1>
            </div>
            <div className='col-span-6'>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
           select the stakholders involved
        </label>
            <Select
                onChange={(e) => setFormData({...formData, taskStatus : e?.value || ""})}
                
                name="status"
                options={[{label:"on going " , value:"on going"}, {label:"done " , value:"done"}, {label : "posed " , value : "posed"}]}
                className="basic-multi-select"
                classNamePrefix="select"
            />
            </div>
           <div className="bg-white py-3 col-span-6 text-right ">
            <AbdullahButton
            onClick={handleSubmit}
            isLoading={update.isLoading}
            className={buttonVariants({size:'sm' , variant:"primary"})}
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