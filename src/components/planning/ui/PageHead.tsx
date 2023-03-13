import { Button } from '@mui/material'
import React from 'react'

export  const PageHead = () => {
  return (
    <div className='w-full h-[70px] flex items-center justify-between'>
        <h1 className='text-2xl font-bold '>
        👉Get Started Here
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

