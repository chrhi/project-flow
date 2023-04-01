import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AbdullahButton, buttonVariants } from '../buildingBlocks/AbdullahButton'
import Image from "next/image"
import logo from "~/assets/logo.png"
import { IconButton  , Button} from '@mui/material'
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
                <Dialog.Panel className="w-full h-screen   z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                 <div className='container h-[50px] mx-auto flex justify-between items-center'>
                 <div className="w-[3%] h-full flex justify-start items-center">
               <Image alt="logo" src={logo} width={35} height={35}  />
                </div>
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
                 </div>
                 {
                  isFetching ? 
                <h1 className='text-xl text-stone-900'>loading...</h1>
                  :
                  <div className='container mx-auto h-full flex flex-col pl-4 '>
                <h1 className='text-3xl font-bold text-slate-900 text-start my-2'>{stakholder.name}</h1>
                <h2 className='text-2xl font-semibold text-slate-800 my-2'>Role</h2>
                <p>{stakholder.role}</p>
                <h2 className='text-2xl font-semibold text-slate-800 my-2'>contact info : </h2>
                  <p>email : {stakholder.email}</p>
                  <p> phone :{ stakholder.phone}</p>
                 
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
