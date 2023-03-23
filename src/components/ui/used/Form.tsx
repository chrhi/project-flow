import React, { ReactNode } from 'react'

type FromPropsType ={
    children : ReactNode ,
    onSubmit : React.FormEventHandler<HTMLFormElement> | undefined
}



export const Form = ({children , onSubmit}:FromPropsType) => {
  return (
    <form className='bg-white mb-8 w-[95%] md:w-[70%] xl:w-[50%]  '  onSubmit={onSubmit}>
    <div className="overflow-hidden shadow  sm:rounded-md">
      
         {children}
       
    </div>
    </form>  
  )
}

