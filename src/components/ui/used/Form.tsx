import React, { ReactNode } from 'react'

type FromPropsType ={
    children : ReactNode ,
    // onSubmit? : React.FormEventHandler<HTMLFormElement> | undefined
    className? : string ,
}



export const Form = ({children , className }:FromPropsType) => {
  return (
    <div className={`bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%] ${className ? className : ""} `} >
    <div className="overflow-hidden shadow  sm:rounded-md">
      
         {children}
       
    </div>
    </div>  
  )
}

