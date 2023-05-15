/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import {  Fragment, useState } from 'react'
import { AbdullahButton , buttonVariants } from '../ui/buildingBlocks/AbdullahButton'
import { Input } from '../ui/used/Input'
import { TimePicker} from  "~/components/ui/TimePicker"


type Props = {
  refetch? : () => Promise<any>
}

type inputs = {
 name : string ,

}



  function PlusButtonIssueManagment ({refetch } : Props) {


 
    const [isOpen, setIsOpen] = useState(false)
    const [start_at, setStart_at] = useState<Date>(new Date())
    const [end_at, setEnd_at] = useState<Date>(new Date())
    const [formData , setFormData] = useState<inputs>({
      name : "" ,
     
    })
     
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
    
   
   

  return (
    <>
   <div className='w-full h-6 flex justify-between px-4 items-center'>
   
 
 
      <button
         onClick={openModal}
        className='!text-md !text-slate-700 !p-0  '
         >
        update 

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
               <div><p className='text-sm text-gray-500 ml-4'>updtate an issue </p></div>  
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
            <Input
              lable='pick a string name'
              value={formData.name}
              onChange={(e) => setFormData({...formData , name : e.target.value})}
            />
         <div className='col-span-6 '>
         <TimePicker  endDate={end_at} setEndDate={setEnd_at} setStartDate={setStart_at} startDate={start_at} />
         </div>
             <div className="bg-white py-3 col-span-6 text-right ">
            <AbdullahButton
           
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
export default PlusButtonIssueManagment