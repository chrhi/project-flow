import React, { FormEvent } from 'react'
import { AbdullahButton, buttonVariants } from './AbdullahButton'

interface FromButtonprops extends  React.HTMLAttributes<HTMLButtonElement>{
   name : string
}


export  function FormButtonAction({ name ,  ...props } : FromButtonprops) {
  return (
    <div className="bg-white dark:bg-neutral-900  py-3 col-span-6 lg:col-span-12 text-right ">
    
    
      
      <AbdullahButton
      type="submit"
      className={buttonVariants({size:"sm", variant:'primary'})}
      isLoading ={false}
      {...props}
      >
            {name}
      </AbdullahButton>
     
   </div>
  )
}
