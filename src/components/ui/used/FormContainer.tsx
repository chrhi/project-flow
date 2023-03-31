import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode ,
    className? : string , 
  
}

export const FormContainer = ({children , className }:Props) => {
  return (
    <div className={`ml-[16rem] custopn-page-height custom-width  flex flex-col items-center overflow-y-auto pt-4 ${className? className : ""}`}  >
        {children}
    </div>
  )
}
