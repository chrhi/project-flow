import React, { useEffect, useState } from 'react'
import { Paper } from "~/components/ui/Paper";
import { toast } from 'react-toastify';
import { api } from '~/utils/api';
import { getProjectMetaData } from '~/lib/MetaData';
import { loading_Reducer } from '~/store/app-reducer/loadingReducer';
import { TimePicker } from '~/components/ui/TimePicker';
import { AbdullahEffectButton } from '~/components/ui/buildingBlocks/AbdullahEffectButton';
import { AbdullahButton, buttonVariants } from '~/components/ui/buildingBlocks/AbdullahButton';
import { AlgeriaformatDate, parseDupaBaseDateString } from '~/utils/formate/AlgeriaFormate';


type task = {
   name : string , 
   id : string , 
   due_date : string ,
   start_at : string

 }

export const Tasks = () => {
   const [tasks , setTasks] = useState<task[]>([] as task[])
   const [start_at , setStartAt] = useState<Date>(new Date())
   const [ends_at , setEndsAt] = useState<Date>(new Date())
   const set_loading = loading_Reducer(state => state.set_isLoading)
   const tasksGet = api.tasksRouter.getAllTasks.useQuery({project_id : getProjectMetaData()},{
      onSuccess(data) {
        setTasks(data as task[])
     
      
        set_loading(false)
      },
      onError(err) {
        console.log(err)
        toast("error fetching the tasks  ",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         set_loading(false)
         },
    })
    const update = api.tasksRouter.updateTask.useMutation({
      onSuccess : async ()  => {
         toast("updated successfully  ",{
            className:" !text-white !bg-blue-500",
            hideProgressBar: true,
           })
         await tasksGet.refetch()
        set_loading(false)
      },
      onError() {
     
        toast("error something went wrong  ",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         set_loading(false)
         },
    })
    useEffect(() => {
      if(tasksGet.isFetching){
        set_loading(true)
      }
    }, [  set_loading , tasksGet.isFetching])

    function assignTimeTotask (id : string , name : string ,  start : Date , end : Date ){
      update.mutate({
         id ,
         name , 
         due_date : end ,
         start_at : start,
         on_going : true
      })
     
    }

  return (
    <Paper>
       <div className='w-full h-full flex flex-col p-8 '>
            <div  className='flex  w-[90%] mx-auto h-[50px] mb-4 '>
                 <div className='w-[25%]'>
                 <p className='text-sm text-gray-600 col-span-2 '>Name</p>
                  </div>
                  <div className='w-[25%]'>
                  <p className='text-sm text-gray-600 ' >start at </p>
                  </div>
                  <div className='w-[25%]'>
                  <p className='text-sm text-gray-600 '>due date </p>
                  </div>
                  <div className='w-[25%]'>
                  <p className='text-sm text-gray-600 col-span-2 '>Actions</p>
                  </div>            
            </div>
       {
         tasks.map(item => (
            <div key={item.id} className='flex w-[90%]  mx-auto h-[50px] '>
                  <div className='w-[25%]'>
                  <p className='text-md text-gray-800  font-bold'>{item.name}</p>
                  </div>
                  <div className='w-[25%]'>
                  <p className='text-md text-gray-800 '>{ AlgeriaformatDate(parseDupaBaseDateString(item.due_date))} </p>
                  </div>
                  <div className='w-[25%]'>
                  <p className='text-md text-gray-800 ' >{AlgeriaformatDate(parseDupaBaseDateString(item.start_at))} </p>
                  </div>
                  <div className='w-[25%] flex gap-x-2'>
                  <TimePicker
                   onlyIcon 
                   callBack={( start : Date , end : Date ) => assignTimeTotask(item.id , item.name , start  , end )} 
                   setEndDate={setEndsAt} 
                   endDate={ends_at} 
                   startDate={start_at} 
                   setStartDate={setStartAt} 
                   isLoading={update.isLoading}
                   />
               
                  </div>   

                
                 
                

                 
            </div>

         ))
       }
       </div>
    </Paper>
  )
}

