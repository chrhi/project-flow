import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode ,
  
}

export const FormContainer = ({children }:Props) => {
  return (
    <div className='ml-[16rem] custopn-page-height custom-width  flex flex-col items-center overflow-y-auto pt-4'  >
        {children}
    </div>
  )
}
