import React from 'react'

export  const Row = () => {
  return (
    <div className='bg-white w-[90%] mx-auto flex items-center justify-evenly p-4 shadow gap-x-4 my-4 rounded-lg  hover:shadow-2xl    transition duration-500 transform hover:-translate-y-1
    '>
        <div className='w-[10%]'>
    <p>abdullah</p>
        </div>
        <div className='w-[20%]'>
            <p className='text-start'>mahdi.chahri55@gmail.com</p>
        </div>
        <div className='w-[15%]'>
            <p className='text-start' >937628443</p>
        </div>
        <div className='w-[30%]'>
            <p className='text-start' >this is a really lage text</p>
        </div>
        <div className='w-[5%]'>
            <p className='text-start' >low </p>
        </div>
        <div className='w-[15%] gap-x-4 flex  '>
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

