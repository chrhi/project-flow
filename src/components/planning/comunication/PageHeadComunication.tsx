import { Button } from '@mui/material'
import React from 'react'

export  const PageHeadComunication = () => {
  return (
    <div className='w-[90%] mx-auto h-[70px] flex items-center justify-between'>
    <h1 className='text-3xl font-semibold '>
    👉register mettings 
    </h1>
    <div>
    <Button
        className=" !px-4 !py-1.5 !rouned-lg  !normal-case !bg-white  !items-center !text-gray-900 ">
         editor mode
    </Button>
    </div>
</div>
  )
}

