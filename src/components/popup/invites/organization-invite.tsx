import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment,  useState } from 'react'
import { AbdullahButton , buttonVariants } from '../../used/AbdullahButton'
import { X } from 'lucide-react';
import { openInvitationModel } from '~/store/messages-popup';
import { api } from '~/utils/api';
import { cn } from '~/lib/utils';
import { toast } from 'react-hot-toast';
import { getOrganizationId } from '~/lib/data-in-cookies';





type JoinRequest = {
  id: string;
  OrganizationName: string;
  OrganizationId: string;
  senderName: string;
  senderId: string;
  senderAvatar: string;
  senderEmail: string;
  typeRelation: string;
  targetEmail: string;
  createdAt: Date;
}

export  function OpenInvitationMessage () {
 

  const isOpen = openInvitationModel(state => state.isOpen)

  const setIsOpen = openInvitationModel(state => state.setIsOpen)



  const [data , setData] = useState<JoinRequest>({} as JoinRequest)

 const {isLoading , isError} = api.notificatioRouter.getJoinRequest.useQuery({id  : getOrganizationId()}, {
    onSuccess : (data) => {
      setData(data as JoinRequest)
    },
  })
 
const rejectMutation = api.notificatioRouter.rejectJoinRequest.useMutation({
        onSuccess : () => {
          closeModal()
       },
       onError : () => {
        toast.error("some thing went wrong")
       }
})

const acceptMutation = api.notificatioRouter.accept_join_request.useMutation({
  onSuccess : (data) => {
    closeModal()
    toast.error("you have joined the organization successfuly")
    console.log(data)
 },
 onError : () => {
  toast.error("some thing went wrong")
 }
})


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
   

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
            <div className="fixed inset-0  bg-sky-100 bg-opacity-25" />
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
                <Dialog.Panel className="w-[600px] min-h-[100px] h-fit  flex flex-wrap gap-8  z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* this is the header */}
                <div className='w-full h-[20px] flex items-center  justify-end '>
                  <AbdullahButton 
                  onClick={closeModal}
                  className={cn(buttonVariants({variant:"ghost" , size :"sm"}))}>
                      <X  className='w-4 h-4 text-gray-900'/>
                  </AbdullahButton>
                </div>
                {/* this is the body */}
                <div className='w-full flex flex-col gap-y-4 items-center'>

                        <div className='w-full h-[500px] flex flex-col items-center p-4'>
                            <h1 className='text-3xl font-semibold text-gray-900 text-start'>{data?.senderName} wants you to join his organization {data?.OrganizationName} </h1>
                            <p className="mb-3 text-gray-500 mt-4">Track work across the enterprise through an open, collaborative platform. <em className="font-italic">Link issues across Jira</em> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                        </div> 
                        <div className='w-full h-[40px] flex justify-end gap-x-4 items-center'>
                            
                               <AbdullahButton 
                                   isLoading ={rejectMutation.isLoading}
                                   onClick={() => rejectMutation.mutate({id : getOrganizationId()})}
                                   className={`${buttonVariants({variant : "secondary" , size : "sm"})}  `} >
                                   Reject
                                </AbdullahButton> 
                                <AbdullahButton 
                                   isLoading={acceptMutation.isLoading}
                                   onClick={() => acceptMutation.mutate({
                                    id : getOrganizationId(),
                                    organization_id : data?.OrganizationId , 
                                    role : data?.typeRelation,
                                  
                                  })}
                                   className={`${buttonVariants({variant : "primary" , size :"sm"})} `} >
                                   Accept
                                </AbdullahButton> 
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
