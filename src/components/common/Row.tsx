import React from 'react'

export  const Row = () => {
  return (
    <div className='bg-white w-[90%] mx-auto flex items-center justify-evenly p-4 shadow gap-x-4 border-b   hover:shadow-2xl    transition duration-500 transform hover:-translate-y-1
    '>
         <div className='w-[20%]'>
            <p className='text-gray-900 font-bold text-start'>abdullah</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-gray-900  font-bold'>something</p>
      </div>
   
      <div className='w-[30%]'>
            <p className='text-start text-gray-900  font-bold' >responsable for doing such and such</p>
      </div>
        <div className='w-[20%] gap-x-4 flex  '>
            <button   className='py-2 px-4 flex items-center w-[50px]  bg-[#9147ff] hover:bg-[#7927f6] text-white rounded-lg cursor-pointer font-bold'>
                update
            </button>
            <button   className='py-2 px-4 flex items-center w-[50px] bg-[#9147ff] hover:bg-[#7927f6] text-white rounded-lg cursor-pointer font-bold'>
                remove
            </button>
        </div>
    </div>
  )
}

