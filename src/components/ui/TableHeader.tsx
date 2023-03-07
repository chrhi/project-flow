import React from 'react'

export  const TableHeader = () => {
  return (
    <div className='bg-indigo-500 w-[90%] mx-auto flex items-center justify-evenly p-4 shadow gap-x-4 my-4 rounded-lg '>
      <div className='w-[10%]'>
            <p className='text-white font-bold text-start'>name</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-white font-bold'>email</p>
      </div>
      <div className='w-[15%]'>
            <p className='text-start text-white font-bold' >phone number</p>
      </div>
      <div className='w-[30%]'>
            <p className='text-start text-white font-bold' >description</p>
      </div>
      <div className='w-[5%]'>
            <p className='text-start text-white font-bold' >low </p>
      </div>
      <div className='w-[15%] gap-y-4 flex flex-col  '>
             <p className='text-white font-bold '>actions</p>
      </div>
    </div>
  )
}

