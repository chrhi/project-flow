import React, { ReactNode } from 'react'

type FromPropsType ={
    children : ReactNode ,
    // onSubmit? : React.FormEventHandler<HTMLFormElement> | undefined
    className? : string ,
}



export const Form = ({children , className }:FromPropsType) => {
  return (
    <div className={`bg-white mb-8 w-[90%] max-w-7xl ${className ? className : ""} `} >
    <div className="overflow-hidden shadow  sm:rounded-md">
      
         {children}
       
    </div>
    </div>  
  )
}

