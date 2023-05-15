import { Dialog, Transition } from '@headlessui/react'
import { type Dispatch, Fragment, type SetStateAction, useState } from 'react'
import { AbdullahButton , buttonVariants } from '~/components/ui/buildingBlocks/AbdullahButton'
import { api } from '~/utils/api'
import { Input } from '~/components/ui/used/Input'
import { toast } from 'react-toastify'
import Select from 'react-select';
import { TextField } from '~/components/ui/used/TextField';
import { OPTIONS} from '~/types/static/STATICDATA'



interface Props {
  
    parent_id : string ,
    isOpen : boolean ,
    setIsOpen : Dispatch<SetStateAction<boolean>>,
    refetch : () => Promise<any>,
    refetchMileStones : () => Promise<any>,
    onAdd?: ({title , text , shape } : {title: string , text: string , shape : string }) => void

}


export  function Treepopup ({parent_id , isOpen , setIsOpen , refetch , refetchMileStones , onAdd} : Props) {
  
    const [input , setInput ] = useState("")
    const [update, setUpdate] = useState(false);

    const post = api.tasksRouter.createTask.useMutation({
      onSuccess :async () => {
        toast("new task was added",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         await refetch()
         setUpdate(update => !update)
         await refetchMileStones()
         setUpdate(update => !update)
       
         setIsOpen(false)

      },
      onError(error){
        console.log(error)
        toast("error adding the task",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
      }
    })

   const handleSubmit = () => {

    

    // post.mutate({
    //   parent_id ,
    //   name : input ,
    //   cost : 0 ,
     
     
    //   on_going : true ,
    //   project_id : getProjectMetaData(),
     
    // })
    if(onAdd === undefined) return
    onAdd({text : "" , title : input , shape : "" })
    setIsOpen(false)
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
                <Dialog.Panel className="w-[900px] h-[650px]   z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                    as="div"
                    className=" w-[100%] mx-auto  h-[50px] flex justify-between items-center px-4 border-b "
                  >
               <div><p className='text-md text-gray-900 font-semibold  ml-4'>Create a new task</p></div>  
               <div>
                    <button
                          onClick={() => setIsOpen(false)}
                          className='!text-xl !font-semibold !text-slate-900 !p-0  '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                </div> 
                  </Dialog.Title>
                <div className="bg-white p-4  w-full  ">
                      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
                          <Input
                               lable='Title'
                               value={""}
                               onChange={(e) => {console.log(e)}}
                           />
                           
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                       Color
                                  </label>
                                  <Select
                                           onChange={(e) => console.log(e)}  
                                           name="stakholders"
                                           options={OPTIONS}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                       Assign to
                                  </label>
                                  <Select
                                           onChange={(e) => console.log(e)}  
                                           name="stakholders"
                                           options={OPTIONS}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                      Alocated ressources
                                  </label>
                                  <Select
                                           onChange={(e) => console.log(e)}  
                                           name="stakholders"
                                           options={OPTIONS}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                       Priority
                                  </label>
                                  <Select
                                           onChange={(e) => console.log(e)}  
                                           name="stakholders"
                                           options={OPTIONS}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                       Shape
                                  </label>
                                  <Select
                                           onChange={(e) => console.log(e)}  
                                           name="stakholders"
                                           options={OPTIONS}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                            <Input
                               lable='cost'
                               value={""}
                               onChange={(e) => {console.log(e)}}
                             />
                              <Input
                               lable='schedual'
                               value={""}
                               onChange={(e) => {console.log(e)}}
                              />
                             <TextField
                               className='lg:col-span-12'
                               lable='description'
                               value={""}
                               onChange={(e) => console.log(e)}
                             />
                       </div>
                       <div className='w-fill grid-col-12  h-[50px] my-4 flex justify-end items-center gap-x-8'>
                            <AbdullahButton className={` ${buttonVariants({ variant:"secondary"})} bg-gray-300 text-gray-900`} onClick={() => setIsOpen(false)}>cancel</AbdullahButton>
                            <AbdullahButton isLoading  = {post.isLoading} onClick={handleSubmit} className={buttonVariants({ variant:"primary"})}>Create Task</AbdullahButton>
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
