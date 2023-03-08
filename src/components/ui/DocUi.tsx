import { IconButton } from '@mui/material'
import React from 'react'

export  const DocUi = () => {
  return (
    <div className='w-[400px] shadow-sm rounded bg-white gap-x-3 h-[80px] flex items-center p-4 '>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
         </svg>
        
         <div className='w-[90%] h-full  flex flex-col justify-center '>
           <div className='w-full h-[30px] p-4 flex items-center justify-between'>
           <h1 className='text-xl text-gray-900 '>thsi is the tag</h1>
           <IconButton>
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
               </svg>

            </IconButton>
           </div>
           
           <div className='w-full h-[40px] p-4 flex justify-between items-center'>
           
           <p>sponssor</p>
           <p>20/03/2017</p>
           </div>
         </div>
    </div>
  )
}

