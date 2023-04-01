import React, { Dispatch, ReactNode, SetStateAction } from 'react'

type Props = {
    children : ReactNode ,
    className? : string , 
    isOpen? : boolean ,
    setIsOpen?: Dispatch<SetStateAction<boolean>> 
  
}

export const FormContainer = ({children , className , isOpen , setIsOpen }:Props) => {
  return (
    <div className={`ml-[16rem] scrollbar-hide mx-auto custopn-page-height   ${isOpen ? "custom-new-width" : "custom-width "}  flex flex-col items-center overflow-y-auto pt-4 ${className? className : ""}`}  >
        {children}
    </div>
  )
}
