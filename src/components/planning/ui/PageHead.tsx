import { Button } from '@mui/material'
import React from 'react'

export  const PageHead = () => {
  return (
    <div className='w-[90%] mx-auto h-[70px] flex items-center justify-between'>
        <h1 className='text-3xl font-semibold '>
        👉Get Started Here with project scope
        </h1>
        <div>
        <Button
        className=" !px-4 !py-2 !rouned-lg !normal-case !bg-white  !items-center !text-gray-900 ">
          editor mode
      </Button>
        </div>
    </div>
  )
}

