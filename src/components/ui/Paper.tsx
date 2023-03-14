import React, { ReactNode } from 'react'

type PaperType = {
    children : ReactNode
} 
 
export const Paper = ({children}:PaperType) => {
  return (
    <div className='w-[90%] mx-auto h-[70vh] bg-white rounded-lg overflow-y-auto '>
        {children}
    </div>
  )
}
