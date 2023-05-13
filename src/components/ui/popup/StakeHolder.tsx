import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AbdullahButton, buttonVariants } from '../buildingBlocks/AbdullahButton'
import Image from "next/image"
import logo from "~/assets/logo.png"
import { api } from '~/utils/api'
import { Loader2 } from 'lucide-react';

interface Props {
    text : string | undefined ,
    id : string | undefined
}

interface stakholder {
  name : string,
  email :  string  ,
  phone :  string ,
  role : string,
  note :  string  ,
  levelOfInvolvement : string,
  communicationNeeds :  string  ,
  communicationMethod :  string,
  timing :   string ,
  pendingChanges  :  string[]  ,
  relationships :   string[]  ,
  stakeholderEngagementApproach :  string [],
}

export  function StakeHolder ({text , id} : Props) {
  const [isOpen, setIsOpen] = useState(false)

  const [stakholder , setStackHolder] = useState<stakholder>({} as stakholder)

  const {refetch , isFetching } = api.stakHolderRouter.getOnlyOneStackHolder.useQuery({id : id || ""} , {
    onSuccess(data: stakholder) {
      setStackHolder(data )
    },
    onError(error: any){
    console.log(error)
    },
  })

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
     
      <AbdullahButton 
      type='button'
      onClick={openModal}
       className={buttonVariants({size :'none' , variant :'link'})}
       > {text}
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
                 </div>
                 {
                  // isFetching ? 
                  false ?
                <h1 className='text-xl text-stone-900'>loading...</h1>
                  :
                  <div className='container mx-auto h-full flex  pl-4 '>
                    {/* this is the first div */}
                      <div className='w-[50%] h-full p-4 '>
                      <div className='w-full h-[100px] flex items-center gap-x-4'>
                        <div className='w-[70px] h-[70px] bg-black rounded-lg '>

                        </div>
                      <input 
                          value={"Abdellah chehri"} 
                          className='text-2xl font-bold my-4  text-gray-900  border-none focus:outline-none '   
                        />
                      </div>
                        <h3 className='text-xl mt-4 font-semibold  text-gray-800'>role & responsability :  </h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                        <h3 className='text-xl mt-4 font-semibold  text-gray-800'>Note </h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-lg  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                        {/* this is the second input  */}
                        <h3 className='text-xl mt-4 font-semibold  text-gray-800'>Contact info :  </h3>
                        <div className='w-full flex flex-col my-4 '>
                        <input 
                              value={"email :  mahdi.chahri55@gmail.com"} 
                              className='text-md  text-gray-700  border-none focus:outline-none '   
                          />
                           <input 
                              value={"telephone number :  05397643"} 
                              className='text-md  text-gray-700  border-none focus:outline-none '   
                           />
                        </div>
                        {/* this is another input  */}
                        <h3 className='text-xl mt-4 font-semibold   text-gray-800'>Level of involvment  </h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                         {/* this is another input  */}
                         <h3 className='text-xl mt-4 font-semibold  text-gray-800'>Communication Needs  </h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                         {/* this is another input  */}
                         <h3 className='text-xl mt-4 font-semibold  text-gray-800'>Communication Needs  </h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                      </div>
                       {/* this is the second div */}
                       <div className='w-[50%] h-full  '>
                       <input 
                              value={"available at  :  12/21/2017"} 
                              className='text-lg  text-gray-700  border-none focus:outline-none '   
                          />
                        <h3 className='text-xl mt-4 font-semibold  text-gray-800' >Pending Changes :</h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                        <h3 className='text-xl mt-4 font-semibold  text-gray-800' >relationships</h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md  text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                        <h3 className='text-xl mt-4 font-semibold  text-gray-800' >stakeholder Engagement Approach</h3>
                        <textarea 
                          value={"you didnt wrote any note to this stakholder so it is going to be true"} 
                          className='text-md text-gray-500 w-full h-fit border-none  focus:outline-none focus:ring-0 '   
                        />
                      </div>
                  </div>
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
