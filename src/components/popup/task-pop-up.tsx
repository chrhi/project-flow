import { Dialog, Transition } from '@headlessui/react'
import { type Dispatch, Fragment, type SetStateAction, useState } from 'react'
import { AbdullahButton , buttonVariants } from '~/components/used/AbdullahButton'
import { Input } from '~/components/used/Input'
import  toast  from 'react-hot-toast';
import Select from 'react-select';
import { TextField } from '~/components/used/TextField';
import { OPTIONS} from '~/types/static/STATICDATA'
import { api } from '~/utils/api'
import { getProjectMetaData } from '~/lib/MetaData'

import NewTimePicker from '../used/NewTimePicker'
import type { DateRangePickerValue } from '@tremor/react'
import { openTasksShowUp } from '~/store/open-models';
import { DatePickerWithRange } from '../ui/date-range-picker';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';


type Props = {
  refetch : () => Promise<any>,

}


export  function TaskPopUpShowCase ({refetch} : Props ) {

    const isOpen = openTasksShowUp(state => state.showModel)
    const setIsOpen  = openTasksShowUp(state => state.setShowModel)
    const id  = openTasksShowUp(state => state.id)

    const [inputs , setInput ] = useState({
      title : "" ,
      Priority : "",
      cost : 0,
      description : "",
      AssignTo : [] as any[],
      AlocatedRessources : [] as any[]
    })
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 20),
    })
    const [FechedStakeHolders, setFechedStakeHolders] = useState<{label: string  , value : string}[]>([]);
    const [FechedResources, setFechedResources] = useState<{label: string  , value : string}[]>([]);

  api.StakeHolderRouter.get_stakeholders.useQuery({projectId : getProjectMetaData()},{
    onSuccess:(data) => {
      const prepare = data.map(item => {
        return {
          label : item.name || "", 
          value : item.id || ""
        }
      })
      setFechedStakeHolders(prepare)
    }, 
    onError : () => {
      toast.error("failed to fetch stakeholders")
    }
  })
 api.resourcesRouter.getResources.useQuery({projectId : getProjectMetaData()},{
    onSuccess:(data) => {
      const prepare = data.map(item => {
        return {
          label : item.name || "", 
          value : item.id || ""
        }
      })
      setFechedResources(prepare)
    }, 
    onError : () => {
      toast.error("failed to fetch stakeholders")
    }
  })

  const taskMutation = api.tasksRouter.createTask.useMutation({
    onSuccess:() => {
      toast.success("new task added ")
      setIsOpen(false)
    }, 
    onError : () => {
      toast.error("failed to create new task check your internet connection")
    }
  })

  api.tasksRouter.getTask.useQuery({id  },{
    onSuccess : (data) => {
      setInput({
        title : data?.title || "",
        cost : Number(data?.cost ) || 0 , 
        description : data?.description || "" , 
        Priority : data?.Priority  || "", 
        AlocatedRessources :  [JSON.stringify(data?.AlocatedRessources)] ,
        AssignTo : [JSON.stringify(data?.AssignedTo)] ,

      })
      // setValue([data?.StartAt , data?.EndsAt])
      setValue({
        from : data?.StartAt || new Date() , 
        to : data?.EndsAt || new Date()
      })
    },
    onError : () => {
      toast.error("failed to fetch the task")
    }
  })

 const deleteTask =  api.tasksRouter.deleteTask.useMutation ({
    onSuccess: async() => {
      toast.success(" task deleted")
      setIsOpen(false)
      await refetch()
    }, 
    onError : () => {
      toast.error("failed to delete the task check your internet connection may be ?")
      
    }
  })

   const handleSubmit = () => {

      if(!inputs.title ){
        toast.error("task title is required")
        return
      }
    
      taskMutation.mutate({
        title : inputs.title ,
        description : inputs.description,
        AlocatedRessources : inputs.AlocatedRessources , 
        AssignTo : inputs.AssignTo , 
        cost : Number(inputs.cost) , 
        endsAt : value?.to as Date , 
        startAt : value?.from as Date  ,
        projectId : getProjectMetaData(),
        Color : ""
      })
  

    }
    
    const handleDelete = () =>  deleteTask.mutate({ id }) 

   

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
                <Dialog.Panel className="w-[900px] h-[580px]   z-[100]  transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                    as="div"
                    className=" w-[100%] mx-auto  h-[50px] flex justify-between items-center px-4 border-b "
                  >
               <div><p className='text-md text-gray-900 font-semibold  ml-4'>{inputs.title}</p></div>  
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
                               value={inputs.title}
                               onChange={(e) => setInput({...inputs , title : e.target.value})}
                           />
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                       Assign to
                                  </label>
                                  <Select
                                          
                                           onChange={(e) => setInput({...inputs , AssignTo : e.map(item => item.value) })}  
                                           name="stakholders"
                                           options={FechedStakeHolders}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                           isMulti
                                   />
                            </div>
                            <div className="col-span-6">
                            <DatePickerWithRange label="sélectionner la plage de la date"  date={value} setDate={setValue} />
                              </div>
                          
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                      Alocated ressources
                                  </label>
                                  <Select
                                           isMulti 
                                           onChange={(e) => setInput({...inputs , AlocatedRessources : e.map(item => item.value) })}  
                                           name="Ressources"
                                           options={FechedResources}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                            <div className='col-span-6 '>
                                   <label  className="block text-sm font-medium leading-6 text-gray-900">
                                       Priority
                                  </label>
                                  <Select
                                          onChange={(e) => setInput({...inputs , Priority : e?.value  || ""})}  
                                          
                                           name="Priority"
                                           options={OPTIONS}
                                           className="basic-multi-select"
                                           classNamePrefix="select"
                                   />
                            </div>
                         
                            <Input
                               type ="number"
                               onChange={(e) => setInput({...inputs , cost : Number(e?.target.value ) || 0})}  
                               lable='cost'
                               value={inputs.cost}
                              
                             />
                             
                             <TextField
                               className='lg:col-span-12'
                               lable='description'
                               value={inputs.description}
                               onChange={(e) => setInput({...inputs , description : e?.target.value  || ""})}  
                             />
                       </div>
                       <div className='w-fill grid-col-12  h-[50px] my-4 flex justify-end items-center gap-x-8'>
                            <AbdullahButton className={` ${buttonVariants({ variant:"secondary"}) } bg-red-500 text-white`} onClick={handleDelete}>delete task</AbdullahButton>
                            <AbdullahButton isLoading  = {taskMutation.isLoading} onClick={handleSubmit} className={buttonVariants({ variant:"primary"})}>update task</AbdullahButton>
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