import { Button } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import { Switch } from '@headlessui/react'

type pageHeadProps =  {
  enabled:boolean | undefined , 
  setEnabled : Dispatch<SetStateAction<boolean | undefined>>,
}


export  const PageHead = ({enabled , setEnabled} : pageHeadProps) => {
  return (
    <div className='w-[90%] mx-auto h-[70px] flex items-center justify-between'>
        <h1 className='text-3xl font-semibold '>
        👉 project scope
        </h1>
    <div>
        
    <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`bg-gray-400
          relative inline-flex h-[25px] w-[55px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
    </Switch>
        </div>
    </div>
  )
}

