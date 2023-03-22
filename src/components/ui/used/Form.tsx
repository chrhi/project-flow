import React, { ReactNode } from 'react'

type FromPropsType ={
    children : ReactNode ,
    onSubmit : React.FormEventHandler<HTMLFormElement> | undefined
}

export const Form = ({children , onSubmit}:FromPropsType) => {
  return (
    <form className='bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%]  '  onSubmit={onSubmit}>
    <div className="overflow-hidden shadow  sm:rounded-md">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
         {children}
        </div>
      </div>
    </div>
    </form>  
  )
}

