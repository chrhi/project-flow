import React from 'react'



export const uploadHeader = () => {
  return (
    <div className='w-full h-[50px] flex flex-between p-4 items-center'>
        <h1 className='font-bold text-gray-900 text-2xl '>startup/documents </h1>
        <button>
            upload new document
        </button>
    </div>
  )
}