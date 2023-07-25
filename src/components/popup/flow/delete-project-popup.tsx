import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { AbdullahButton , buttonVariants } from '~/components/used/AbdullahButton'; 
import { openDeleteFlowPopup } from '~/store/flow-router/project';
import { api } from '~/utils/api';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { getProjectMetaData } from '~/lib/MetaData';

export function ConfirmeDeleteProjectPopUp() {
 
  const router = useRouter()

  const isOpen = openDeleteFlowPopup(state => state.showModel)

  const setIsOpen = openDeleteFlowPopup(state => state.setShowModel)

  function closeModal() {
    setIsOpen(false);
  }

 

  const mutation = api.newProjectRouter.delete_project.useMutation({
    onSuccess :  () => {
        closeModal() 
        toast.success("project has been deleted")
        router.push("/app/project")
    },
    onError : () => {
        //handle error 
    }
  })

  return (

    

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
            <div className="fixed inset-0 bg-sky-100 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[400px] min-h-[100px] h-fit flex flex-wrap gap-8 z-[100] transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <h2 className="text-center text-lg font-semibold">
                    Are you sure you want to destroy this project? 
                  </h2>

                  <div className="w-full h-[50px] flex items-center justify-center gap-x-8">
                    <AbdullahButton 
                        isLoading={mutation.isLoading}
                       onClick={() => {
                        mutation.mutate({project_id : getProjectMetaData()})
                       }} className={buttonVariants({ variant: 'primary' })}>
                      Confirm
                    </AbdullahButton>
                    <AbdullahButton 
                    
                    onClick={closeModal} className={buttonVariants({ variant: 'secondary' })}>
                      Cancel
                    </AbdullahButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

  );
}
