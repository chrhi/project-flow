import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { AbdullahButton , buttonVariants } from '~/components/ui/buildingBlocks/AbdullahButton'
import { IconButton  , Button} from '@mui/material'
import { api } from '~/utils/api'
import { Input } from '~/components/ui/used/Input'


interface Props {
  
    id : string ,
    isOpen : boolean ,
    setIsOpen : Dispatch<SetStateAction<boolean>>

}


export  function Treepopup ({id , isOpen , setIsOpen} : Props) {
  
    const [input , setInput ] = useState("")

   const handleSubmit = () => {
   console.log(input)
   console.log(id)
   }
  return (
    <>
     
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={() => setIsOpen(false)}>
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
                <Dialog.Panel className="w-[300px] h-[180px]   z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Input
                lable='add new task'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />
                <div className='w-fill h-[50px] my-4 flex justify-center items-center gap-x-8'>
                    <AbdullahButton onClick={handleSubmit} className={buttonVariants({size:"sm"})}>submit</AbdullahButton>
                    <AbdullahButton className='bg-gray-600 ' onClick={() => setIsOpen(false)}>cancel</AbdullahButton>
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
