import React from 'react'
import { Paper } from "~/components/ui/Paper";
import { TimePicker } from '~/components/ui/TimePicker';
import { AbdullahButton } from '~/components/ui/buildingBlocks/AbdullahButton';
export const Tasks = () => {
  return (
    <Paper>
        <div className='w-full h-[50px] flex items-center justify-between px-8 my-4'>
           <div className='w-[70%]'>
           <p className='font-semibold text-xl text-gray-900'>this is a task name </p>
           </div>
           <div className='w-[40%]'>
           {/* <TimePicker  /> */}
           </div>
        </div>
        <div className='w-full h-[50px] flex items-center justify-between px-8 my-4'>
           <div className='w-[70%]'>
           <p className='font-semibold text-xl text-gray-900'>this is a task name </p>
           </div>
           <div className='w-[40%]'>
           {/* <TimePicker  /> */}
           </div>
        </div>
        
        <div className='w-full h-[50px] flex items-center justify-between px-8 my-4'>
           <div className='w-[70%]'>
           <p className='font-semibold text-xl text-gray-900'>this is a task name </p>
           </div>
           <div className='w-[40%]'>
           {/* <TimePicker  /> */}
           </div>
        </div>
        
        
        <div className="bg-white px-4 my-4 py-3 text-right sm:px-8">
        <AbdullahButton  
            onClick={() => console.log("hi there")}
           
            title='save the changes '
            className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>
    </Paper>
  )
}

